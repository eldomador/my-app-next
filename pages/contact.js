import Head from "next/head";
import ContactMe from "../components/ContactMe";
import React, { useState } from "react";

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
          content="Jakub Kosmalski frontend web developer. Zajmuję się również grafiką komputerową i tworzeniem wideo. Skontaktuj się ze mną"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactMe />
    </>
  );
}
