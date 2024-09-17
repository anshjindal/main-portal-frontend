import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/Wouessi_Logo_horizontal_tag.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../../styles/global.css";
import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

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

function NavbarMobile() {
  const [navMenu, updateNavMenu] = useState(false); //Tray
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [hamburgerMenu, openHamburgerMenu] = useState(false);

  const handleMenuToggle = () => {
    openHamburgerMenu((prev) => !prev); // Toggle hamburger menu state
    updateNavMenu((prev) => !prev); // Toggle navigation menu state
  };

  useEffect(() => {
    // Apply or remove no-scroll class based on navMenu state
    if (navMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Reset menu states on window resize
    const handleResize = () => {
      updateNavMenu(false);
      setLanguageDropdown(false);
      openHamburgerMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove('no-scroll'); // Clean up class on component unmount
    };
  }, [navMenu]);

  return (
    <>
      <div className="flex justify-center pl-[1vw] pr-[1vw] navbar min-[450px]:hidden">
        <div className="flex items-center justify-center h-[8vw] border-b-[0.001vw] text-[#2B00AC] border-[#B8B8B8] max-[450px]:w-[80%] max-[450px]:border-none max-[450px]:pt-[13vw] max-[450px]:pb-[9vw]">
          <div className="flex items-center gap-x-[10vw] w-[95%]">
            <Link to="/" className="w-[20%] max-[450px]:w-[50%]">
              <img alt="" src={logo} className="cursor-pointer"></img>
            </Link>
          </div>

          {hamburgerMenu ? (
            <RxCross1
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          )}
        </div>
      </div>
      <motion.div
        className={`fixed navbar-slider top-0 left-0 w-full bg-[#F4F4F4] z-100 overflow-hidden ${navMenu ? "h-screen" : "h-0"}`}
        initial={{ height: 0 }}
        animate={{ height: navMenu ? "100vh" : 0 }}
        transition={{ duration: 0.5 }}
      >
        {navMenu && (
          <motion.div
            className="pt-[30vw] flex justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="w-full h-full space-y-[10vw] pb-[25vw]"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link to="/ContactUs" onClick={handleMenuToggle}>
                  <div className="w-full flex justify-center">
                    <div
                      className="w-[40vw] h-[12vw] gap-x-[1vw] rounded-full border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[6vw] font-semibold flex items-center justify-center"
                    >
                      Let's Talk
                      <CgArrowLongUp className="ml-[1vw] text-[6vw] rotate-[90deg]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
              {[{ name: "Home", route: "/" }, { name: "About", route: "/AboutUs" }, { name: "Services", route: "/Services" }, { name: "Products", route: "/Products" }, { name: "Portfolio", route: "/Portfolio" }].map((text, index) => (
                <div onClick={handleMenuToggle} key={index}>
                  <motion.h1
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
                    onClick={() => {
                      setLanguageDropdown(!languageDropdown);
                    }}
                    className={`${languageDropdown ? "text-[#FF9900]" : ""} py-[2vw] gap-x-[1vw] flex items-center cursor-pointer hover:text-[#FF9900] text-[#2B00AC] text-[5vw] font-bold`}
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
                  {languageDropdown && (
                    <div className="absolute pl-[4vw]">
                      <div
                        className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                        onClick={() => {
                          setLanguage("EN");
                          setLanguageDropdown(!languageDropdown);
                          handleMenuToggle(); // Ensure menu closes when selecting language
                        }}
                      >
                        <IoIosArrowForward className="text-[4vw]" /> EN
                      </div>
                      <div
                        className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                        onClick={() => {
                          setLanguage("FR");
                          setLanguageDropdown(!languageDropdown);
                          handleMenuToggle(); // Ensure menu closes when selecting language
                        }}
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
      </motion.div>
    </>
  );
}

export default NavbarMobile;
