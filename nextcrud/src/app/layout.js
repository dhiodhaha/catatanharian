import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catetan Anti Lupa!",
  description: "Generated for devscale",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex justify-between items-center flex-col h-screen bg-gray-50">
          <Header />
          <div className="">
            <div className="max-w-2xl w-full m-auto">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
