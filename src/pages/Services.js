import React from "react";
import "../styles/Services.css"
import HeroBanner from "../components/HeroBanner"
import WhatWeDoImg from "../assets/what-we-do-services-page.jpg"
import ServicesPageBackdrop from "../assets/service-page-backdrop.jpg"
import GetInTouch from "../components/GetInTouch"

function Services() {
  return (
    <main>
      <HeroBanner title={"Our services"} image={ServicesPageBackdrop} />
      <section className="bg-gray-100">
        <div className="grid lg:grid-cols-2 px-3 sm:px-6 lg:px-12 gap-12 py-16 text-start">
          <div>
            <img src={WhatWeDoImg} width="100%" height="auto" alt="young-stylish-dark-skinned-couple-standing-sunny-city"></img>
          </div>
          <div className="space-y-6">
            <p className="capitalize font-bold text-[#2B00AC]">\ what we do \</p>
            <h1 className="text-[#0E1F51] text-4xl font-bold">We provide a range of services</h1>
            <p>We provide a range of services designed to elevate your business and drive success. Our offerings include digital marketing, web development, graphic design, strategic planning, and operations management</p>
            <p>Each service is tailored to meet your unique needs, ensuring personalized, effective solutions that enhance your brand's presence, streamline your operations, and achieve your business goals. Let us help you navigate the path to growth and excellence.</p>
            <div className="sm:flex justify-between gap-6 p-4 rounded-lg">
              <div className="bg-white p-2 flex items-center justify-evenly rounded-lg">
                <div className="bg-gray-200 text-5xl px-5 py-3 rounded-xl">
                  <i className="fa-regular fa-lightbulb text-[#2B00AC]"></i>
                </div>
                <div className=" space-y-2 p-3">
                  <h3 className="text-2xl text-[#2B00AC] font-bold capitalize">our vision</h3>
                  <p>It is a long established fact that</p>
                </div>
              </div>
              <div className="bg-white p-2 flex items-center justify-evenly rounded-lg">
                <div className="bg-gray-200 text-5xl px-5 py-3 rounded-xl">
                  <i className="fa-regular fa-lightbulb text-[#2B00AC]"></i>
                </div>
                <div className=" space-y-2 p-3">
                  <h3 className="text-2xl text-[#2B00AC] font-bold capitalize">our goals</h3>
                  <p>It is a long established fact that</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-3 sm:px-6 lg:px-40 gap-12 pb-20">
          <div className="my-20 space-y-6 text-center font-bold">
            <p className="text-[#2B00AC]">\ Services \</p>
            <h2 className="text-[#0E1F51] capitalize text-4xl">our expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-start">
            <div className="bg-[#2B00AC] h-64 rounded-lg px-6 pt-4 pb-6 text-white">
              <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                <i className="text-4xl text-[#2B00AC] fa-solid fa-desktop"></i>
              </div>
              <div className=" mt-2 space-y-3">
                <h3 className="capitalize font-extrabold text-lg">web design/development</h3>
                <div className="flex gap-2">
                  <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                  <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                </div>
                <p>Creating and maintaining responsive, user-friendly websites
                  that drive business growth.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg px-6 pt-4 pb-6">
              <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                <i className="text-4xl text-[#2B00AC] fa-regular fa-pen-to-square"></i>
              </div>
              <div className=" mt-2 space-y-3">
                <h3 className="text-[#2B00AC] capitalize font-extrabold text-lg">Content Marketing</h3>
                <div className="flex gap-2">
                  <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                  <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                </div>
                <p>Creating and distributing valuable content to attract and
                  engage target audiences.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg px-6 pt-4 pb-6">
              <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                <i className="text-4xl text-[#2B00AC] fa-solid fa-book"></i>
              </div>
              <div className=" mt-2 space-y-3">
                <h3 className="text-[#2B00AC] capitalize font-extrabold text-lg">Search Engine Optimization</h3>
                <div className="flex gap-2">
                  <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                  <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                </div>
                <p>Enhancing website visibility and ranking on search engines
                    to attract organic traffic.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg px-6 pt-4 pb-6">
              <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                <i className="text-4xl text-[#2B00AC] fa-solid fa-mobile-screen"></i>
              </div>
              <div className=" mt-2 space-y-3">
                <h3 className="text-[#2B00AC] capitalize font-extrabold text-lg">content Management</h3>
                <div className="flex gap-2">
                  <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                  <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                </div>
                <p>Creating and distributing valuable content to attract and
                  engage target audiences.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg px-6 pt-4 pb-6">
              <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                <i className="text-4xl text-[#2B00AC] fa-solid fa-chart-column"></i>
              </div>
              <div className=" mt-2 space-y-3">
                <h3 className="text-[#2B00AC] capitalize font-extrabold text-lg">Business Analytics</h3>
                <div className="flex gap-2">
                    <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                    <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                </div>
                <p>Monitoring, analyzing, and reporting on marketing campaign
                  performance to inform strategic decisions.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg px-6 pt-4 pb-6">
                <div className="w-fit bg-white flex items-center justify-center p-4 rounded-lg">
                  <i className="text-4xl text-[#2B00AC] fa-solid fa-chart-line"></i>
                </div>
                <div className=" mt-2 space-y-3">
                  <h3 className="text-[#2B00AC] capitalize font-extrabold text-lg">Marketing</h3>
                  <div className="flex gap-2">
                    <div className="w-12 h-1 bg-[#2b00AC] rounded-2xl"></div>
                    <div className="w-4 h-1 bg-[#2b00AC] rounded-2xl"></div>
                  </div>
                  <p>Designing and executing campaigns to communicate with
                    prospects and customers, and to drive sales.
                  </p>
                </div>
            </div>
          </div>
          <GetInTouch />
        </div>
      </section>
    </main>
  );
}

export default Services;
