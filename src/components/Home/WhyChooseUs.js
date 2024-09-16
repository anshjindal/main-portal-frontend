import WhyChooseUsBackground from "../../assets/Images/WhyChooseUsBackground.png";
import { CgArrowLongUp } from "react-icons/cg";
import { Link } from "react-router-dom";

function WhyChooseUS() {
  return (
    <>
      <div className="flex justify-center bg-[#2B00AC] gap-x-[6vw] mt-[2vw]">
        <img
          src={WhyChooseUsBackground}
          className="w-[30vw] h-[45vw] mt-[6vw] mb-[6vw] max-[450px]:hidden"></img>
        <div className="flex flex-col text-left w-[38vw] max-[450px]:w-[80%] max-[450px]:mt-[4vw]">
          <h2 className="text-[1.1vw] mb-[0.7vw] mt-[6vw] text-[#FF9900] max-[450px]:text-[2.5vw]">
            WHY CHOOSE US
          </h2>
          <h1 className="text-[4vw]/[4.5vw] text-left font-bold text-white max-[450px]:text-[6vw]/[7.5vw] max-[450px]:mt-[3vw]">
            Empower Businesses With Innovative Digital Solutions.
          </h1>
          <div
            style={{ backgroundImage: `url(${WhyChooseUsBackground})` }}
            className="w-full h-[70vw] mt-[6vw] mb-[6vw] bg-cover bg-center min-[450.1px]:hidden"></div>
          <h3 className="text-[1.2vw] mt-[2vw] text-white max-[450px]:text-[3vw] ">
            We are committed to helping business owners leverage digital
            technology and solutions, increase their digital footprint, harness
            the benefits of digital presence, and gain a cutting edge ahead of
            their competitors.
          </h3>
          <div>
            <Link to="/frontend-react-wouessi-website-v2/Services">
              <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[4vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[8vw]">
                Details
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUS;
