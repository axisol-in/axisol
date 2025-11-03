import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

const ContactPage: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Axisol - Get Free Solar Consultation",
    "description": "Contact Axisol for free solar consultation, quotes, and expert advice on solar energy solutions",
  };

  return (
    <>
      <SEO
        title="Contact Axisol - Free Solar Consultation & Quote | Solar Energy Experts India"
        description="Get in touch with Axisol's solar experts for free consultation, customized solar solutions, and competitive quotes. Available pan-India. Call now or fill our contact form for immediate assistance."
        keywords="contact solar company, solar consultation India, free solar quote, solar energy expert, solar panel inquiry, get solar quote, solar installation contact"
        canonical="https://www.axisol.in/contact"
        ogUrl="https://www.axisol.in/contact"
        schema={contactSchema}
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;
