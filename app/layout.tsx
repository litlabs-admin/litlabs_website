import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import LenisProvider from "@/components/layout/LenisProvider";
import "./globals.css";

const TITLE = "Lit Labs · AI Systems That Work Like Employees";
const DESCRIPTION =
  "Your next top performer isn't another hire. Lit Labs builds AI systems that work across sales, marketing, and operations—helping businesses scale faster, operate smarter, and achieve more with less effort.";
const OG_IMAGE = "/images/BHxPov1nsOgtnbiKoambuFmA00.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.litlabs.io"),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/litlabs-mark.svg",
    apple: "/litlabs-mark.svg",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontVariables}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
