
import "../globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = {
  title: "Next.js App",
  description: "Routing",
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
          {children}
            <Toaster />
          
        </main>
      </body>
    </html>
  );
}
