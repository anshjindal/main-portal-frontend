import React from "react";
import "../styles/Services.css";
import CallToActionSection from '../components/CallToActionSection';
import HeroBanner from "../components/HeroBanner";
import ServicesHeroBanner from "../assets/ServicesHeroImage.jpeg";
import Accordion from "../components/Accordion";
import Data from "../helpers/ServicesAccordionInnerText";

function Services() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <HeroBanner
          BannerImage={ServicesHeroBanner}
          Header="Services We Offer"
          Content="Our specialized team of researchers, strategists, designers,
              developers, and project managers work with streamlined processes
              to break through organizational roadblocks."
        />
        <div className="mb-[-1vw]">
          <Accordion
            title="Website & Software Engineering"
            InnerTextData={Data.Engineering}
          />
          <Accordion title="Digital Marketing" InnerTextData={Data.Marketing} />
          <Accordion
            title="Content Production & Design"
            InnerTextData={Data.Content}
          />
          <Accordion title="Branding" InnerTextData={Data.Branding} />
          <Accordion
            title="Microsoft Cloud Services"
            InnerTextData={Data.Microsoft}
          />
          <Accordion
            title="Talent Outsourcing"
            InnerTextData={Data.Outsourcing}
          />
        </div>

        <CallToActionSection
          Title="OUR PRODUCT"
          Content="Looking for services and guidance? Let's get in touch!"
          CallToAction="Let's Talk!"
        />
      </div>
    </div>
  );
}

export default Services;
