import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { MobileNav } from "./mobile-nav";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
}
