import React from 'react';
import '../styles/Services.css';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import HeaderSection from '../components/Reusable/HeaderSection';
import Accordion from '../components/Reusable/Accordion';
import content from '../content/Services/ServicesData.json';
import { useParams } from 'react-router-dom';
import ServicesMetaRender from '../components/Home/ServicesMetaRender';

function Services() {
  const { lang } = useParams();
  const Content = content[lang];

  return (
    <>
      <ServicesMetaRender lang={lang} />
      <div className="flex justify-center page-background">
        <div className="w-[80%]">
          <HeaderSection
            Header={Content.heroTitle}
            Content={Content.heroContent}
          />

          {/* Accordion Section */}
          <div className="max-[450px]:mt-[5vw]">
            {Object.keys(Content.accordions).map((sectionKey, index) => {
              const section = Content.accordions[sectionKey];
              if (sectionKey === 'Logo') {
                return (
                  <Accordion key={index} title={section.heading}>
                    {section.content.map((item, innerIndex) => (
                      <div key={innerIndex}>
                        <h3>{item.innerTitle}</h3>
                        <p>{item.innerText}</p>
                      </div>
                    ))}
                  </Accordion>
                );
              }
              return (
                <Accordion
                  key={index}
                  title={section.heading}
                  InnerTextData={section.content}
                />
              );
            })}
          </div>

          <CallToActionSection CallToAction="services" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Services;
