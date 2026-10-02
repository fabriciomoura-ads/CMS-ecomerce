/*
  Warnings:

  - The values [VALORANT,FREEFIRE,CSGO,FORTNITE,PLANOS,PC_FREEFIRE,PC_LEGIT,OUTROS_JOGOS,IOS_SEM_PC,PC,ANDROID_MOD_INJECTOR] on the enum `Category_game` will be removed. If these variants are still used in the database, this will fail.
  - The values [VALORANT,FREEFIRE,CSGO,FORTNITE,PLANOS,PC_FREEFIRE,PC_LEGIT,OUTROS_JOGOS,IOS_SEM_PC,PC,ANDROID_MOD_INJECTOR] on the enum `Category_game` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Category` MODIFY `game` ENUM('PLANO_MENSAL', 'PLANO_SEMANAL', 'PLANO_PERMANENTE') NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `game` ENUM('PLANO_MENSAL', 'PLANO_SEMANAL', 'PLANO_PERMANENTE') NOT NULL;
