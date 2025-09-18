import { ReactNode } from "react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "../globals.css";
import { fontSans } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "Career | Klaudio Portfolio",
  description: "Professional experience and qualifications of Klaudio",
};

export default function CareerLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
