import React from "react";
import Layout from "@/components/layout";
import Jumbotron from "@/components/home/Jumbotron";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";

export default function HomePage() {
  return (
    <Layout>
      <Jumbotron />
      <About />
      <Experience />
    </Layout>
  )
}