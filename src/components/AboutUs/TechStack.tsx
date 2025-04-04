import React from 'react';
import { useParams } from 'react-router-dom';
import TechLogos from '../../content/AboutUs/TechLogo';
import content from '../../content/AboutUs/TechStack.json';

interface TechStackProps {
  lang: 'en' | 'fr';
}

const TechStack: React.FC<TechStackProps> = ({ lang }) => {
  const Content = content[lang];

  return (
    <div className="flex justify-center my-[5vw]">
      <div className="w-[80%]">
        <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
          {Content.title}
        </h1>
        <div className="grid grid-cols-5 gap-4 mt-[3vw] max-[450px]:mb-[8vw]">
          {TechLogos.map((LogoComponent: string, index: number) => (
            <img
              alt="tech-logo"
              key={index}
              src={LogoComponent}
              className={`flex justify-center items-center p-4 max-[450px]:p-1 w-[12vw] h-[12vw] ${
                Math.floor(index / 5) !== 4 ? 'border-b' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
