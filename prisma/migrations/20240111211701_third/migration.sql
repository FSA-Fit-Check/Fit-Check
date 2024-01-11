/*
  Warnings:

  - You are about to drop the column `forMen` on the `Outfit` table. All the data in the column will be lost.
  - Added the required column `forMen` to the `Clothing_Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clothing_Item" ADD COLUMN     "forMen" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Outfit" DROP COLUMN "forMen";
