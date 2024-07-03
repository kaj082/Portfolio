import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Style
import "./globals.css";

// Context
import { LocoProvider } from "@/context/LocoMotiveContext";

// Init Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

// Metadata
export const metadata = {
  title: {
    template: "%s | Kajal Dafada",
    default: "Kajal Dafada",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable} ${inter.variable}`}>
        <LocoProvider>{children}</LocoProvider>
      </body>
    </html>
  );
}
