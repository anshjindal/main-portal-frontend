import React, { useState, useRef } from 'react';
import { CgArrowLongUp } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import ContactPageHeroImage from '../assets/Images/ContactPageHeroImage.webp';
import { ImCheckmark } from 'react-icons/im';
import NewsletterRegister from '../components/Reusable/NewsletterRegister.js';
import { useParams } from 'react-router-dom';
import content from '../content/ContactUs/ContactUs.json';
import ContactMetaRender from '../components/ContactMetaRender/ContactMetaRender.js';
import toast, { Toaster } from 'react-hot-toast';

function ContactUs() {
  const [submitButton, updateSubmitButton] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const formRef = useRef(null);
  const { lang } = useParams();
  const Content = content[lang];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!isEmailValid(formData.email)) {
      return toast.error('Please enter a valid email address.', {
        duration: 5000,
      });
    }

    if (!isPhoneValid(formData.phone)) {
      return toast.error('Please enter a 10-digit phone number.', {
        duration: 5000,
      });
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return toast.error(data?.error || 'Email could not be sent.', {
          duration: 5000,
        });
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      updateSubmitButton(true);
      setLoading(false);
      formRef.current.reset();

      return toast.success(data?.message, { duration: 5000 });
    } catch (error) {
      setLoading(false);
      return toast.error('An error occurred while sending the email.', {
        duration: 5000,
      });
    } finally {
      formRef.current.reset();
      setTimeout(() => {
        updateSubmitButton(false);
      }, 5000);
    }
  };

  return (
    <>
      <ContactMetaRender lang={lang} />
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>
      <div className="pb-[5vw] max-[450px]:pt-[20vw] page-background">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center w-[44vw] h-[32vw] mr-[6vw] z-10 max-[450px]:bg-[#F4F4F4] max-[450px]:mr-0 max-[450px]:items-start max-[450px]:w-full max-[450px]:pl-[10vw]">
            <div className="w-[80%] text-left text-[black] max-[450px]:w-full">
              <h1
                className="text-[3.7vw]/[4vw] font-bold w-[
              70%] max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:mt-[-20vw]"
              >
                {Content.heroSection.title}
              </h1>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw] max-[450px]:hidden"></div>
                <div className="flex flex-col w-[80%] mt-[-1vw] space-y-2">
                  <p className="text-[1.1vw] max-[450px]:text-[2.7vw] font-semibold max-[450px]:mt-[3vw] space-y-3">
                    {Content.heroSection.subtitle} <br></br>
                    {/* {Content.heroSection.email}
                    <br></br>
                    {Content.heroSection.phone} */}
                  </p>
                  <p className="text-[1.1vw] max-[450px]:text-[2.7vw] font-semibold max-[450px]:mt-[3vw] space-y-3">
                    {Content.heroSection.email} <br></br>
                  </p>
                  <p className="text-[1.1vw] max-[450px]:text-[2.7vw] font-semibold max-[450px]:mt-[3vw] space-y-3">
                    {Content.heroSection.phone} <br></br>
                  </p>
                  <p className="mt-[2.5vw] text-[1vw] text-[#757575] max-[450px]:hidden">
                    {Content.heroSection.bannerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ContactPageHeroImage})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center] max-[450px]:w-[70vw] max-[450px]:h-[50vw] max-[450px]:flex max-[450px]:justify-end max-[450px]:items-end"
          >
            <div className="bg-[#2B00AC99] w-[35vw] h-[13vw] mb-[4vw] min-[450.1px]:hidden">
              <div className="flex flex-col p-[1.5vw] pl-[3vw] gap-y-[0.5vw] text-[2vw] text-left text-white min-[450.1px]:hidden">
                <p>CONSULTING</p>
                <p>DISCOVERY CALL</p>
                <p>RESOURCES</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[4vw] max-[450px]:mt-[8vw] max-[450px]:pb-[13vw]">
          <div className="flex justify-between w-[80%] items-center max-[450px]:flex max-[450px]:flex-col">
            <form
              onSubmit={submitHandler}
              ref={formRef}
              className="flex flex-col gap-y-[1.5vw] w-[44vw] rounded-xl max-[450px]:w-full max-[450px]:gap-y-[8vw]"
            >
              <div className="text-left">
                <div className="text-[4vw] font-bold max-[450px]:text-[7.5vw]">
                  {Content.formSection.formTitle}
                </div>
                <p className="text-[1.1vw] max-[450px]:text-[2.7vw] max-[450px]:font-semibold">
                  {Content.formSection.formDescription}
                </p>
              </div>
              <div className="flex justify-between max-[450px]:flex-wrap max-[450px]:gap-y-[8vw] mt-[-3vw]">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={Content.formSection.fields.name}
                  required
                  className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                ></input>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={Content.formSection.fields.email}
                  required
                  className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                ></input>
              </div>
              <div className="flex justify-between max-[450px]:flex-wrap max-[450px]:gap-y-[8vw]">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="number"
                  placeholder={Content.formSection.fields.phone}
                  required
                  className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                ></input>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={Content.formSection.fields.subject}
                  required
                  className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                ></input>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={Content.formSection.fields.message}
                rows="5"
                cols="10"
                className="px-2 bg-[#F4F4F4]  border-b-[0.1vw] border-[#B8B8B8]  pt-[1vw] pb-[1vw] min-h-[10vh] resize-y max-h-28  text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black hover:placeholder-text:w-[3vw] max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[10vw] max-[450px]:mt-[3vw] sm:resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={Loading}
                className={
                  submitButton === false
                    ? 'border-[0.01vw] border-black transition-all ease-in-out duration-300 rounded-full flex items-center justify-center mt-[3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer hover:bg-[#2B00AC] hover:text-white max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[1vw]'
                    : 'border-black bg-[green] border-[0.1vw] transition-all duration-300 ease-in-out rounded-full flex items-center justify-center mt-[3vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[1vw]'
                }
              >
                {/* loading && submitButton=false ? spinner
                !loading && submitButtton ? tickmark */}
                {submitButton === false ? (
                  <div className="flex items-center justify-center gap-x-[0.3vw] max-[450px]:w-[20vw]">
                    {Loading ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-red-500"></span>
                    ) : (
                      <>
                        <p>{Content.formSection.submitButton.text}</p>{' '}
                        <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[4vw]" />
                      </>
                    )}
                  </div>
                ) : (
                  <ImCheckmark className="max-[450px]:text-[3vw]" />
                )}
              </button>
            </form>
            <div className="w-[26vw] h-fit bg-[#F4F4F4] shadow-[#F4F4F4]-50 rounded-xl p-[2.5vw] shadow-lg max-[450px]:shadow-none max-[450px]:flex max-[450px]:flex-wrap max-[450px]:w-full max-[450px]:p-0 max-[450px]:font-semibold">
              <div className="flex gap-x-[1vw] max-[450px]:w-[55%]">
                <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                  <FaPhoneVolume />
                </div>
                <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
                  <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
                    {Content.contactInfoSection.call.title}
                  </h2>
                  <p className="text-[1.1vw] max-[450px]:text-[2.5vw]">
                    {Content.contactInfoSection.call.phone}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-[1vw] mt-[2vw] max-[450px]:mt-0">
                <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5.5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                  <MdEmail />
                </div>
                <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
                  <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
                    {Content.contactInfoSection.email.title}
                  </h2>
                  <p className="text-[1.1vw] max-[450px]:text-[2.5vw]">
                    {Content.contactInfoSection.email.email}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-[1vw] mt-[2vw] mb-[2.7vw] max-[450px]:w-full max-[450px]:mt-[6vw]">
                <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                  <FaLocationDot />
                </div>
                <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
                  <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
                    {Content.contactInfoSection.location.title}
                  </h2>
                  <p className="text-[1.1vw] w-[15vw] max-[450px]:text-[2.5vw] max-[450px]:w-full">
                    {Content.contactInfoSection.location.address}
                  </p>
                </div>
              </div>
              <div className="text-left max-[450px]:w-full">
                <h1 className="text-[1.4vw] text-[#2B00AC] font-bold max-[450px]:text-[4vw] max-[450px]:mt-[5vw]">
                  {Content.followus}
                </h1>
                <div className="flex justify-center gap-x-[1.5vw] mt-[2vw] max-[450px]:justify-between max-[450px]:mt-[4vw]">
                  <a
                    href="https://www.facebook.com/WouessiD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white  max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                      <div className="hover:scale-150 transition-transform duration-300">
                        <FaFacebook className="text-[1.6vw] max-[450px]:text-[4.5vw]" />{' '}
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://x.com/WouessiD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white  max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                      <div className="hover:scale-150 transition-transform duration-300">
                        <FaXTwitter className="text-[1.6vw] max-[450px]:text-[4.5vw]" />
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wouessid/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white  max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                      <div className="hover:scale-150 transition-transform duration-300">
                        <FaLinkedin className="text-[1.6vw] max-[450px]:text-[4.5vw]" />
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/wouessidigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white  max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                      <div className="hover:scale-150 transition-transform duration-300">
                        <FaInstagram className="text-[1.6vw] max-[450px]:text-[4.5vw]" />
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC5fsK-v4WpJOR_tp-ZLBz4A?app=desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[3.5vw] h-[3.5vw] bg-[#2B00AC] rounded-full flex justify-center items-center text-[2vw] text-white  max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
                      <div className="hover:scale-150 transition-transform duration-300">
                        <FaYoutube className="text-[1.6vw] max-[450px]:text-[4.5vw]" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterRegister lang={lang} />
      </div>
    </>
  );
}

export default ContactUs;
