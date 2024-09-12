import Aldelia from "../../assets/SVG/ClientsLogo/AldeliaLogo.svg";
import ARQCH from "../../assets/SVG/ClientsLogo/ARQCHLogo.svg";
import Precision from "../../assets/SVG/ClientsLogo/PrecisionLogo.svg";
import Charis from "../../assets/SVG/ClientsLogo/CharisLogo.svg";
import KigaliRunningClub from "../../assets/SVG/ClientsLogo/KigaliRunningClub.svg";

function OurClients() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex flex-col mt-[6vw] text-left text-[3vw] max-[450px]:text-[7vw] font-bold max-[450px]:text-[4vw] max-[450px]:h-[16vw] max-[450px]:w-[90%] max-[450px]:mb-[5vw]">
        <h1>Explore some our Clients</h1>
        <div className="flex w-full justify-between items-center mt-[-1vw]">
          <img
            src={Aldelia}
            className="h-[12vw] w-[12vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"
          ></img>
          <img
            src={ARQCH}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"
          ></img>
          <img
            src={Precision}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"
          ></img>
          <img
            src={Charis}
            className="h-[12vw] w-[12vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"
          ></img>
          <img
            src={KigaliRunningClub}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
