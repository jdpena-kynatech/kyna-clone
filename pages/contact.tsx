import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const contact: NextPage = () => {
  return (
    <Layout sectionID="contact">
      <NextSeo
        title="Get In Touch - Kyna Technologies"
        description="Kynatech Website but bootleg :D"
      />
      <h1>contact</h1>
    </Layout>
  );
};

export default contact;
