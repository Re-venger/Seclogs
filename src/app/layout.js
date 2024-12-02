import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "@/components/Navigation/page";
import FooterBar from "@/components/Footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "YoBlogs",
  description: "Personal Blog Website by Yogesh Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavigationBar />
        <div className="container mx-auto h-full flex flex-col justify-between">
          {children}
        </div>
        <FooterBar />
      </body>
    </html>
  );
}
