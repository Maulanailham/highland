"use server";

import { prisma } from "@/db/prisma";
import { ServerActionResponse, DepartmentData, BannerImageData } from "@/types";

interface GetDepartmentData {
  departments: DepartmentData[];
}

export async function getDepartments(): Promise<
  ServerActionResponse<GetDepartmentData>
> {
  try {
    const departments = await prisma.department.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return {
      success: true,
      data: { departments: departments }, //coba
      message: "Departments fetched successfully",
    };
  } catch (error) {
    // Log the error to the console for debugging purposes

    // If an error occurs, return a failure response
    return {
      success: false,
      message: "An unexpected error occurred while fetching departments.",
      error: error instanceof Error ? error.message : String(error),
      errorType: "SERVER_ERROR",
    };
  }
}

export async function getBanners(): Promise<
  ServerActionResponse<BannerImageData[]>
> {
  try {
    // Fetch all records from the BannerImage table.
    // The 'orderBy' clause ensures that the banners are returned in the sequence
    // specified by the 'order' field, from lowest to highest.
    const banners = await prisma.bannerImage.findMany({
      orderBy: {
        order: "asc",
      },
    });

    // Return a standardized success response object containing the fetched data.
    return {
      success: true,
      data: banners,
      message: "Banner fetched successfully",
    };
  } catch (error) {
    // Log the actual error to the server console for debugging purposes.
    console.error("Error fetching banners:", error);

    // Determine the error message to return to the client.
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    // Return a standardized error response object.
    return {
      success: false,
      message: "Could not fetch banner images. Please try again later.",
      error: errorMessage,
      errorType: "SERVER_ERROR",
    };
  }
}
