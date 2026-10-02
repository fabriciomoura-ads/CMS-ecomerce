import { getAllUsers } from '@/pages/api/server/db/user/getAllUsers';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const session = await getServerSession(req, res);

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
}