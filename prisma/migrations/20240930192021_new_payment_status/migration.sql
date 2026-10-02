/*
  Warnings:

  - The values [PIX,CREDITO,DEBITO] on the enum `Payment_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `status` ENUM('APPROVED', 'PENDING') NOT NULL;
