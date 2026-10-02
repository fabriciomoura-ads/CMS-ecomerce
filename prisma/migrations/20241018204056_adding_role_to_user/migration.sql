-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('SUBSCRIBER', 'ADMIN') NOT NULL DEFAULT 'SUBSCRIBER';

-- CreateIndex
CREATE INDEX `User_role_fkey` ON `User`(`role`);
