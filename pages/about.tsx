import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const about: NextPage = () => {
  return (
    <Layout sectionID="about">
      <NextSeo
        title="About Us - Kyna Technologies"
        description="Kynatech Website but bootleg :D"
      />
      <h1>about</h1>
    </Layout>
  );
};

export default about;
