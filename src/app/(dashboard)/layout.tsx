import "../globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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
      <body className="bg-gray-50  text-gray-900 min-h-screen flex flex-col">
        <SidebarProvider>
          <DashboardSidebar />
          <main>
            <SidebarTrigger />

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
