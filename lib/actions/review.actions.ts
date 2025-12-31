"use server";

import { ServerActionResponse, DoctorReview } from "@/types";
import { getAppTimeZone } from "@/lib/config";
import { prisma } from "@/db/prisma";
import { format, toZonedTime } from "date-fns-tz";

/**
 * Fetches all doctor testimonials, converting the review date to the application's timezone.
 * @returns A promise that resolves to a ServerActionResponse containing the list of doctor reviews.
 */
export async function getDoctorTestimonials(): Promise<
  ServerActionResponse<DoctorReview[]>
> {
  try {
    // Retrieve the application's default timezone.
    const timeZone = getAppTimeZone();

    // Fetch all testimonials from the database, including related patient info.
    // The testimonials are ordered by creation date to show the most recent first.
    const testimonials = await prisma.doctorTestimonial.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
        {
          rating: "desc",
        },
      ],
      take: 3,
      include: {
        // Include the patient model to access the patient's name and image.
        patient: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    // Map the raw testimonial data to the DoctorReview format.
    const formattedTestimonials: DoctorReview[] = testimonials.map(
      (testimonial) => {
        // The 'createdAt' date is stored in UTC in the database.
        const utcDate = testimonial.createdAt;
        //console.log("utcDate: " + utcDate);
        // Convert the UTC date to the application's configured timezone.
        const zonedDate = toZonedTime(utcDate, timeZone);
        //console.log("zonedDate: " + zonedDate);
        // Format the zoned date into a readable string (e.g., "25 Dec 2023").
        const formattedDate = format(zonedDate, "dd MMM yyyy 'at' hh:mm a");
        //console.log("formattedDate: " + formattedDate);

        return {
          id: testimonial.testimonialId,
          rating: testimonial.rating,
          reviewDate: formattedDate,
          // Note: Mapping to 'texstimonialText' as per the provided DoctorReview type.
          testimonialText: testimonial.testimonialText,
          patientName: testimonial.patient.name,
          patientImage: testimonial.patient.image || null,
        };
      }
    );

    // Return a successful response with the formatted data.
    return {
      success: true,
      data: formattedTestimonials,
      message: "Top testimonial fetch successfully",
    };
  } catch (error) {
    // Log the error for debugging purposes on the server.
    console.error("Error fetching doctor testimonials:", error);

    // Determine the error message to return.
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    // Return a structured error response.
    return {
      success: false,
      message: "Failed to fetch testimonials. Please try again later.",
      error: errorMessage,
      errorType: "SERVER_ERROR",
    };
  }
}
