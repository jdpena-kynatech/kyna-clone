import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const services: NextPage = () => {
  return (
    <Layout sectionID="services">
      <NextSeo
        title="Services - Kyna Technologies"
        description="Kynatech Website but bootleg :D"
      />
      <h1>Services</h1>
    </Layout>
  );
};

export default services;
