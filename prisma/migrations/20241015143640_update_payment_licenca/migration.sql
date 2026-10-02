/*
  Warnings:

  - A unique constraint covering the columns `[licenca]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `licenca` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `licenca` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Payment_licenca_key` ON `Payment`(`licenca`);
