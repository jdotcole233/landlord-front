import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Header from "./components/Navigation/header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import About from "./components/About/About";
import MobileMenu from "./components/Navigation/MobileMenu";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="flex-col  w-full">
        <Header setShowLogin={setShowLogin} setShowMobileMenu={setShowMobileMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {
          showLogin && <Login setShowLogin={setShowLogin} />
        }
        {
          showMobileMenu && <MobileMenu setShowLogin={setShowLogin} setShowMobileMenu={setShowMobileMenu} />
        }
      </div>
    </>
  );
}

export default App;
