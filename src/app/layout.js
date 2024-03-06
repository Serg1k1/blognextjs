import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Page with blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
