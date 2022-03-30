import { LayoutProps } from "@/types/props";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialsSideBar from "./SocialsSideBar";

const Layout: React.FC<LayoutProps> = ({ children, sectionID }) => {
  return (
    <main className="relative">
      <SocialsSideBar />
      <section id={sectionID} className="min-h-screen w-full px-24">
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
