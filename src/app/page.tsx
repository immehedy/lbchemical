import About from "@/components/HomePage/About";
import Applications from "@/components/HomePage/Applications";
import Client from "@/components/HomePage/Client";
import Contact from "@/components/HomePage/Contact";
import Hero from "@/components/HomePage/Hero";
import Industires from "@/components/HomePage/Industires";
import Journey from "@/components/HomePage/Journey";
import License from "@/components/HomePage/License";
import Services from "@/components/HomePage/Services";


export default async function Home() {
  return (
    <>
      {/* Hero Section */}
      {await Hero()}

      {/* Services Section */}
      {await Services()}

       {/* New Applications Section */}
       {await Applications()}

      {/* About Section */}
      {await About()}

      {/* Proprietor Journey Section */}
      {await Journey()}

      {/* Our Clients Section */}
      {await Client()}

      {/* Licenses & Certifications Section */}
      <License/>

      {/* Industries Section */}
      <Industires/>

      {/* Contact Section */}
      <Contact/>
      
    </>
  );
}
