import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App bg-[#F4F4F4]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
        </Routes>
        <Routes>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
        <Routes>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
