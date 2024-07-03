import React from "react";
import "../styles/AboutUs.css";
import HeroBanner from "../components/HeroBanner"
import leftImage from "../assets/about-left-side-image.jpg"
import team1 from "../assets/team-1-picture.png"
import GetInTouch from "../components/GetInTouch"
import AboutPageBackdrop from "../assets/about-page-backdrop.jpeg"

function AboutUs() {
  return (
    <main>
      <HeroBanner title={"About us"} image={AboutPageBackdrop} />
      <section className="bg-gray-100">
        <div className="grid lg:grid-cols-2 px-3 sm:px-6 lg:px-12 gap-12 text-start py-16">
          <div>
            <img
              src={leftImage}
              width="100%"
              height="auto"
              alt="group-afro-americains-working-together"></img>
          </div>
          <div className="space-y-6">
            <p className="font-bold text-[#2B00AC]">\ About us \</p>
            <h1 className="capitalize text-4xl font-bold">
              we provide innovative digital solutions to help your{" "}
              <span className="text-[#2B00AC]">business</span> succed
            </h1>
            <p>
            It is a long established fact that a reader will be distracted by the  readable content
            of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-3 sm:px-6 lg:px-12 gap-12 mt-20 mb-20">
          <div className="my-20 space-y-6 text-center font-bold">
            <p className="text-[#2B00AC]">\ Team \</p>
            <h2 className="text-[#0E1F51] capitalize text-4xl">our leaders</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20 text-start">
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="text-[#2B00AC] capitalize font-bold">full name</h4>
                <p className="text-[#0E1F51] capitalize">role</p>
              </div>
            </div>
          </div>
          <GetInTouch />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
