import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusuf Siddiqui | Performance Growth Architect",
  description: "Performance Marketing expert with 80+ global brands, 2M+ ad spend managed, and agentic AI workflows powering 70% automation. Senior Manager - Performance Marketing & Operations at NEXA.",
  keywords: ["Performance Marketing", "Media Buying", "Paid Social", "Programmatic", "Agentic AI", "Dubai"],
  openGraph: {
    title: "Yusuf Siddiqui | Performance Growth Architect",
    description: "Driving global growth through precision media buying and agentic AI automation.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
