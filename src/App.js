import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Contact from "./components/contact/contact";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex-col  w-full overflow-scroll">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
