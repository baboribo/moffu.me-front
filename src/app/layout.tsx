import type { Metadata } from "next";
import "./globals.css";
// import Nav from "@/components/nav";
// import AppWrapper from "@/components/motion/AppWraper";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: "☁️ Moffu",
  description: "moffu.me",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <html>
        <body>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </body>
      </html>
    </SidebarProvider>
  )
}