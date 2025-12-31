import { prisma } from "@/db/prisma";
import {
  users,
  departments,
  bannerImages,
  appSettings,
  workingDays,
} from "./dummydata2";

//import { prisma } from "./prisma";
//const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  // Seed Working Days
  for (const day of workingDays) {
    await prisma.workingDay.upsert({
      where: { dayOfWeek: day.dayOfWeek },
      update: { isWorkingDay: day.isWorkingDay },
      create: day,
    });
  }
  console.log("Working days seeded.");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
