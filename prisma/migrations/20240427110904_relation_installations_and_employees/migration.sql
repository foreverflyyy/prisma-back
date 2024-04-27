-- AlterTable
ALTER TABLE "installations" ADD COLUMN     "employeeId" TEXT;

-- AddForeignKey
ALTER TABLE "installations" ADD CONSTRAINT "installations_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
