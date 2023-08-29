/*
  Warnings:

  - A unique constraint covering the columns `[coworkId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coworkId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "coworkId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_coworkId_key" ON "Address"("coworkId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_coworkId_fkey" FOREIGN KEY ("coworkId") REFERENCES "Cowork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
