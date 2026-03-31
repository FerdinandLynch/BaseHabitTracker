import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Providers } from "@/app/providers";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-title"
});

export const metadata: Metadata = {
  title: "BaseHabitTracker",
  description: "A calm on-chain habit completion tracker on Base."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Placeholder kept: BASE_APP_ID_PLACEHOLDER */}
        <meta name="base:app_id" content="69cb8038410e7f107a25603b" />
        {/* Placeholder kept: TALENT_VERIFICATION_PLACEHOLDER */}
        <meta
          name="talentapp:project_verification"
          content="8da1a7fd0df80582ec85e870d173619f5c247d1e201bca552bd464529dcdcb4785253e9f160214286155e70f1760d4c44d7ba9d1647aab8ce41cb8fb0d8429c2"
        />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
