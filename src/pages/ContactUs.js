import React from "react";
import { CgArrowLongUp } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import MeetTheTeamImages from "../assets/recent-proj-backdrop.png";

function ContactUs() {
  return (
    <div className="pt-[5vw] pb-[5vw]">
      <div className="flex items-center justify-center mb-[3vw]">
        <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-white mr-[-6vw] z-10">
          <div className="w-[80%] text-left text-[black]">
            <h1
              className="text-[3.7vw]/[4vw] font-bold w-[
              70%]">
              Get in touch with us
            </h1>
            <div className="flex justify-between mt-[3vw]">
              <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
              <div className="flex flex-col w-[80%] mt-[-1vw]">
                <p className="text-[1.1vw]">
                  We appreciate you taking the time to visit our website and
                  learn more about Wouessi Inc. To learn more about us, we
                  welcome you to contact our team at any time. Email us:
                  info@wouessi.ca
                </p>
                <p className="mt-[2.5vw] text-[1vw] text-[#757575]">
                  CONSULTING &#x2022; DISCOVERY CALL &#x2022; RESOURCES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
          className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
      </div>
      <div className="flex justify-center mb-[2vw]">
        <div className="w-[80%] text-left">
          <h1 className="text-[4vw] font-bold">Let's talk</h1>
          <p className="text-[1.1vw]">
            Awesome! We are excited to hear from you and help you in your
            journey! Leave us a message
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-[80%]">
          <form className="flex flex-col p-[2.5vw] gap-y-[1.5vw] w-[50vw] rounded-xl bg-white">
            <input
              type="text"
              placeholder="Name*"
              required
              className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
            <input
              type="email"
              placeholder="Email*"
              required
              className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
            <input
              type="tel"
              placeholder="Phone"
              required
              className="bg-[#F7F7F7] h-[3.5vw] rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></input>
            <textarea
              placeholder="Your Message*"
              rows="2"
              cols="10"
              className="bg-[#F7F7F7] min-h-[10vw] resize-none rounded-lg p-[1vw] text-[1.1vw] placeholder:text-[#252525]"></textarea>
            <div className="flex justify-center">
              <button className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center mt-[1vw] ml-[2vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
                Send your message
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </button>
            </div>
          </form>
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
    </div>
  );
}

export default ContactUs;
