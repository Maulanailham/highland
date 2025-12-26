import { testimonialData } from "@/db/dummydata";
import ReviewCard from "../molecules/review-card"; // Assuming you saved your Review component as ReviewCard.tsx

interface ReviewData {
  id: string;
  patientName: string;
  rating: number;
  reviewDate: string;
  testimonialText: string;
  patientImage?: string;
}

export default function PatientSection() {
  const doctorTestimonials: ReviewData[] = testimonialData;
  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Patient Testimonials</h2>
      {doctorTestimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {doctorTestimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.patientName}
              date={testimonial.reviewDate}
              rating={testimonial.rating}
              testimonial={testimonial.testimonialText}
              imageSrc={testimonial.patientImage || ""}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-200 text-center">
          No patient testimonial yet
        </div>
      )}
    </section>
  );
}
