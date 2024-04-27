-- AlterTable
ALTER TABLE "softwares" ADD COLUMN     "developerId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "softwares" ADD CONSTRAINT "softwares_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
