import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinkProps } from "@/types/props";
import { nanoid } from "nanoid";

const NavLinks: React.FC<NavLinkProps> = ({ hrefLink, navText }) => {
  return (
    <Link href={hrefLink}>
      <p className="text-green cursor-pointer border-b-2 border-transparent hover:border-emerald-200 hover:text-emerald-400">
        {navText}
      </p>
    </Link>
  );
};

const Navbar = () => {
  const links: NavLinkProps[] = [
    {
      hrefLink: "/",
      navText: "Home",
    },
    {
      hrefLink: "/",
      navText: "Services",
    },
    {
      hrefLink: "/",
      navText: "Work",
    },
    {
      hrefLink: "/",
      navText: "About",
    },
    {
      hrefLink: "/",
      navText: "Contact",
    },
  ];
  return (
    <nav className="bg-green container mx-auto flex items-center justify-between px-[4.1rem] pt-14 font-primary text-lg uppercase">
      <Image src="/kyna-logo.png" width={200} height={30} />
      <div className="flex gap-x-12 pr-32">
        {links.map((items) => {
          return (
            <NavLinks
              key={nanoid()}
              hrefLink={items.hrefLink}
              navText={items.navText}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
