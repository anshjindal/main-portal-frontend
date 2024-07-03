import React from "react";
import "../styles/Pricing.css";
import HeroBanner from "../components/HeroBanner";
import PricingPageBackdrop from "../assets/pricing-page-backdrop.jpg";

function Pricing() {
  return (
    <main>
      <HeroBanner title={"Price"} image={PricingPageBackdrop} />
      <section>
        <div className="text-center px-3 sm:px-6 lg:px-12 pb-20 mt-[5vw]">
          <p className="capitalize font-bold text-[#2B00AC]">pricing plans</p>
          <p className="lg:w-1/3 mx-auto text-4xl font-bold py-6">
            Choose a Plan that Works for you
          </p>
          <div className="w-1/6 mx-auto border border-gray-400"></div>
          <div className="flex justify-center gap-3 py-10">
            <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
              Monthly
            </button>
            <button className="w-[11vw] h-[4vw] rounded-md bg-[#FFF] font-bold text-[1.1vw]">
              Yearly
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-[3vw]">
            <div className="flex flex-col justify-between p-8 text-sm rounded-md border border-gray-300">
              <p className="capitalize">small business</p>
              <p className="text-4xl text-center font-extrabold mb-20">
                $2,000 USD
              </p>
              <ul className="p-10 list-disc mb-16">
                <li className="py-4">
                  <p>Respomsive Website - 5Pages</p>
                </li>
                <li className="py-4">
                  <p>Social Media Management - 2 accounts / 1 month</p>
                </li>
                <li className="py-4">
                  <p>Comprtitor Analysis - 1 competitor</p>
                </li>
                <li className="py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="py-4">
                  <p>Paid Social Media - 1 week</p>
                </li>
                <li className="py-4">
                  <p>Paid Search - 1 week</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#2B00AC] text-white rounded-lg p-8 text-sm">
              <p className="capitalize">Pro</p>
              <p className="text-4xl text-center font-extrabold">$4,500 USD</p>
              <ul className="p-10 list-disc">
                <li className="border-b py-4">
                  <p>Responsive Website - 15 pages</p>
                </li>
                <li className="border-b py-4">
                  <p>Social Media Management - 3 accounts / 2 months</p>
                </li>
                <li className="border-b py-4">
                  <p>Competitors Analysis - 2 competitors</p>
                </li>
                <li className="border-b py-4">
                  <p>Brochure Design- 3 Brochures</p>
                </li>
                <li className="border-b py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="border-b py-4">
                  <p>Paid Social Media - 1 month</p>
                </li>
                <li className="border-b py-4">
                  <p>Paid Search - 2 weeks</p>
                </li>
                <li className="border-b py-4">
                  <p>Email Marketing - 1 momth</p>
                </li>
                <li className="py-2">
                  <p>SEO strategiy - Basic</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 text-sm rounded-md border border-gray-300">
              <p className="capitalize">corpoorate business</p>
              <p className="capitalize text-4xl text-center font-extrabold">
                call
              </p>
              <ul className="p-10 list-disc">
                <li className="py-4">
                  <p>Responsive Website - Unlimited pages</p>
                </li>
                <li className="py-4">
                  <p>Social Media Management - Unlimited accounts / 3 months</p>
                </li>
                <li className="py-4">
                  <p>Competitors Analysis - 5 competitors</p>
                </li>
                <li className="py-4">
                  <p>Brochure Design- Unlimited Brochures</p>
                </li>
                <li className="py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="py-4">
                  <p>Paid Social Media - 1 month</p>
                </li>
                <li className="py-4">
                  <p>Paid Search - 1 month</p>
                </li>
                <li className="py-4">
                  <p>Email Marketing - 3 momth</p>
                </li>
                <li className="py-4">
                  <p>SEO strategiy - Full Stack</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
