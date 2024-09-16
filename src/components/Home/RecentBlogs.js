import MobileSEOServicesBlogImage from "../../assets/Images/MobileSEOServicesBlogImage.jpeg";
import TechnicalSEOServicesBlogImage from "../../assets/Images/TechnicalSEOServicesBlogImage.jpeg";
import { Link } from "react-router-dom";

function RecentBlogs() {
  return (
    <>
      <div className="flex justify-center mt-[4vw] text-black text-left">
        <div className="w-[80%] max-[450px]:mt-[5vw] max-[450px]:mb-[5vw] max-[450px]:w-full">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw] max-[450px]:pl-[10vw]">
            RECENT BLOGS
          </p>
          <div className="flex gap-x-[10vw] mt-[1vw] items-center max-[450px]:flex-col max-[450px]:space-y-[8vw]">
            <h1 className="text-[4vw]/[5vw] text-left w-[55vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:w-[80%] max-[450px]:mt-[3vw]">
              Where Software Engineering Meets Digital Marketing
            </h1>
            <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:text-[3vw] max-[450px]:w-[80%]">
              Discover insights for businesses seeking digital transformation.
              Explore trends, strategies, and technologies related to software
              optimization, data-driven marketing, and the online platform
              ecosystem. Get practical tips to stay updated and gain a
              competitive edge.
            </p>
          </div>
          <div className="flex justify-between max-[450px]:flex-col max-[450px]:gap-y-[5vw] max-[450px]:mt-[7vw]">
            <div className="flex mt-[5vw]">
              <div
                style={{
                  backgroundImage: `url(${MobileSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-center max-[450px]:w-[40vw] max-[450px]:h-[60vw]"></div>
              <div className="w-[20vw] h-fit mt-[6vw] ml-[-5vw] p-[1.5vw] space-y-[2vw] bg-white max-[450px]:w-[60vw] max-[450px]:p-[6vw] max-[450px]:ml-[-15vw] max-[450px]:mt-[10vw] max-[450px]:space-y-[7vw]">
                <div className="text-[1.2vw] text-[#666666] border-[0.1vw] border-[#F2F2F2] p-[0.5vw] max-[450px]:text-[3vw]">
                  <p>SEO SERVICES</p>
                  <p className="text-[#A7A9AA]">11 July 2024</p>
                </div>
                <p className="text-[1.7vw] font-bold max-[450px]:text-[5vw]">
                  Key Reasons Why Your Business Needs Mobile SEO Services
                </p>
                <p className="text-[1.1vw] text-[#666666] hover:text-[#FF9900] cursor-pointer underline max-[450px]:text-[3vw]">
                  <Link to="BlogPost">Read more</Link>
                </p>
              </div>
            </div>

            <div className="flex mt-[5vw] mb-[5vw] max-[450px]:justify-between">
              <div
                style={{
                  backgroundImage: `url(${TechnicalSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-[center_1vw] max-[450px]:hidden"></div>
              <div className="w-[20vw] h-fit mt-[6vw] ml-[-5vw] p-[1.5vw] space-y-[2vw] bg-white z-10 max-[450px]:w-[60vw] max-[450px]:p-[6vw] max-[450px]:ml-[10vw] max-[450px]:mt-[10vw] max-[450px]:space-y-[7vw]">
                <div className="text-[1.2vw] text-[#666666] border-[0.1vw] border-[#F2F2F2] p-[0.5vw] max-[450px]:text-[3vw]">
                  <p>SEO SERVICES</p>
                  <p className="text-[#A7A9AA]">11 July 2024</p>
                </div>
                <p className="text-[1.7vw] font-bold max-[450px]:text-[5vw]">
                  Technical SEO Services: Optimize and Rank your Website
                </p>
                <p className="text-[1.1vw] text-[#666666] hover:text-[#FF9900] cursor-pointer underline max-[450px]:text-[3vw]">
                  Read more
                </p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${TechnicalSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-[center_1vw] min-[450.1px]:hidden max-[450px]:w-[40vw] max-[450px]:h-[60vw] max-[450px]:ml-[-30vw]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBlogs;
