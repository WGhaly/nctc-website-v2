import type { Metadata } from "next";
import "./globals.css";
import "./tailwind-bundle.css";

export const metadata: Metadata = {
  title: "NCTC - National Center for Technology Commercialization",
  description: "Egypt's national engine for transforming research outcomes into real-world technologies. Connecting researchers, universities, industry, and investors.",
  keywords: ["NCTC", "technology commercialization", "innovation", "Egypt", "research", "industry"],
  icons: {
    icon: '/NCTC Logo HQ.png',
    apple: '/NCTC Logo HQ.png',
  },
  openGraph: {
    title: "NCTC - National Center for Technology Commercialization",
    description: "Egypt's national engine for transforming research outcomes into real-world technologies.",
    url: "https://nctc.eg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
