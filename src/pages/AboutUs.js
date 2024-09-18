import React from "react";
import "../styles/AboutUs.css";


import NewsletterRegister from "../components/Reusable/NewsletterRegister.js";
import ClientTestimonySlider from "../components/Home/ClientTestimonySlider";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import OurTeamCarousel from "../components/AboutUs/OurTeamCarousel";
import OurPartners from "../components/AboutUs/OurPartners";
import OurApproachCarousel from "../components/AboutUs/OurApproachCarousel";
import TechStack from "../components/AboutUs/TechStack";
import WorkerTestimonial from "../components/AboutUs/WorkerTestimonial";
import HeroAboutUs from "../components/AboutUs/HeroAbousUs.js";
import content from "../content/AboutUs/AboutUsCTA.json"

import { useParams } from "react-router-dom";


function AboutUs() {
  const {lang} = useParams();

  const Content = content[lang];

  return (
    <div className="page-background">
      <section>
        <HeroAboutUs lang={lang}/>
      </section>

      <section>
        <OurTeamCarousel lang={lang} />
      </section>

      <section>
        <WorkerTestimonial lang={lang}/>
      </section>

      <section>
        <OurPartners lang={lang} />
      </section>

      <section id="OurApproach">
        <OurApproachCarousel lang={lang} />
      </section>

      <section>
        <ClientTestimonySlider lang={lang} isHomepage={false} />
      </section>

      <section>
        <TechStack lang={lang}/>
      </section>

      <section>
        <NewsletterRegister lang={lang} />
      </section>

      <section>
        <CallToActionSection
          Content={Content.Content}
          CallToAction={Content.CallToAction}
          Title={Content.Title}
          lang ={lang}
        />
      </section>
    </div>
  );
}

export default AboutUs;
