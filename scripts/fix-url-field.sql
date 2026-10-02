-- Script para alterar o campo url na tabela ProductImage para TEXT
-- Execute este script manualmente se npx prisma db push não funcionar

ALTER TABLE ProductImage 
MODIFY COLUMN url TEXT NOT NULL;

-- Verificar se a alteração foi aplicada
DESCRIBE ProductImage;