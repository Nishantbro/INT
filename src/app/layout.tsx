import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inturnship - Internships, Projects & Consultation Platform",
  description:
    "Kickstart your career with real internships, ready-made projects, and expert consultations. Join thousands of students already building their future!",
  keywords: [
    "internships",
    "student projects",
    "career consultation",
    "online learning",
    "hire interns",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
