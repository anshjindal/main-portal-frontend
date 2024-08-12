import React, { useState, useRef } from "react";
import { CgArrowLongUp } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import MeetTheTeamImages from "../assets/africa-block-chain-slider.png";
import { ImCheckmark } from "react-icons/im";
import NewsletterBanner from "../assets/NewsletterBanner.jpeg";

function ContactUs() {
  const [submitButton, updateSubmitButton] = useState(false);
  const formRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    updateSubmitButton(!submitButton);

    setTimeout(() => {
      updateSubmitButton(false);
      formRef.current.reset();
    }, 1000); // Change state back to false after 1 second
  };

  return (
    <div className="pt-[5vw] pb-[5vw]">
      <div className="flex items-center justify-center mb-[3vw]">
        <div className="flex justify-center items-center w-[44vw] h-[32vw] bg-white mr-[-6vw] z-10">
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
                  welcome you to contact our team at any time. <br></br>Email
                  us: info@wouessi.com<br></br>Call us: +1 844 317 2845
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
      <div className="flex justify-center mt-[8vw]">
        <div className="flex justify-between w-[80%] items-center">
          <form
            onSubmit={submitHandler}
            ref={formRef}
            className="flex flex-col gap-y-[1.5vw] w-[44vw] rounded-xl">
            <div className="text-left">
              <div className="text-[4vw] font-bold">Let's talk</div>
              <p className="text-[1.1vw]">
                Awesome! We are excited to hear from you and help you in your
                journey! Leave us a message
              </p>
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Name*"
                required
                className="bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black"></input>
              <input
                type="email"
                placeholder="Email*"
                required
                className="bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black"></input>
            </div>
            <div className="flex justify-between">
              <input
                type="tel"
                placeholder="Phone"
                required
                className="bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black"></input>
              <input
                type="Subject"
                placeholder="Subject*"
                required
                className="bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black"></input>
            </div>
            <textarea
              placeholder="Your Message*"
              rows="1"
              cols="10"
              className="bg-[#F4F4F4] border-b-[0.1vw] border-[#B8B8B8] pt-[0.5vw] pb-[1vw] min-h-[1vw] resize-none text-[1.1vw] placeholder:font-thin placeholder:text-black hover:placeholder-text:w-[3vw]"></textarea>

            <button
              type="submit"
              className={
                submitButton === false
                  ? "border-[0.01vw] border-black transition-all ease-in-out duration-300 rounded-full flex items-center justify-center mt-[3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer hover:bg-[#2B00AC] hover:text-white"
                  : "border-black bg-[green] border-[0.1vw] transition-all duration-300 ease-in-out rounded-full flex items-center justify-center mt-[3vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer"
              }>
              {submitButton === false ? (
                <div className="flex items-center gap-x-[0.3vw]">
                  Send your message
                  <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                </div>
              ) : (
                <ImCheckmark />
              )}
            </button>
          </form>
          <div className="w-[26vw] h-fit bg-[#F4F4F4] shadow-[#F4F4F4]-50 rounded-xl p-[2.5vw] shadow-lg">
            <div className="flex gap-x-[1vw]">
              <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <FaPhoneVolume />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold">
                  Call Anytime
                </h2>
                <p className="text-[1.1vw]">+1 844 317 2845</p>
              </div>
            </div>
            <div className="flex gap-x-[1vw] mt-[2vw]">
              <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <MdEmail />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold">
                  Send Email
                </h2>
                <p className="text-[1.1vw]">info@wouessi.com</p>
              </div>
            </div>
            <div className="flex gap-x-[1vw] mt-[2vw] mb-[2.7vw]">
              <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC]">
                <FaLocationDot />
              </div>
              <div className="flex flex-col text-left mt-[-0.4vw]">
                <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold">
                  Visit Us
                </h2>
                <p className="text-[1.1vw] w-[15vw]">
                  140 Younge Street, Suite 200 ON M5C 1X6
                </p>
              </div>
            </div>
            <h1 className="text-[1.4vw] text-[#2B00AC] font-bold">Follow us</h1>
            <div className="flex justify-center gap-x-[1.5vw] mt-[2vw]">
              <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white">
                <FaLinkedinIn className="text-[1.6vw]" />
              </div>
              <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white">
                <FaInstagram className="text-[1.6vw]" />
              </div>
              <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white">
                <FaFacebookF className="text-[1.6vw]" />
              </div>
              <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white">
                <FaTwitter className="text-[1.6vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[5vw] mt-[10vw]">
        <div className="w-[6.5vw] h-[32vw] bg-[#2B00AC] mt-[-3vw]"></div>
        <div
          style={{ backgroundImage: `url(${NewsletterBanner})` }}
          className="w-[30vw] h-[40vw] bg-cover bg-[center]"></div>
        <div>
          <div className="flex justify-center items-center w-[44vw] h-[32vw] bg-[#2B00AC] mt-[-3vw]">
            <div className="w-[85%] text-left text-white">
              <div className="flex">
                <h1 className="text-[3.5vw]/[4.2vw] font-bold">
                  Exclusive, be the first to know
                </h1>
                <div className="w-[12vw] flex justify-end items-center"></div>
              </div>
              <p className="text-[1.1vw] w-[80%] mt-[2vw] mb-[2vw]">
                Enter your email to subscribe to our newsletter for our lastest
                news, updates and offers.
              </p>
              <form>
                <div className="flex items-center border-b-[0.2vw] border-[#B8B8B8]">
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="bg-[#2B00AC] h-[3.5vw] w-full text-[1.2vw] focus-visible:outline-none placeholder:font-normal placeholder:text-white"></input>
                  <button
                    type="submit"
                    className="w-[3vw] text-[1.5vw] hover:pl-[1vw] hover:text-[#44c644] cursor-pointer transition-all ease-in-out duration-300">
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
