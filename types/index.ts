import { BannerImage, Department } from "@/lib/generated/prisma/client";

export interface ServerActionResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errorType?: string;
}

export interface DepartmentData extends Department {}

export interface BannerImageData extends BannerImage {}

export interface DoctorSummary {
  id: string;
  name: string | null;
  specialty: string | null;
  rating: number | null;
  reviewCount: number | null;
  imageUrl: string | null; // This should be a path to an image in your public folder or an external URL
}

export interface DoctorReview {
  id: string;
  rating: number | null;
  reviewDate: string;
  testimonialText: string;
  patientName: string;
  patientImage: string | null;
}
