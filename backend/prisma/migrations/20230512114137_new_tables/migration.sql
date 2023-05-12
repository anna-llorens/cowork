/*
  Warnings:

  - Added the required column `address` to the `Cowork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Cowork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cowork" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_Votes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Votes_AB_unique" ON "_Votes"("A", "B");

-- CreateIndex
CREATE INDEX "_Votes_B_index" ON "_Votes"("B");

-- AddForeignKey
ALTER TABLE "_Votes" ADD CONSTRAINT "_Votes_A_fkey" FOREIGN KEY ("A") REFERENCES "Cowork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Votes" ADD CONSTRAINT "_Votes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
