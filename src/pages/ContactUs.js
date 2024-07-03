import React from "react";
import HeroBanner from "../components/HeroBanner";
import ContactBackdrop from "../assets/contact-backdrop.jpeg";
import GetInTouch from "../components/GetInTouch";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="pb-[5vw]">
      <div className="bg-[#F4F4F4] pb-[6vw]">
        <HeroBanner title={"Contact"} image={ContactBackdrop} />
        <h2 className="text-[1.8vw] font-bold text-[#2B00AC] mt-[5vw]">
          \ Get In Touch \
        </h2>
        <h1 className="text-[#0E1F51] text-[3vw] font-bold mt-[-0.5vw] mb-[3vw]">
          Hey! Let's Talk
        </h1>
        <div className="flex justify-center gap-x-[2vw]">
          <div className="w-[50vw] h-[35vw] bg-white rounded-xl">
            <form className="flex flex-col p-[2.5vw] gap-y-[1.5vw]">
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
              <input
                type="tel"
                placeholder="Phone"
                required
                className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
              <textarea
                placeholder="Your Message"
                rows="2"
                cols="10"
                className="bg-[#F7F7F7] min-h-[10vw] resize-none rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></textarea>
              <button className="w-[8.3vw] h-[3.3vw] rounded-md bg-[#2B00AC] text-[1.1vw] text-white">
                Send Now
              </button>
            </form>
          </div>
          <div className="w-[26vw] h-[35vw] bg-white rounded-xl p-[2.5vw]">
            <div className="flex gap-x-[1vw]">
              <div className="w-[5vw] h-[5vw] bg-[#F7F7F7] rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <FaPhoneVolume />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.3vw] text-[#2B00AC] font-extrabold">
                  Call Anytime
                </h2>
                <p className="text-[1.1vw]">+1 844 317 2845</p>
              </div>
            </div>
            <div className="flex gap-x-[1vw] mt-[2vw]">
              <div className="w-[5vw] h-[5vw] bg-[#F7F7F7] rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <MdEmail />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.3vw] text-[#2B00AC] font-extrabold">
                  Send Email
                </h2>
                <p className="text-[1.1vw]">info@wouessi.com</p>
              </div>
            </div>
            <div className="flex gap-x-[1vw] mt-[2vw] mb-[2.7vw]">
              <div className="w-[5vw] h-[5vw] bg-[#F7F7F7] rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <FaLocationDot />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.3vw] text-[#2B00AC] font-extrabold">
                  Visit Us
                </h2>
                <p className="text-[1.1vw] w-[13vw]">
                  140 Younge Street, Suite 200 ON M5C 1X6
                </p>
              </div>
            </div>
            <h1 className="text-[1.6vw] text-[#0E1F51] font-bold">Follow Us</h1>
            <div className="flex justify-center gap-x-[1.5vw] mt-[2vw]">
              <div className="w-[4vw] h-[4vw] bg-[#2B00AC] rounded-lg flex justify-center items-center text-[2vw] text-white">
                <FaLinkedinIn />
              </div>
              <div className="w-[4vw] h-[4vw] bg-[#2B00AC] rounded-lg flex justify-center items-center text-[2vw] text-white">
                <FaInstagram />
              </div>
              <div className="w-[4vw] h-[4vw] bg-[#2B00AC] rounded-lg flex justify-center items-center text-[2vw] text-white">
                <FaFacebookF />
              </div>
              <div className="w-[4vw] h-[4vw] bg-[#2B00AC] rounded-lg flex justify-center items-center text-[2vw] text-white">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}

export default ContactUs;
