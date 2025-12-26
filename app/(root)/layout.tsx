import Header from "@/Components/organisms/header";
import Footer from "@/Components/organisms/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-background-1">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
