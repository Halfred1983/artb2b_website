import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artb2b.art"),
  title: "ArtB2B | Connecting Art & Spaces",
  description:
    "Turn everyday walls into creative windows. We connect local artists with venues and galleries to display and sell art in coffee shops, bistros, and workspaces.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "ArtB2B | Connecting Art & Spaces",
    description:
      "Turn everyday walls into creative windows. We connect local artists with venues and galleries to display and sell art in coffee shops, bistros, and workspaces.",
    url: "https://www.artb2b.art",
    siteName: "ArtB2B",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ArtB2B - Connecting Art & Spaces",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtB2B | Connecting Art & Spaces",
    description:
      "Turn everyday walls into creative windows. We connect local artists with venues and galleries to display and sell art in coffee shops, bistros, and workspaces.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fcfcfd]">
        {children}
      </body>
    </html>
  );
}
