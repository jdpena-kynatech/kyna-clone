import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <section className="h-screen">
      <NextSeo
        title="Kynatech - Clone"
        description="Kynatech Website but bootleg :D"
      />
      <Navbar />
    </section>
  );
};

export default Home;
