"use client";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/Components/ui/sheet";
import { ThemeToggle } from "@/Components/molecules/theme-toggle";
import { MoreVertical, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileUserSignOrAvatar from "./mobile-user-signinoravatar";

interface MenuClientProps {
  desktopAvatar: React.ReactNode;
}

export default function MenuClient({ desktopAvatar }: MenuClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSheetCloseAutoFocus = (event: Event) => {
    event.preventDefault;
  };

  return (
    <div>
      {/* ====================================================== */}
      {/* Desktop & Tablet Nav (No Changes)                      */}
      {/* ====================================================== */}
      <nav className="hidden items-center gap-3 md:flex">
        <ThemeToggle />

        <Link
          href="/"
          className="body-regular text-text-body hover:text-primary"
        >
          Home
        </Link>

        {/* Book Appointment Button */}
        <Button asChild variant="brand" size="lg">
          <Link href="/" className="text-text-caption-2">
            Book Appointment
          </Link>
        </Button>

        {/* Sign In Button */}
        {desktopAvatar}
      </nav>

      {/* ====================================================== */}
      {/* Mobile Nav (Implementation using Shadcn Sheet)         */}
      {/* ====================================================== */}
      <nav className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger
            className="align-middle"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MoreVertical />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col items-start p-4 bg-background-2"
            onCloseAutoFocus={handleSheetCloseAutoFocus}
          >
            <SheetHeader className="w-full justify-start flex flex-row items-center border-b">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <ThemeToggle />

            <Link
              href="/"
              className="body-regular text-text-body hover:text-primary py-3"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Button asChild variant="brand" size="sm" className="w-full">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-text-caption-2"
              >
                Book Appointment
              </Link>
            </Button>

            <SheetFooter className="w-full">
              {/* We render the desktopAvatar prop here for the Sign In button */}
              <MobileUserSignOrAvatar
                onMobileActionComplete={closeMobileMenu}
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
