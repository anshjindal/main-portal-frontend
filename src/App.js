import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import ScrollToTop from "./components/Utils/ScollToTop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import ErrorPage from "./pages/Error";
import { IoIosArrowForward } from "react-icons/io";


// import { LanguageContext, LanguageProvider } from "./components/Utils/languageContext";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function App() {
  const [navMenu, updateNavMenu] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");

  const getData = (data) => {
    updateNavMenu(data);
    setLanguageDropdown(!data);
  };

  useEffect(() => {
    const handleResize = () => {
      updateNavMenu(false);
      setLanguageDropdown(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`text-center bg-[#F4F4F4]`}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar onClick={getData} onMenuItemClick={navMenu} />
        <div className={`h-0 ${navMenu && "h-screen mt-[-22vw]"}`}>
          {navMenu && (
            <motion.div
              className="pt-[30vw] flex justify-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="w-full h-full space-y-[10vw] bg-[#F4F4F4] pb-[25vw]"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Link to="/ContactUs">
                    <div className="w-full flex justify-center">
                      <div
                        onClick={() => updateNavMenu(false)}
                        className="w-[40vw] h-[12vw] gap-x-[1vw] rounded-full border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[6vw] font-semibold flex items-center justify-center"
                      >
                        Let's Talk
                        <CgArrowLongUp className="ml-[1vw] text-[6vw] rotate-[90deg]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
                {[
                  { name: "Home", route: "/" },
                  {
                    name: "About",
                    route: "/AboutUs",
                  },
                  {
                    name: "Services",
                    route: "/Services",
                  },
                  {
                    name: "Products",
                    route: "/Products",
                  },
                  {
                    name: "Portfolio",
                    route: "/Portfolio",
                  },
                ].map((text, index) => (
                  <div
                    onClick={() => updateNavMenu(false)}
                    className=""
                    key={index}
                  >
                    <motion.h1
                      onClick={getData}
                      className="text-[6vw] hover:text-[#FF9900] underline font-semibold"
                      variants={itemVariants}
                    >
                      <Link to={`${text.route}`}>
                        <div>{text.name}</div>
                      </Link>
                    </motion.h1>
                  </div>
                ))}
                <motion.div variants={itemVariants} className="flex justify-center">
                  <div className="w-fit">
                    <div
                      onClick={() => setLanguageDropdown(!languageDropdown)}
                      className={`${
                        languageDropdown ? "text-[#FF9900]" : ""
                      } py-[2vw] gap-x-[1vw] flex items-center cursor-pointer hover:text-[#FF9900] text-[#2B00AC] text-[5vw] font-bold`}
                    >
                      <IoIosArrowForward
                        className={`${
                          languageDropdown
                            ? "rotate-[90deg] transition-all duration-300 font-bold"
                            : "font-bold transition-all duration-300"
                        }`}
                      />
                      <div className="transition-all duration-300">
                        {language}
                      </div>
                    </div>
                    {navMenu}
                    {languageDropdown && (
                      <div className="absolute pl-[4vw]">
                        <div
                          className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                          onClick={() => setLanguage("EN")}
                        >
                          <IoIosArrowForward className="text-[4vw]" /> EN
                        </div>
                        <div
                          className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                          onClick={() => setLanguage("FR")}
                        >
                          <IoIosArrowForward className="text-[4vw]" /> FR
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
        <div className={navMenu && "hidden"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
            <Route
              path="/Services"
              element={<Services />}
            />
            <Route
              path="/Products"
              element={<Products />}
            />
            <Route
              path="/Portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/ContactUs"
              element={<ContactUs />}
            />
            <Route
              path="/Careers"
              element={<Careers />}
            />
            <Route
              path="/Blogs"
              element={<Blogs />}
            />
            <Route
              path="/Blogpost"
              element={<BlogPost />}
            />
            <Route
              path="/TermsCondition"
              element={<TermsCondition />}
            />
            <Route
              path="/PrivacyPolicy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/CookiePolicy"
              element={<CookiePolicy />}
            />
            <Route
              path="/CopyrightPolicy"
              element={<CopyrightPolicy />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
// <LanguageProvider><App/></LanguageProvider> 
export default App;
