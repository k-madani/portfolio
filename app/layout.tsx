import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Krishna Madani",
  description: "Full-stack software engineer specializing in scalable backend systems, cloud infrastructure, and AI/ML solutions.",
  keywords: ["Software Engineer", "Full Stack", "Backend", "Cloud", "React", "Spring Boot"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}