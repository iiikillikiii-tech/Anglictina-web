import type { Metadata } from "next";
import { SiteChrome } from "./components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angličtina s přehledem",
  description: "Online kurzy angličtiny, výukové balíčky a materiály z pohodlí domova.",
  icons: {
    icon: "/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
