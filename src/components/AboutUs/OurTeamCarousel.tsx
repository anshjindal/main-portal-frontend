import React, { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import content from '../../content/AboutUs/OurTeamData';
import contentTitle from '../../content/AboutUs/OurTeam.json';

interface TeamMember {
  image: string;
  title: string;
  subtitle: string;
  hovertitle: string;
  linkedinlink: string;
}

interface LangContent {
  title: string;
}

interface Props {
  lang: 'en' | 'fr'; // adapte selon les langues supportées
}

const OurTeamCarousel: React.FC<Props> = ({ lang }) => {
  const ContentTitle: LangContent = contentTitle[lang];
  const Content: TeamMember[] = content[lang];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(Content.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(Content.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-center mt-[5vw]">
      <div
        onClick={goToPrevious}
        className="flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]"
      >
        <HiOutlineArrowSmLeft />
      </div>

      <div className="overflow-hidden w-[80%]">
        <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
          {ContentTitle.title}
        </h1>
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Content.map((card: TeamMember, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-[33.3%] max-[450px]:p-2 p-4 relative"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md relative group">
                <div
                  style={{ backgroundImage: `url(${card.image})` }}
                  className="w-full h-[30vw] bg-cover bg-center"
                ></div>
                <div className="p-[1.5vw] text-center">
                  <h2 className="font-bold text-[1.5vw]">{card.title}</h2>
                  <p className="text-gray-600 text-[1.1vw]">{card.subtitle}</p>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                  <h2 className="font-bold text-[1.5vw]">{card.title}</h2>
                  <p className="text-gray-600 text-[1.1vw]">{card.subtitle}</p>
                  <p className="text-gray-600 text-[1.1vw] mt-2">{card.hovertitle}</p>
                  <a
                    href={card.linkedinlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] mt-2"
                  >
                    <FaLinkedin className="text-[2vw]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={goToNext}
        className="flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]"
      >
        <HiOutlineArrowSmRight />
      </div>
    </div>
  );
};

export default OurTeamCarousel;
