// app/lib/auth.ts
import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
// Use o alias se estiver configurado; caso contrário ajuste o caminho:
import { prisma } from '@/pages/api/server/db/prisma';

export const authOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'Email e senha',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      // ✅ Tipagem correta do retorno
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const db = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!db?.password) return null;

        const ok = await bcrypt.compare(credentials.password, db.password);
        if (!ok) return null;

        if (db.role !== 'ADMIN' && db.role !== 'DESIGNER') return null;

        // ✅ id como string, e campos extras permitidos via augmentation
        const authUser = {
          id: String(db.id),
          email: db.email,
          name: db.firstName ?? undefined,
          lastName: db.lastName ?? undefined,
          role: db.role, // 'CUSTOMER' | 'ADMIN' | etc.
        };

        return authUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Se logou agora (credentials ou google), garanta id/role
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: user.email } });
        if (dbUser) {
          token.id = String(dbUser.id);
          token.role = dbUser.role; // string/union é compatível
        }
      }

      // Access token do Google
      if (account?.provider === 'google' && account.access_token) {
        token.accessToken = account.access_token;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? '';
        session.user.role = token.role;
      }
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export default NextAuth(authOptions);
