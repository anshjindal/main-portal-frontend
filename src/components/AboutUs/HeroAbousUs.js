import AboutPageHeroImage from "../../assets/SVG/AboutPageHeroImage.svg";
import OurMissionTopImage from "../../assets/Images/OurMissionTopImage.webp";
import OurMissionSideImage from "../../assets/Images/OurMissionSideImage.webp";
import { CgArrowLongUp } from "react-icons/cg";
import content from "../../content/AboutUs/HeroAboutUs.json";

function HeroAboutUs({ lang }) {
  const handleScroll = () => {
    document
      .getElementById("OurApproach")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Get content based on the selected language
  const Content = content[lang];

  return (
    <div className="flex justify-center h-fit">
      <div className="w-[80%] text-left mt-[3vw]">
        <h1 className="text-[4vw]/[5vw] max-[450px]:text-[7vw]/[10vw] font-extrabold w-[75%] max-[450px]:w-[100%]">
          {Content.title} <span className="text-[#2703A5]">Business Growth</span>
        </h1>
        <div className="max-[450px]:block flex mt-[3vw] items-center justify-between">
          <p className="max-[450px]:w-[100%] max-[450px]:text-[3vw]/[5vw] max-[450px]:mb-[4vw] mb-[0vw] w-[65%] text-[1.3vw]">
            {Content.introText}
          </p>
          <div
            className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center gap-x-[0.3vw] w-[25vw] h-[25vw] md:w-[14vw] md:h-[14vw] text-[1.1vw] cursor-pointer"
            onClick={handleScroll}
          >
            {Content.buttonText}
            <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
          </div>
        </div>

        <img alt="" src={AboutPageHeroImage} className="w-[100%] h-[43vw]"></img>

        <div className="mt-[4vw] flex justify-between max-[450px]:block ">
          <div className="flex flex-col gap-y-[1.5vw] w-[45%] max-[450px]:w-[100%] ">
            <p className="text-[1.3vw] text-[#666666] max-[450px]:text-[3vw]/[5vw] ">
              {Content.missionTitle}
            </p>
            <h1 className="text-[3.8vw]/[5.2vw] max-[450px]:text-[6vw]/[8vw]  max-[450px]:w-[60%] font-normal">
              {Content.missionText}
            </h1>
            <p className="mt-[2vw] text-[1.3vw]  max-[450px]:text-[3vw]/[5vw] font-[bold] text-[#666666]">
              {Content.visionTitle}
            </p>
            <p className="text-[1.3vw] border-l-[0.1vw] max-[450px]:text-[3vw]/[5vw] border-[#9C9C9C] pl-[1vw]">
              {Content.visionText}
            </p>
          </div>

          <div className="flex flex-col w-[33vw] max-[450px]:w-[100%] ">
            <div
              style={{ backgroundImage: `url(${OurMissionTopImage})` }}
              className="w-full h-[15vw] bg-center bg-cover"
            ></div>
            <div className="flex">
              <div className="w-[23vw] max-[450px]:w-[100%] h-[30vw] mt-[-3vw] bg-[#F4F4F4]">
                <p className="mt-[2vw] mb-[2vw] text-[1.3vw] max-[450px]:text-[3vw]/[5vw] font-[bold] text-[#666666]">
                  {Content.storyTitle}
                </p>
                <p className="text-[1.3vw] border-l-[0.1vw] border-[#9C9C9C] pl-[1vw] pr-[1.2vw]">
                  {Content.storyText}
                </p>
              </div>
              <div
                style={{ backgroundImage: `url(${OurMissionSideImage})` }}
                className="w-[15vw] h-[27vw] bg-cover bg-center"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAboutUs;
