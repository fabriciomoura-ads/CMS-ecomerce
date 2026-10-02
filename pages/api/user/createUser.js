import { prisma } from '@/pages/api/server/db/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    console.log('🔍 Debug: API createUser iniciada');

    const { firstName, lastName, email, cpf, role, password } = req.body;

    console.log('🔍 Debug: Dados recebidos na API:', { firstName, lastName, email, cpf, role, password: password ? '***' : 'vazio' });

    try {
        // Teste de conexão com o Prisma
        console.log('🔍 Debug: Testando conexão com Prisma...');
        await prisma.$connect();
        console.log('🔍 Debug: Prisma conectado com sucesso');

        // Verifica se o email já existe
        console.log('🔍 Debug: Verificando email existente...');
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        console.log('🔍 Debug: Usuário existente:', existingUser);

        if (existingUser) {
            return res.status(400).json({ message: 'Esse email já existe' });
        }

        // Verifica se o CPF já existe (se fornecido)
        if (cpf) {
            console.log('🔍 Debug: Verificando CPF existente...');
            const existingCpf = await prisma.user.findUnique({
                where: { cpf },
            });

            console.log('🔍 Debug: CPF existente:', existingCpf);

            if (existingCpf) {
                return res.status(400).json({ message: 'Esse CPF já existe' });
            }
        }

        // Hash da senha com bcrypt
        let hashedPassword = null;
        if (password && password.trim() !== '') {
            console.log('🔍 Debug: Gerando hash da senha...');
            const saltRounds = 12;
            hashedPassword = await bcrypt.hash(password, saltRounds);
            console.log('🔍 Debug: Hash gerado com sucesso');
        }

        // Cria o novo usuário se o email não existir
        const userData = {
            name: `${firstName || ''} ${lastName || ''}`.trim() || null,
            email,
            cpf: cpf || null,
            role,
            password: hashedPassword,
        };

        console.log('🔍 Debug: Dados para criação:', { ...userData, password: hashedPassword ? '***' : 'null' });

        const newUser = await prisma.user.create({
            data: userData,
        });

        console.log('🔍 Debug: Usuário criado com sucesso:', newUser);

        // Remove a senha do response por segurança
        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({
            success: true,
            message: 'Usuário criado com sucesso!',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('❌ Erro ao criar usuário:', error);
        console.error('❌ Stack trace:', error.stack);
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}
