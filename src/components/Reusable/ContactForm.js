
import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import content from '../../content/ContactUs/ContactUs.json';
import { ImCheckmark } from 'react-icons/im';
import { CgArrowLongUp } from 'react-icons/cg';
import { useForm } from '../../Hooks/useForm';
export default function ContactForm() {
const [submitButton, updateSubmitButton] = useState(false);
  const [Loading, setLoading] = useState(false);
  const formDataDetails = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
  const { handleOnChange, formData, resetForm} = useForm(formDataDetails)
  const formRef = useRef(null);
  const { lang } = useParams();
  const Content = content[lang];

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
        position: 'top-center',
      });
    }

    if (!isPhoneValid(formData.phone)) {
      return toast.error('Please enter a 10-digit phone number.', {
        duration: 5000,
        position: 'top-center',
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
          position: 'top-center',
        });
      }
      resetForm(formDataDetails)

      updateSubmitButton(true);
      setLoading(false);
      formRef.current.reset();

      return toast.success(data?.message, { duration: 5000,position: 'top-center' });
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
                         onChange={handleOnChange}
                         placeholder={Content.formSection.fields.name}
                         required
                         className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                       ></input>
                       <input
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleOnChange}
                         placeholder={Content.formSection.fields.email}
                         required
                         className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                       ></input>
                     </div>
                     <div className="flex justify-between max-[450px]:flex-wrap max-[450px]:gap-y-[8vw]">
                       <input
                         name="phone"
                         value={formData.phone}
                         onChange={handleOnChange}
                         type="number"
                         placeholder={Content.formSection.fields.phone}
                         required
                         className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                       ></input>
                       <input
                         type="text"
                         name="subject"
                         value={formData.subject}
                         onChange={handleOnChange}
                         placeholder={Content.formSection.fields.subject}
                         required
                         className="px-2 bg-[#F4F4F4] h-[3.5vw] border-b-[0.1vw] border-[#B8B8B8] w-[48%] text-[1.1vw] placeholder:font-thin placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black max-[450px]:text-[3.5vw] max-[450px]:placeholder:font-semibold max-[450px]:w-full max-[450px]:border-b-[0.3vw] max-[450px]:h-[12vw]"
                       ></input>
                     </div>
                     <textarea
                       name="message"
                       value={formData.message}
                       onChange={handleOnChange}
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
    )
}