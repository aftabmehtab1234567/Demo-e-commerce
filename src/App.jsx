import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";

// Initialize Google Analytics
const TRACKING_ID = "GTM-PLWLGSBB"; // Replace with your Measurement ID
ReactGA.initialize(TRACKING_ID);

// Component to track page views
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Analytics /> {/* Track page views */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
