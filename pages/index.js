import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";

import React, { useState } from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Jakub Kosmalski - frontend web developer</title>
        <meta
          name="description"
          content="Jakub Kosmalski frontend web developer. Zajmuję się również grafiką komputerową i tworzeniem wideo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
