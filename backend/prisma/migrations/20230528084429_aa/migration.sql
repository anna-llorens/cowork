/*
  Warnings:

  - You are about to drop the column `address` on the `Cowork` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cowork" DROP COLUMN "address",
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);
