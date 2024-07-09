import React from "react";
import MeetTheTeamImages from "../assets/recent-proj-backdrop.png";

function Careers() {
  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw]">
      <div className="w-[80%]">
        <div className="flex items-center justify-center">
          <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]"></div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
          <div className="flex justify-center items-center w-[47vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]">
            <div className="w-[80%] text-left text-white">
              <h1 className="text-[4vw]/[4vw] font-bold">Why Join Wouessi?</h1>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  At Wouessi, we embrace concepts of diversity, active
                  innovation, teamwork, learning, and training in our workplace.
                  Here are some reasons why you should consider joining our
                  team:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center w-[48vw] h-[28vw]">
            <div className="w-[80%] text-left text-black">
              <h1 className="text-[4vw]/[4vw] font-bold">Why Join Wouessi?</h1>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  At Wouessi, we embrace concepts of diversity, active
                  innovation, teamwork, learning, and training in our workplace.
                  Here are some reasons why you should consider joining our
                  team:
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[28vw] bg-cover bg-[center_right_-2vw]"></div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
