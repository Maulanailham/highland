import NextAuth, { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

const protectedPaths = ["/admin", "/user", "/appointments"];

// Function to check if a given path is protected
const isProtectedPath = (path: string) => {
  return protectedPaths.some((protectedPath) => path.startsWith(protectedPath));
};

export const authConfig: NextAuthConfig = {
  providers: [], // Providers are defined in the main auth.ts
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; //true or false
      const isTryingToAccessProtectedPath = isProtectedPath(nextUrl.pathname);

      if (!isLoggedIn && isTryingToAccessProtectedPath) {
        // 1. Catat halaman yang mau dituju tadi (callbackUrl)
        const callbackUrl = nextUrl.pathname + nextUrl.search;

        // 2. Siapkan alamat ke halaman Login (/sign-in)
        const redirectUrl = new URL("/sign-in", nextUrl.origin);

        // 3. Tempelkan alamat tujuan tadi ke URL login agar setelah login, user bisa balik lagi
        redirectUrl.searchParams.set("callbackUrl", encodeURI(callbackUrl));

        // 4. Usir paksa ke halaman Login!
        return NextResponse.redirect(redirectUrl);
      }

      // If logged in or the path is not protected, allow access
      return true;
    },
  },
};
