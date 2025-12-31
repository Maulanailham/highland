import { testimonialData } from "@/db/dummydata";
import ReviewCard from "../molecules/review-card"; // Assuming you saved your Review component as ReviewCard.tsx
import { getDoctorTestimonials } from "@/lib/actions/review.actions";
import { DoctorReview } from "@/types";

export default async function PatientSection() {
  let doctorTestimonials: DoctorReview[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getDoctorTestimonials();

    if (response.success && response.data) {
      doctorTestimonials = response.data;
    } else {
      fetchError = "Error connecting to server";
    }
  } catch (error) {
    fetchError =
      error instanceof Error
        ? error.message
        : "Unexpected error, unable to load data";
  }

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Patient Testimonials</h2>
      {fetchError ? (
        <div className="text-center text-grey-500 py-4">{fetchError}</div>
      ) : doctorTestimonials.length === 0 ? (
        <div className="text-center text-grey-500 py-4">
          No testimonial currently{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {doctorTestimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.patientName}
              date={testimonial.reviewDate}
              rating={testimonial.rating!}
              testimonial={testimonial.testimonialText}
              imageSrc={testimonial.patientImage || ""}
            />
          ))}
        </div>
      )}
    </section>
  );
}
