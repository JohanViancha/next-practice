import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";
import { Inter } from "next/font/google";
import "../sass/globals.sass";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
