import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://03designstudio.online"),
  title: "03 Design Studio | Managed Digital Presence for SMEs",
  description:
    "03 Design Studio builds and manages websites, hosting, SEO, social media, and growth infrastructure for small and medium businesses.",
  openGraph: {
    title: "03 Design Studio",
    description:
      "Managed digital credibility for SMEs that want to be found, trusted, and chosen.",
    images: ["/images/brand-gradient-background.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
