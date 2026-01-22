import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  // Kamu bisa membiarkan kosong jika hanya ingin menjalankan
  // logika 'authorized' yang ada di auth.config.ts
});

//configure which paths the middleware should run on

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
};
