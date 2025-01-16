import React, { useState } from 'react';
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import PortfolioData from "../content/Portfolio/PortfolioData"; // Import static data
import { useParams } from 'react-router-dom';
import content from "../content/Portfolio/Portfolio.json";
import PortifolioMetaDataRender from '../components/Portifolio/PortifolioMetaDataRender';

function Portfolio() {
  const [visible, setVisible] = useState(4); // Show 4 cards initially
  const {lang} = useParams();
  const Content = content[lang];

  // Remove states and useEffect related to data fetching
  // const [portfolioItems, setPortfolioItems] = useState([]); // State to store portfolio data
  // const [loading, setLoading] = useState(true); // Loading state
  // const [error, setError] = useState(null); // Error state

  // Use the static PortfolioData
  const portfolioItems = PortfolioData;

  // Remove loading and error handling
  // const fetchPortfolioData = async () => { ... };
  // useEffect(() => { fetchPortfolioData(); }, []);

  // const showMorePortfolioData = () => { ... }; // Keep this function for showing more/less functionality
  const showMorePortfolioData = () => {
    setVisible((prevValue) =>
      prevValue === 10 ? (prevValue = 2) : prevValue + 2
    );
  };

  return (
   <>
   <PortifolioMetaDataRender/>
    <div className="text-black flex justify-center page-background">
      <div className="w-[80%] mt-[4vw]">
        <div className="flex gap-x-[10vw] PortfolioData-center max-[450px]:flex-col max-[450px]:gap-y-[6vw] max-[450px]:mb-[8vw]">
          <h1 className="text-[3.5vw]/[4.5vw] text-left w-[75vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
            {Content.title}
          </h1>
          <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:w-[100%] max-[450px]:text-[3vw] max-[450px]:font-semibold max-[450px]:mb-[-2vw]">
          {Content.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-[2vw] mt-[1vw]">
          {portfolioItems.slice(0, visible).map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[48%] pb-[2vw] bg-white rounded-2xl mt-[2vw] max-[450px]:w-full max-[450px]:pb-[2vw] max-[450px]:mt-[6vw] shadow-md hover:shadow-lg transition-transform"
              key={item.title}>
              <div className="relative w-full h-[29vw] max-[450px]:h-[65vw] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt? item.alt: item.title}
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
        <CallToActionSection
          Content={Content.Content}
          CallToAction={Content.CallToAction}
          Title={Content.Title}
          lang={lang}
        />
      </div>
    </div>
   </>
  );
}

export default Portfolio;
