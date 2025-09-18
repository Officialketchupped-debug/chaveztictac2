import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "Tic tac toe",
  description: "It's literally just Tic tac toe",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
