import { LayoutProps } from "@/types/props";
import React from "react";
import Navbar from "./Navbar";
import SocialsSideBar from "./SocialsSideBar";

const Layout: React.FC<LayoutProps> = ({ children, sectionID }) => {
  return (
    <main className="relative">
      <SocialsSideBar />
      <section id={sectionID} className="h-screen w-full px-24">
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
