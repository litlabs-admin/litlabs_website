import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudy from "@/components/sections/CaseStudy";
import SingleTestimonial from "@/components/sections/SingleTestimonial";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Integration from "@/components/sections/Integration";
import FAQ from "@/components/sections/FAQ";
import BeforeFooterCTA from "@/components/sections/BeforeFooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Process />
        <CaseStudy />
        <SingleTestimonial />
        <Impact />
        <Testimonials />
        <Integration />
        <FAQ />
        <BeforeFooterCTA />
      </main>
      <Footer />
    </>
  );
}
