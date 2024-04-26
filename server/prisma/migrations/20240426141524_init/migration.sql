-- CreateEnum
CREATE TYPE "TypeOperation" AS ENUM ('INSTALL', 'UPDATE');

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firmId" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "softwares" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firmId" TEXT,
    "version" TEXT NOT NULL,
    "valueId" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "softwares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "firms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "firms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "installations" (
    "id" TEXT NOT NULL,
    "softwareId" TEXT,
    "installationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cabinet" INTEGER NOT NULL,
    "typeOperation" "TypeOperation" NOT NULL DEFAULT 'INSTALL',

    CONSTRAINT "installations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "values" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "values_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "softwares_name_key" ON "softwares"("name");

-- CreateIndex
CREATE INDEX "firmId" ON "softwares"("firmId");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_firmId_fkey" FOREIGN KEY ("firmId") REFERENCES "firms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "softwares" ADD CONSTRAINT "softwares_firmId_fkey" FOREIGN KEY ("firmId") REFERENCES "firms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "installations" ADD CONSTRAINT "installations_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "softwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;
