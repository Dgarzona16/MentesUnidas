import { Header } from "./presentation/components/Header";
import { Footer } from "./presentation/components/Footer";

import { DM_Sans, Fjalla_One } from "next/font/google";
import { ThemeProvider } from "./presentation/context/ThemeContext";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mentes unidas",
  description:
    "Una guía práctica para padres sobre los trastornos del aprendizaje y cómo acompañar el crecimiento de tus hijos.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fjallaOne.variable} h-full antialiased`}
    >
      <body className="size-full overflow-y-auto">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen text-text  dark:text-dark-text overflow-hidden"
            style={{background: 'var(--bg-gradient)'}}>
          <Header />
          <main className="grow py-8">{children}</main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
