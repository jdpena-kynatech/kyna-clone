import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const work: NextPage = () => {
  return (
    <Layout sectionID="work">
      <NextSeo
        title="Work - Kyna Technologies"
        description="Kynatech Website but bootleg :D"
      />
      <h1>work</h1>
    </Layout>
  );
};

export default work;
