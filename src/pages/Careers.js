import React from 'react';
import HeroBanner from '../components/Reusable/HeroBanner';
import Accordion from '../components/Reusable/Accordion';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import CareersHeroBanner from '../assets/Images/CareersHeroImage.webp';
import { useParams } from 'react-router-dom';
import content from '../content/Careers/CareersAccordionInnerText.json';
import CareerMetaRender from '../components/CareerMetaRender/CareerMetaRender';

function Careers() {
  const { lang } = useParams();
  const Content = content[lang];

  return (
    <>
      <CareerMetaRender lang={lang} />
      <div className="flex justify-center mt-[5vw] page-background">
        <div className="w-[80%]">
          <HeroBanner
            BannerImage={CareersHeroBanner}
            Header={Content.heroTitle}
            Content={Content.heroContent}
          />

          {/* Accordion Section */}
          <div className="mb-[-1vw] mt-[-5vw] max-[450px]:mt-[5vw]">
            {Object.keys(Content.accordions).map((sectionKey, index) => {
              const section = Content.accordions[sectionKey];
              return (
                <Accordion
                  key={index}
                  title={section.heading}
                  InnerTextData={section.content}
                />
              );
            })}
          </div>

          <CallToActionSection CallToAction="career" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Careers;
