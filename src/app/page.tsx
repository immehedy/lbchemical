import About from "@/components/HomePage/About";
import Applications from "@/components/HomePage/Applications";
import Client from "@/components/HomePage/Client";
import Contact from "@/components/HomePage/Contact";
import Hero from "@/components/HomePage/Hero";
import Industires from "@/components/HomePage/Industires";
import Journey from "@/components/HomePage/Journey";
import License from "@/components/HomePage/License";
import Services from "@/components/HomePage/Services";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* Services Section */}
      <Services/>

       {/* New Applications Section */}
        <Applications/>

      {/* About Section */}
      <About/>

      {/* Proprietor Journey Section */}
      <Journey/>

      {/* Our Clients Section */}
      <Client/>

      {/* Licenses & Certifications Section */}
      <License/>

      {/* Industries Section */}
      <Industires/>

      {/* Contact Section */}
      <Contact/>
      
    </>
  );
}
