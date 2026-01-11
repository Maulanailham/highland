import { prisma } from "@/db/prisma";
import { LeaveType } from "@/lib/generated/prisma/enums";

async function main() {
  // --- Placeholder for Doctor IDs ---
  const doctorIds = [
    "a7916ada-dee4-4f5b-9bbd-d07c08a273b8", // Replace with actual doctor ID
    "4b6d38d2-65fb-4a6f-8f31-edad4f9dd213", // Replace with actual doctor ID
    "2bbd8ef8-ffa5-4be9-88a3-871937eb2e21", // Replace with actual doctor ID
  ];

  // --- Leave Dates ---
  // Note: The script will create overlapping leave requests for the same day
  // for each doctor for demonstration purposes. In a real-world scenario,
  // you would likely only create one leave type per doctor per day.
  const leaveDate = new Date("2026-01-16T00:00:00Z");

  console.log("Setting leave for doctors...");

  // --- Set FULL_DAY Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[0],
      leaveDate: leaveDate,
      leaveType: LeaveType.FULL_DAY,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set FULL_DAY leave for doctor ${
      doctorIds[0]
    } on ${leaveDate.toDateString()}`
  );

  // --- Set MORNING Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[1],
      leaveDate: leaveDate,
      leaveType: LeaveType.MORNING,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set MORNING leave for doctor ${
      doctorIds[1]
    } on ${leaveDate.toDateString()}`
  );

  // --- Set AFTERNOON Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[2],
      leaveDate: leaveDate,
      leaveType: LeaveType.AFTERNOON,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set AFTERNOON leave for doctor ${
      doctorIds[2]
    } on ${leaveDate.toDateString()}`
  );

  console.log("Leave setting finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
