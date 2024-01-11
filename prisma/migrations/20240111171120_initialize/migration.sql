-- CreateTable
CREATE TABLE "Clothing_Item" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "garment_type" TEXT NOT NULL,
    "weather_compatability" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "style_type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Clothing_Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Preferences" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "style_type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "forMen" BOOLEAN NOT NULL,

    CONSTRAINT "User_Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outfit" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "name" TEXT NOT NULL,
    "weather_compatability" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "style_type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "forMen" BOOLEAN NOT NULL,

    CONSTRAINT "Outfit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Preferences_username_key" ON "User_Preferences"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Outfit_user_id_key" ON "Outfit"("user_id");

-- AddForeignKey
ALTER TABLE "Clothing_Item" ADD CONSTRAINT "Clothing_Item_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User_Preferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User_Preferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
