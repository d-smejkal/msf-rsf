import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSF portal",
  description: "Meetings without borders",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
