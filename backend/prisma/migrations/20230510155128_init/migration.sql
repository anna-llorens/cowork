-- CreateTable
CREATE TABLE "Cowork" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Cowork_pkey" PRIMARY KEY ("id")
);
