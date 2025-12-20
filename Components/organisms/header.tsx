import React from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import MenuClient from "../molecules/menu-client";
import SigninOrAvatar from "@/Components/molecules/signin-avatar";

const Header: React.FC = () => {
  return (
    <header className="bg-background-2 w-full sticky top-0 z-50">
      <div className="max-w-[1440px] h-[65px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo dan Nama -- LEFT SIDE */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              priority={true}
              src="/images/logo.svg"
              width={128}
              height={32}
              alt={`${APP_NAME}logo`}
            />
            <h3 className="hidden lg:block">{APP_NAME}</h3>
          </Link>
        </div>

        {/* Navigasi dan Tombol Aksi -- RIGHT SIDE */}
        <div>
          <MenuClient desktopAvatar={<SigninOrAvatar />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
