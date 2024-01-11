/*
  Warnings:

  - You are about to drop the `User_Preferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clothing_Item" DROP CONSTRAINT "Clothing_Item_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_user_id_fkey";

-- DropTable
DROP TABLE "User_Preferences";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outfit_Clothing_item" (
    "id" SERIAL NOT NULL,
    "outfit_id" INTEGER NOT NULL,
    "clothing_id" INTEGER NOT NULL,

    CONSTRAINT "Outfit_Clothing_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Clothing_Item" ADD CONSTRAINT "Clothing_Item_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit_Clothing_item" ADD CONSTRAINT "Outfit_Clothing_item_outfit_id_fkey" FOREIGN KEY ("outfit_id") REFERENCES "Outfit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit_Clothing_item" ADD CONSTRAINT "Outfit_Clothing_item_clothing_id_fkey" FOREIGN KEY ("clothing_id") REFERENCES "Clothing_Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
