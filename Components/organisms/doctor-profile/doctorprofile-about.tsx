import { Card, CardContent } from "@/Components/ui/card";

interface DoctorProfileProps {
  name: string;
  brief: string;
}

const DoctorProfileAbout = ({ name, brief }: DoctorProfileProps) => {
  return (
    <Card className="bg-background rounded-lg p-4 md:p-6 w-full border-0 shadow-small">
      <CardContent>
        <h3 className="text-text-title mb-[14px]">About {name}</h3>
        <p className="body-regular text-text-body-subtle">{brief}</p>
      </CardContent>
    </Card>
  );
};

export default DoctorProfileAbout;
