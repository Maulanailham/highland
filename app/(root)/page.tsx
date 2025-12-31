import Image from "next/image";
import Header from "@/Components/organisms/header";
import { Button } from "@/Components/ui/button";
import DepartmentsSection from "@/Components/organisms/departments-section";
import DoctorsSection from "@/Components/organisms/doctors-section";
import PatientTestimonials from "@/Components/organisms/patients-section";
import PatientSection from "@/Components/organisms/patients-section";
import HomeBanner from "@/Components/organisms/home-banner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="w-full max-w-7xl p-8 flex flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-12">
          <p className="mt-4 body-regular text-text-body-subtle max-w-3xl text-center mx-auto">
            Welcome to Highland Medical Center, your premier destination for
            specialized healthcare consultation. Our facility brings together
            exceptional physicians across all major medical departments,
            offering expert diagnosis and personalized treatment planning in one
            convenient location.
          </p>

          <DepartmentsSection />
        </div>

        <div id="our-doctors">
          <DoctorsSection />
        </div>

        <PatientSection />
      </div>
    </div>
  );
}
