import React from 'react';
import NavNew from "./components/NavNew";
import HeroNew from "./components/HeroNew";
import ProblemSection from "./components/ProblemSection";
import HowIWork from "./components/HowIWork";
import Examples from "./components/Examples";
import WhoThisIsFor from "./components/WhoThisIsFor";
import About from "./components/About";
import ContactCTAs from "./components/ContactCTAs";
import FooterNew from "./components/FooterNew";

export default function AppNew() {
  return (
    <>
      <NavNew />
      <HeroNew />
      <ProblemSection />
      <HowIWork />
      <Examples />
      <WhoThisIsFor />
      <About />
      <ContactCTAs />
      <FooterNew />
    </>
  );
}
