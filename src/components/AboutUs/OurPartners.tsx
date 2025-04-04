import React, { JSX } from 'react';
import Slider from 'react-infinite-logo-slider';
import partnersLogos from '../../content/AboutUs/PartnersLogoData';
import content from '../../content/AboutUs/OurPartners.json';

interface Props {
  lang: 'en' | 'fr';
}

function OurClients({ lang }: Props): JSX.Element {
  const Content = content[lang];

  return (
    <>
      <div className="flex justify-center mb-[2vw]">
        <div className="w-[80%]">
          <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
            {Content.title}
          </h1>
        </div>
      </div>

      <Slider
        width="250px"
        duration={60}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor="#fff"
      >
        {partnersLogos.map((logo, index) => (
          <Slider.Slide key={index}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 10px',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </>
  );
}

export default OurClients;
