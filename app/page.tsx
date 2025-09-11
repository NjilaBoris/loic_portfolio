import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import ReactLenis from "lenis/react";
import React from "react";

const page = () => {
  return (
    <>
      <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
        <Header />
        <Hero />
        <Intro />
        <Projects />
        <Testimonials />
        <FAQs />
        <Footer />
      </ReactLenis>
    </>
  );
};

export default page;
