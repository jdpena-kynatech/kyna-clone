import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <Layout sectionID="home">
      <NextSeo
        title="Kynatech - Clone"
        description="Kynatech Website but bootleg :D"
      />
    </Layout>
  );
};

export default Home;
