import React from "react";

/* eslint-disable no-unused-vars */
interface NavLinkProps {
  hrefLink: string;
  navText: string;
}
interface LayoutProps {
  children: React.ReactNode;
  sectionID: string;
}
interface ProjectCardProps {
  imageURL: string;
  title: string;
  intro: string;
}

export { NavLinkProps, LayoutProps, ProjectCardProps };
