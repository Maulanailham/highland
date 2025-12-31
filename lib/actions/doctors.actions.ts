"use server";

import { ServerActionResponse, DoctorSummary } from "@/types";
import { prisma } from "@/db/prisma";
import { Role } from "@/lib/generated/prisma/enums";

/**
 * Server action to fetch a summary of all active doctors.
 * This function retrieves doctors who are marked as active in their profile
 * and formats the data according to the DoctorSummary type.
 * @returns A promise that resolves to a ServerActionResponse containing an array of DoctorSummary.
 */
export async function getOurDoctors(): Promise<
  ServerActionResponse<DoctorSummary[]>
> {
  try {
    // Fetch users who have the DOCTOR role and an active profile.
    // We use `select` to efficiently query only the necessary fields.
    const doctors = await prisma.user.findMany({
      where: {
        role: Role.DOCTOR,
        doctorProfile: {
          isActive: true,
        },
      },
      select: {
        id: true,
        name: true,
        image: true, // This will be mapped to imageUrl
        doctorProfile: {
          select: {
            specialty: true,
            rating: true,
            reviewCount: true,
          },
        },
      },
      orderBy: {
        // Optional: you can order the results, e.g., by rating or name
        doctorProfile: {
          rating: "desc",
        },
      },
    });

    // The `where` clause ensures `doctorProfile` is not null, but it's good practice to handle it safely.
    if (!doctors) {
      return {
        success: true,
        data: [], // Return empty array if no doctors found
      };
    }

    // Map the fetched data to the DoctorSummary structure.
    const formattedDoctors: DoctorSummary[] = doctors.map((doc) => ({
      id: doc.id,
      name: doc.name,
      imageUrl: doc.image,
      specialty: doc.doctorProfile?.specialty ?? "N/A",
      rating: doc.doctorProfile?.rating ?? 0,
      reviewCount: doc.doctorProfile?.reviewCount ?? 0,
    }));

    // Return a success response with the formatted doctor data.
    return {
      success: true,
      data: formattedDoctors,
    };
  } catch (error) {
    // Log the detailed error for server-side debugging.

    // Return a generic error response to the client.
    return {
      success: false,
      message:
        "An unexpected error occurred while fetching doctor information.",
      error: error instanceof Error ? error.message : String(error),
      errorType: "DatabaseError",
    };
  }
}
