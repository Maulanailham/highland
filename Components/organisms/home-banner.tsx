import { bannerImageData } from "@/db/dummydata";
import Image from "next/image";

export default function HomeBanner() {
  // Get the first banner from the dummy data.
  // In a real-world scenario, you might fetch this or receive it as a prop.
  const banner = bannerImageData[0];

  // Render nothing if there's no banner data to display
  if (!bannerImageData || bannerImageData.length == 0) {
    return (
      <div className="w-full text-gray-500 mt-5 h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        No background image
      </div>
    );
  }

  return (
    <section className="relative w-full h-75 md:h-100 lg:h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src={banner.imageUrl}
        fill
        alt={banner.name}
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-4 z-10">
        <h1 className="text-text-caption-2 text-center mb-6">
          Welcome to Highland Medical Center
        </h1>
        <h4 className="text-text-caption-2 text-center">
          Excellence in Healthcare, Committed to Your Well-being
        </h4>
      </div>
    </section>
  );
}
