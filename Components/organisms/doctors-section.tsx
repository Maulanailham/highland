import { getOurDoctors } from "@/lib/actions/doctors.actions"; // Adjust the import path to your server action
import DoctorCard from "../molecules/doctor-card";
import { DoctorSummary } from "@/types";
/**
 * A server component that fetches and displays a list of active doctors.
 */
export default async function DoctorsSection() {
  // Directly call the server action to fetch doctor data
  let doctorsToDisplay: DoctorSummary[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getOurDoctors();
    if (response.success && response.data) {
      doctorsToDisplay = response.data;
    } else {
      fetchError =
        response.message || "Failed to load doctor profile data from database";
    }
  } catch (error) {
    fetchError = error instanceof Error ? error.message : "unexpected error";
  }

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Our Doctors</h2>
      {fetchError ? (
        <div className="text-center text-grey-500 py-4">Fail to load data</div>
      ) : doctorsToDisplay.length === 0 ? (
        <div className="text-center text-grey-500 py-4">
          No doctors active currently
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Map over the live data fetched from the database */}
          {doctorsToDisplay.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              // Provide sensible fallbacks for potentially null data
              name={doctor.name ?? "Dr. Anonymous"}
              specialty={doctor.specialty ?? "General Practice"}
              rating={doctor.rating ?? 0}
              reviewCount={doctor.reviewCount ?? 0}
              // Use a default placeholder image if one isn't provided
              imageUrl={doctor.imageUrl ?? "/images/default-doctor-avatar.png"}
            />
          ))}
        </div>
      )}
    </section>
  );
}
