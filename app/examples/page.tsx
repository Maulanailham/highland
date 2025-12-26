import DepartmentCard from "@/Components/molecules/department-card";
import DoctorCard from "@/Components/molecules/doctor-card";
import ReviewCard from "@/Components/molecules/review-card";

const obj = {
  id: "01",
  name: "nama doang syringe",
  iconName: "Syringe",
};

export default function Percobaan() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="max-w-[176px]">
        <DepartmentCard id={obj.id} name={obj.name} iconName={obj.iconName} />
      </div>
      <br></br>
      <br></br>
      <div>
        <DoctorCard
          id="1"
          name="Maulana lksjdfljlsdfjsllsjdflsdjfsl sdfjlsd"
          specialty="Psikiater"
          rating={4.8}
          reviewCount={200}
          imageUrl="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <br />
      <br />
      <ReviewCard
        id="1"
        name="Abu Ubaidah"
        date="12 Sept 2023"
        rating={3}
        testimonial="The doctor is professional and know handles his patient effectively he doctor is professional and know handles his patient effectively he doctor is professional and know handles his patient effectively he doctor is professional and know handles his patient effectively he doctor is professional and know handles his patient effectively"
        imageSrc="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
