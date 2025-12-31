import { departmentData } from "@/db/dummydata";
import DepartmentCard from "../molecules/department-card";
import { DepartmentData, ServerActionResponse } from "@/types";
import { getDepartments } from "@/lib/actions/settings.actions";

/* interface DepartmentData {
  id: string;
  name: string;
  iconName: string;
} */

export default async function DepartmentsSection() {
  let departments: DepartmentData[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getDepartments();
    if (response.success && response.data) {
      departments = response.data.departments;
    } else {
      fetchError =
        response.message || "Failed to load department data from database";
    }
  } catch (error) {
    fetchError = error instanceof Error ? error.message : "unexpected error";
  }

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Our Departments</h2>
      {fetchError ? (
        <div className="text-center text-grey-500 py-4">{fetchError}</div>
      ) : departments.length == 0 ? (
        <div className="text-grey-500 py-4 text-center">
          Department not found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(176px,1fr))] gap-8">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
              name={department.name}
              iconName={department.iconName}
            />
          ))}
        </div>
      )}
    </section>
  );
}
