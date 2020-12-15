import React from "react";
// components
import AboutSection from "./page_components/AboutSection";
import FaqSection from "./page_components/FaqSection";
import ServicesSection from "./page_components/ServicesSection";
import ScrollTop from "../ScrollTop";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

function AboutMe() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutMe;