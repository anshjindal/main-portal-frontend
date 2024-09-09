import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScollToTop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BsArrowRight } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://alpha.wouessi.ca/admin/graphql", // link to the backend server
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children by 0.2 seconds
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
  };

  useEffect(() => {
    // Function to set the state to false on screen resize
    const handleResize = () => {
      updateNavMenu(false);
    };

    // Add the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="text-center bg-[#F4F4F4] h-[120%] min-[350px]:pb-[20vw] min-[380px]:pb-[35vw]">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar onClick={getData} onMenuItemClick={navMenu} />
          <div
            className={`h-0 transition-all duration-700 ease-in-out ${
              navMenu && "h-screen mt-[-22vw]"
            }`}>
            {navMenu && (
              <motion.div
                className="pt-[30vw] flex justify-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}>
                <motion.div
                  className="w-fit space-y-[10vw] transition-all duration-600 ease-in-out"
                  variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <Link to="frontend-react-wouessi-website-v2/ContactUs">
                      <div
                        onClick={() => updateNavMenu(false)}
                        className="w-[40vw] h-[12vw] gap-x-[1vw] rounded-full border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[6vw] font-semibold flex items-center justify-center">
                        Let's Talk
                        <CgArrowLongUp className="ml-[1vw] text-[6vw] rotate-[90deg]" />
                      </div>
                    </Link>
                  </motion.div>
                  {[
                    {
                      name: "Home",
                      route: "frontend-react-wouessi-website-v2/",
                    },
                    {
                      name: "About",
                      route: "frontend-react-wouessi-website-v2/AboutUs",
                    },
                    {
                      name: "Services",
                      route: "frontend-react-wouessi-website-v2/Services",
                    },
                    {
                      name: "Products",
                      route: "frontend-react-wouessi-website-v2/Products",
                    },
                    {
                      name: "Portfolio",
                      route: "frontend-react-wouessi-website-v2/Portfolio",
                    },
                  ].map((text, index) => (
                    <div onClick={() => updateNavMenu(false)} className="" key={index}>
                      <motion.h1
                        onClick={getData}
                        className="text-[6vw] underline font-semibold"
                        variants={itemVariants}>
                        <Link to={`${text.route}`}>
                          <div>{text.name}</div>
                        </Link>
                      </motion.h1>
                    </div>
                  ))}
                  <motion.div
                    variants={itemVariants}
                    onMouseEnter={() => setLanguageDropdown(true)}
                    onMouseLeave={() => setLanguageDropdown(false)}
                    className="flex justify-center">
                    <div className="w-fit">
                      <div className="py-[2vw] hover:text-[#FF9900] gap-x-[2vw] flex items-center">
                        <p
                          className={`${
                            languageDropdown
                              ? "rotate-[90deg] transition-all duration-300 font-bold"
                              : "font-bold"
                          }`}>
                          <FaGreaterThan className="text-[#2B00AC] text-[4vw]" />
                        </p>
                        <p className="text-[#2B00AC] text-[5vw] font-bold cursor-pointer">
                          {language}
                        </p>
                      </div>
                      {languageDropdown ? (
                        <div className="absolute ml-[4vw]">
                          <p
                            className="text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                            onClick={() => setLanguage("EN")}>
                            - EN
                          </p>
                          <p
                            className="text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-semibold cursor-pointer"
                            onClick={() => setLanguage("FR")}>
                            - FR
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </div>
          <div className={navMenu && "hidden"}>
            <Routes>
              <Route
                path="frontend-react-wouessi-website-v2/"
                element={<Home />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/AboutUs"
                element={<AboutUs />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Services"
                element={<Services />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Products"
                element={<Products />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Portfolio"
                element={<Portfolio />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/ContactUs"
                element={<ContactUs />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Insights"
                element={<Insights />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Careers"
                element={<Careers />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Blog"
                element={<Blog />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/Blogpost"
                element={<BlogPost />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/TermsCondition"
                element={<TermsCondition />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/PrivacyPolicy"
                element={<PrivacyPolicy />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/CookiePolicy"
                element={<CookiePolicy />}></Route>
              <Route
                path="frontend-react-wouessi-website-v2/CopyrightPolicy"
                element={<CopyrightPolicy />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
