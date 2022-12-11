import { useState, useContext } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Header from "./components/Navigation/header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import About from "./components/About/About";
import MobileMenu from "./components/Navigation/MobileMenu";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/profile";
import ChangePassword from "./components/Dashboard/password";
import MyProperties from "./components/Dashboard/properties";
import Rooms from "./components/Dashboard/properties/Rooms/Rooms";
import Room from "./components/Dashboard/properties/Rooms/Room";
import Tenant from "./components/Dashboard/Tenant";
import ApartmentForm from "./components/Dashboard/properties/Apartment";
import RoomForm from "./components/Dashboard/properties/Rooms/RoomForm";
import TenantForm from "./components/Dashboard/Tenant/TenantForm";
import AppContext from "./components/Context/Context"
import MobileDashboardMenu from "./components/Dashboard/Navigation/MobileDashboardMenu";

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { mobileMenu } = useContext(AppContext);

  return (
    <>
      <div className="flex-col  w-full">
        <Header setShowLogin={setShowLogin} setShowMobileMenu={setShowMobileMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<ChangePassword />} />
          <Route path="/properties" element={<MyProperties />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room" element={<Room />} />
          <Route path="/tenants" element={<Tenant />} />
          <Route path="/addApartment" element={<ApartmentForm />} />
          <Route path="/addRoom" element={<RoomForm />} />
          <Route path="/addTenant" element={<TenantForm />} />
        </Routes>
        {
          showLogin && <Login setShowLogin={setShowLogin} />
        }
        {
          showMobileMenu && <MobileMenu setShowLogin={setShowLogin} setShowMobileMenu={setShowMobileMenu} />
        }
        {
          mobileMenu && <MobileDashboardMenu />
        }
      </div>
    </>
  );
}

export default App;
