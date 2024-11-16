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
import Error from "./pages/Error";
import NavbarMobile from "./components/Layout/NavbarMobile";
import Admin from "./pages/Admin";

import { useUser } from "@clerk/clerk-react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Register from "./components/SignUp/SignUp";

const Layout = ({ children }) => {

  return (
    <div className={`text-center bg-[#F4F4F4]`}>
      <Navbar />
      <NavbarMobile  />
      {children}
      <Footer />
    </div>
  );
};

function App() {

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect default root path to /en */}
          <Route path="/" element={<Navigate to="/en/" />} />

          {/* Catch invalid routes without language and show error page */}
          <Route path="/*" element={<Layout><Error /></Layout>} />

          {/* All routes with language parameter */}
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/admin" element={<Layout> {isSignedIn ? <Admin /> : <Login />}  </Layout>} />
          <Route path="/:lang/admin/signup" element={<Layout><Register/></Layout>} />
          <Route path="/:lang/:slug" element={<Layout><BlogPost /></Layout>} />
          <Route path="/:lang/AboutUs" element={<Layout><AboutUs /></Layout>} />
          <Route path="/:lang/Services" element={<Layout><Services /></Layout>} />
          <Route path="/:lang/Products" element={<Layout><Products /></Layout>} />
          <Route path="/:lang/Portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/:lang/ContactUs" element={<Layout><ContactUs /></Layout>} />
          <Route path="/:lang/Careers" element={<Layout><Careers /></Layout>} />
          <Route path="/:lang/Blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/:lang/BlogPost" element={<Layout><BlogPost /></Layout>} />
          <Route path="/:lang/TermsCondition" element={<Layout><TermsCondition /></Layout>} />
          <Route path="/:lang/PrivacyPolicy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/:lang/CookiePolicy" element={<Layout><CookiePolicy /></Layout>} />
          <Route path="/:lang/CopyrightPolicy" element={<Layout><CopyrightPolicy /></Layout>} />

          {/* Catch invalid routes with language and show error page */}
          <Route path="/:lang/*" element={<Layout><Error /></Layout>} />

          {/* Dedicated error page route */}
          <Route path="/:lang/Error" element={<Layout><Error /></Layout>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
