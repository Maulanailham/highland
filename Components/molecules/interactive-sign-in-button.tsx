"use client";

import { useTransition } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; // A popular loading spinner icon

import { Button } from "@/Components/ui/button";

interface InteractiveSignInButtonProps {
  onNavigateStart?: () => void;
  className?: string;
}

export default function InteractiveSignInButton({
  onNavigateStart,
  className,
}: InteractiveSignInButtonProps) {
  // State to track the loading status

  //const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNavigating, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    //setIsLoading(true);

    // This will navigate the user to the /sign-in page.
    // The loading state will remain true until the new page loads,
    // at which point this component will unmount.

    startTransition(() => {
      router.push("/sign-in");
      if (onNavigateStart) {
        onNavigateStart();
      }
    });

    //setIsLoading(true);
    router.push("/sign-in");
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleClick}
      disabled={isNavigating}
      //disabled={isLoading}
      className={className}
    >
      {isNavigating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        "Sign in"
      )}
    </Button>
  );
}
