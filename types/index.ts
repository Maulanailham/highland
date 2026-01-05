import { BannerImage, Department } from "@/lib/generated/prisma/client";

export interface ServerActionResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errorType?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DepartmentData extends Department {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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

export interface DoctorDetails {
  id: string;
  name: string;
  image: string | null;
  credentials: string;
  speciality: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  specializations: string[];
  brief: string;
}
