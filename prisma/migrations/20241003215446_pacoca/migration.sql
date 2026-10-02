/*
  Warnings:

  - A unique constraint covering the columns `[gatewayId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Payment` ALTER COLUMN `gatewayId` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Payment_gatewayId_key` ON `Payment`(`gatewayId`);
