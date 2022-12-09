import { useState } from "react";
import Home from "./components/home";
import Contact from "./components/contact/Contact";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import About from "./components/about/About";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="flex-col  w-full">
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {
          showLogin && <Login setShowLogin={setShowLogin} />
        }
      </div>
    </>
  );
}

export default App;
