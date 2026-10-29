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
  title: "ARTB2B | Your Art. More Spaces. More Opportunities.",
  description:
    "Exhibit your artwork across a growing network of cafés, restaurants, hotels and creative venues. Choose a flexible way to exhibit with an ARTB2B Subscription or Pay by Day.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "ARTB2B | Your Art. More Spaces. More Opportunities.",
    description:
      "Exhibit your artwork across a growing network of cafés, restaurants, hotels and creative venues. Choose a flexible way to exhibit with an ARTB2B Subscription or Pay by Day.",
    url: "https://www.artb2b.art",
    siteName: "ARTB2B",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ARTB2B | Your Art. More Spaces. More Opportunities.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTB2B | Your Art. More Spaces. More Opportunities.",
    description:
      "Exhibit your artwork across a growing network of cafés, restaurants, hotels and creative venues. Choose a flexible way to exhibit with an ARTB2B Subscription or Pay by Day.",
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
