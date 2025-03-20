import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import PartnerSignIn from "./Pages/PartnerSignIn";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import UserProfile from "./Pages/UserProfile";
import UserProfileEdit from "./Pages/UserProfileEdit";
import PartnerProfile from "./Pages/PartnerProfile";
import LoginForm from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AppointmentBooking from "./Pages/BookPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnerSignIn" element={<PartnerSignIn />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/userProfileEdit" element={<UserProfileEdit />} />
        <Route path="/partnerProfile" element={<PartnerProfile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<AppointmentBooking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
