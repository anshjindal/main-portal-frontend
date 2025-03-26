
import React from 'react';
import '../styles/AboutUs.css';

import NewsletterRegister from '../components/Reusable/NewsletterRegisters';
import ClientTestimonySlider from '../components/Home/ClientTestimonySlider';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import OurTeamCarousel from '../components/AboutUs/OurTeamCarousel';
import OurPartners from '../components/AboutUs/OurPartners';
import OurApproachCarousel from '../components/AboutUs/OurApproachCarousel';
import TechStack from '../components/AboutUs/TechStack';
import WorkerTestimonial from '../components/AboutUs/WorkerTestimonial';
import HeroAboutUs from '../components/AboutUs/HeroAbousUs';
import { useParams } from 'react-router-dom';
import AboutMetaRender from '../components/AboutUs/AboutMetaRender';

type RouteParams = {
  lang: string;
};

const AboutUs: React.FC = () => {
  const { lang } = useParams<RouteParams>() || {};
  const validLang = lang === 'en' || lang === 'fr' ? lang : 'en';

  return (
    <>
      <AboutMetaRender lang={validLang} />
      <div className="page-background">
        <HeroAboutUs lang={validLang} />

        <section>
          <OurTeamCarousel lang={validLang} />
        </section>

        <section>
          <OurPartners lang={validLang} />
        </section>

        <section>
          <ClientTestimonySlider lang={validLang} isHomepage={false} />
        </section>

        {/* 
        <section id="OurApproach">
          <OurApproachCarousel lang={lang} />
        </section>

        <section>
          <WorkerTestimonial lang={lang} />
        </section>

        <section>
          <TechStack lang={lang} />
        </section>
        */}

        <section>
          <CallToActionSection CallToAction="workwithus" lang={validLang} />
        </section>
      </div>
    </>
  );
};

export default AboutUs;
