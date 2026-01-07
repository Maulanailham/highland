import DoctorProfileAbout from "@/Components/organisms/doctor-profile/doctorprofile-about";
import DoctorProfileTopCard from "@/Components/organisms/doctor-profile/doctorprofile-topcard";
import PatientReviews from "@/Components/organisms/doctor-profile/patient-reviews";
import { getDoctorDetails } from "@/lib/actions/doctors.actions";
import { notFound } from "next/navigation";

interface Params {
  doctorId: string;
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  let doctorIdObject = await params;
  let { doctorId } = doctorIdObject;
  let doctorActionResponse;

  try {
    doctorActionResponse = await getDoctorDetails(doctorId);
  } catch (error) {
    console.error("Error fetching doctor details: ", error);
    return (
      <div className="p-6 text-center text-red-500">
        <p>
          We're sorry, but something went wrong while trying to load the
          doctor's profile
        </p>
        <p>Please try refreshing the page or check back later</p>
      </div>
    );
  }

  if (!doctorActionResponse.success) {
    if (doctorActionResponse.errorType == "NOT_FOUND") {
      return notFound();
    }
    console.error(
      `Failed to fetch doctorId: ${doctorId}`,
      doctorActionResponse.message,
      doctorActionResponse.error
    );
    <div className="p-6 text-center text-red-500">
      <p>Could not load doctor profile</p>
      <p>Please try again later</p>
    </div>;
  }

  const doctor = doctorActionResponse.data;
  if (!doctor) {
    notFound();
  }

  return (
    <div className="flex flex-row">
      <div>
        <div>
          <DoctorProfileTopCard
            id={doctor.id}
            name={doctor.name}
            credentials={doctor.credentials}
            speciality={doctor.speciality}
            languages={doctor.languages}
            specializations={doctor.specializations}
            rating={doctor.rating}
            reviewCount={doctor.reviewCount}
            image={doctor.image}
            brief={doctor.brief}
          />
        </div>
        <div className="md:hidden">Appointment schedule</div>
        <DoctorProfileAbout name={doctor.name} brief={doctor.brief} />
        <PatientReviews doctorId={doctor.id} averageRating={doctor.rating} />
      </div>
      <div className="hidden md:block">Appointment schedule</div>
    </div>
  );
}
