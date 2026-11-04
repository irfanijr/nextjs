import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";



const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const metadata = {
  title: "My Company",
  description: "Ini website belajar next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("font-mono", jetbrainsMono.variable)}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        

        <main className="max-w-6xl mx-auto px-4 py-12 flex-1 w-full">
               <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
