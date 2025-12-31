import { BannerImageData } from "@/types";
import Image from "next/image";
import { getBanners } from "@/lib/actions/settings.actions";

export default async function HomeBanner() {
  // Get the first banner from the dummy data.
  // In a real-world scenario, you might fetch this or receive it as a prop.
  let banner: BannerImageData[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getBanners();

    if (response.success && response.data) {
      banner = response.data;
    } else {
      fetchError =
        response.message || "Failed to load doctor banner data from database";
    }
  } catch (error) {
    fetchError = error instanceof Error ? error.message : "Fetch data failed";
  }

  // Render nothing if there's no banner data to display
  if (
    !banner ||
    banner.length == 0 ||
    banner[0].imageUrl == null ||
    banner[0].imageUrl == ""
  ) {
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
        src={banner[0].imageUrl}
        fill
        alt={banner[0].name}
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
