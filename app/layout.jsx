import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Real Next App",
  description: "web development practice",
  keywords: "nextjs13,13,nextjs,development,web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container p-5 mx-auto ">
          <Header />
          <div className="flex justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
