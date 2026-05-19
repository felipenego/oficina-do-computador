import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Corporate from "../sections/Corporate";
import Automation from "../sections/Automation";
import CTA from "../sections/CTA";
import Plans from "../sections/Plans";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <Corporate />

      <Automation />

      <Plans />

      <CTA />

      <Footer />
    </>
  );
}