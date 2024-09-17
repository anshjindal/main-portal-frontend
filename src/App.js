import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./components/Utils/languageContext";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
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
import NavbarMobile from "./components/Layout/NavbarMobile";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className={`text-center bg-[#F4F4F4]`}>
          <Navbar />
          <NavbarMobile />
          <Routes>
            <Route path="/" element={<Navigate to="/en" />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/AboutUs" element={<AboutUs />} />
            <Route path="/:lang/Services" element={<Services />} />
            <Route path="/:lang/Products" element={<Products />} />
            <Route path="/:lang/Portfolio" element={<Portfolio />} />
            <Route path="/:lang/ContactUs" element={<ContactUs />} />
            <Route path="/:lang/Careers" element={<Careers />} />
            <Route path="/:lang/Blogs" element={<Blogs />} />
            <Route path="/:lang/Blogpost" element={<BlogPost />} />
            <Route path="/:lang/TermsCondition" element={<TermsCondition />} />
            <Route path="/:lang/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/:lang/CookiePolicy" element={<CookiePolicy />} />
            <Route
              path="/:lang/CopyrightPolicy"
              element={<CopyrightPolicy />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
