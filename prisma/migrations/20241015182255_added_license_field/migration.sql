/*
  Warnings:

  - You are about to drop the column `licenca` on the `Payment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Payment_licenca_key` ON `Payment`;

-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `licenca`,
    ADD COLUMN `license` VARCHAR(191) NULL;
