import { Phone, Mail, MapPin } from "lucide-react";
import type { FC } from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-background-4">
      {/*hilangkan justify-between */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-12 flex flex-col justify-between gap-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Highland Medical Center Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-text-caption-2">Highland Medical Center</h2>
            <p className="text-text-caption-1 body-regular">
              Excellence in Healthcare, Committed to Your Well-being
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col mt-4 md:mt-0 gap-4">
            <h4 className="text-text-caption-2">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center body-regular text-text-caption-2">
                <Phone className="h-4 w-4 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center body-regular text-text-caption-2">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@highland.med</span>
              </div>
              <div className="flex items-center body-regular text-text-caption-2">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Medical Center Dr, Highland, CA 92346</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-text-caption-1 body-regular">
          <p className="">
            &copy; 2025 Highland Medical Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
