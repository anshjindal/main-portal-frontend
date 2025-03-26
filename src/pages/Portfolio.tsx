import React, { useState } from 'react';
import { CgArrowLongDown, CgArrowLongUp } from 'react-icons/cg';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import PortfolioData from '../content/Portfolio/PortfolioData';
import { useParams } from 'react-router-dom';
import content from '../content/Portfolio/Portfolio.json';
import PortifolioMetaDataRender from '../components/Portifolio/PortifolioMetaDataRender';
import HeaderSection from '../components/Reusable/HeaderSection';

// Define the shape of each portfolio item
interface PortfolioItem {
  title: string;
  image: string;
  link: string;
  alt?: string;
}

// Define structure of the content JSON
interface PortfolioPageContent {
  title: string;
  description: string;
  buttonSeeMore: string;
  buttonSeeLess: string;
  Content?: string;
  CallToAction?: string;
  Title?: string;
}



const Portfolio: React.FC = () => {
  const [visible, setVisible] = useState<number>(4);
  const { lang } = useParams<{ lang?: string }>();
  const Content: PortfolioPageContent | undefined = lang ? content[lang] : undefined;

  const portfolioItems: PortfolioItem[] = PortfolioData;

  const showMorePortfolioData = () => {
    setVisible((prev) => (prev === 10 ? 2 : prev + 2));
  };

  if (!Content) {
    return <div className="text-center mt-10 text-lg">Content not available</div>;
  }

  return (
    <>
      <PortifolioMetaDataRender />
      <div className="text-black flex justify-center page-background">
        <div className="w-[80%]">
          <HeaderSection Header={Content.title} Content={Content.description} />

          <div className="flex flex-wrap justify-between gap-x-[2vw] mt-[1vw]">
            {portfolioItems.slice(0, visible).map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[48%] pb-[2vw] bg-white rounded-2xl mt-[2vw] max-[450px]:w-full max-[450px]:pb-[2vw] max-[450px]:mt-[6vw] shadow-md hover:shadow-lg transition-transform"
                key={item.title}
              >
                <div className="relative w-full h-[29vw] max-[450px]:h-[65vw] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt ?? item.title}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform transform hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="w-[90%] flex justify-center justify-between PortfolioData-center bg-white text-black h-[7vw] max-[450px]:h-[17vw]">
                    <div className="flex flex-col text-left max-[450px]:p-[2vw]">
                      <h2 className="text-[2vw] font-bold max-[450px]:text-[4vw]">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            <div className="flex justify-center w-full max-[450px]:mt-[4vw] max-[450px]:mb-[8vw]">
              <div
                className="border-black border-[0.1vw] rounded-[3vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out flex justify-center mt-[3vw] w-[8.5vw] h-[2.5vw] text-[1.1vw] cursor-pointer max-[450px]:w-[19vw] max-[450px]:h-[6vw] max-[450px]:text-[2.5vw]"
                onClick={showMorePortfolioData}
              >
                {visible === 10 ? (
                  <div className="flex justify-center items-center PortfolioData-center gap-x-[0.3vw] max-[450px]:gap-x-[1vw]">
                    {Content.buttonSeeLess}
                    <CgArrowLongUp className="text-[1.1vw] max-[450px]:text-[2.5vw]" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center PortfolioData-center gap-x-[0.3vw] max-[450px]:gap-y-[1vw]">
                    {Content.buttonSeeMore}
                    <CgArrowLongDown className="text-[1.1vw] max-[450px]:text-[2.5vw]" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
