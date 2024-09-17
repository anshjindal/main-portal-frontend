import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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

// import { LanguageContext, LanguageProvider } from "./components/Utils/languageContext";

function App() {
  return (
    <div className={`text-center bg-[#F4F4F4]`}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogpost" element={<BlogPost />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
          <Route path="/CopyrightPolicy" element={<CopyrightPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
// <LanguageProvider><App/></LanguageProvider>
export default App;
