import { prisma } from '@/pages/api/server/db/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    const { id, firstName, lastName, email, cpf, role, password } = req.body;

    console.log('Atualizando usuário:', { id, firstName, lastName, email, cpf, role });

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id: id },
        });

        if (!existingUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verifica se o email já existe (exceto o usuário atual)
        if (email && email !== existingUser.email) {
            const emailExists = await prisma.user.findUnique({
                where: { email },
            });

            if (emailExists) {
                return res.status(400).json({ message: 'Esse email já existe' });
            }
        }

        // Verifica se o CPF já existe (exceto o usuário atual)
        if (cpf && cpf !== existingUser.cpf) {
            const cpfExists = await prisma.user.findUnique({
                where: { cpf },
            });

            if (cpfExists) {
                return res.status(400).json({ message: 'Esse CPF já existe' });
            }
        }

        // Hash da nova senha se fornecida
        let hashedPassword = undefined;
        if (password && password.trim() !== '') {
            const saltRounds = 12;
            hashedPassword = await bcrypt.hash(password, saltRounds);
        }

        // Construir objeto de dados apenas com campos válidos
        const updateData = {
            email: email || existingUser.email,
            role: role || existingUser.role,
        };

        // Adicionar campos opcionais apenas se fornecidos
        if (firstName !== undefined || lastName !== undefined) {
            updateData.name = `${firstName || ''} ${lastName || ''}`.trim() || null;
        }
        if (cpf !== undefined) updateData.cpf = cpf;
        if (hashedPassword !== undefined) updateData.password = hashedPassword;

        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: updateData,
        });

        // Remove a senha do response por segurança
        const { password: _, ...userWithoutPassword } = updatedUser;

        res.status(200).json({
            success: true,
            message: 'Usuário atualizado com sucesso!',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Erro ao editar usuário:', error);
        res.status(500).json({ message: 'Erro ao editar usuário' });
    }
}
