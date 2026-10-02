/*
  Warnings:

  - You are about to alter the column `userId` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `productId` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `userId` INTEGER NOT NULL,
    MODIFY `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `productKey` VARCHAR(191) NOT NULL DEFAULT 'kjfneuisfui';

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
