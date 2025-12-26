import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/Components/ui/card";
import { Star } from "lucide-react";

// Define the properties for the ReviewCard component
interface ReviewCardProps {
  id: string;
  name: string;
  date: string;
  rating: number; // A number from 1 to 5
  testimonial: string;
  imageSrc: string;
}

// A helper component to render the star rating
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center md:justify-start">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4.5 ${
            index < rating ? "text-[#FACC15] fill-[#FACC15]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewCard({
  id,
  name,
  date,
  rating,
  testimonial,
  imageSrc,
}: ReviewCardProps) {
  return (
    <Card className="w-full flex flex-col p-6 gap-4 max-w-sm rounded-lg border border-border-2 bg-background overflow-hidden">
      <CardHeader className="flex flex-col md:flex-row items-center gap-2 md:gap-3 p-0">
        <div className="relative shrink-0 aspect-square rounded-full w-10 md:w-12 overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              fill
              alt={`${name}'s avatar`}
              className="object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-yellow-400 flex justify-center text-center">
              <span>{name.charAt(1)}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <div className="body-semibold text-text-title text-center md:text-left truncate mt-[3px]">
            {name}
          </div>
          <StarRating rating={rating} />
        </div>
      </CardHeader>
      <CardContent className="p-0 w-full flex grow bg-transparent overflow-hidden">
        <p className="body-regular text-text-body-subtle line-clamp-3">
          &ldquo;{testimonial}&rdquo;
        </p>
      </CardContent>
      <CardFooter className="p-0 w-full bg-transparent">
        <p className="body-small text-text-caption-1">{date}</p>
      </CardFooter>
    </Card>
  );
}
