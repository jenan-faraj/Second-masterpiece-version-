// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Pages/Navbar";
import Footer from "../src/Pages/Footer";
// import Home from "../src/Pages/Home";
// import Categories from "../src/Pages/Categories";
// import PartnerSignIn from "./pages/PartnerSignIn";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import UserProfile from "./pages/UserProfile";
// import UserProfileEdit from "./Pages/UserProfileEdit";
// import PartnerSignIn from "./Pages/PartnerSignIn";
// import PartnerProfile from "./Pages/PartnerProfile";
// import LoginForm from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
import AppointmentBooking from "./Pages/BookPage";

const App = () => {
  return (
    <>
       <Navbar />
       {/* <Categories /> */}
       {/* <AboutUs /> */}
       {/* <ContactUs /> */}
       {/* <UserProfile /> */}
       {/* <UserProfileEdit /> */}
       {/* <PartnerSignIn /> */}
       {/* <PartnerProfile /> */}
       {/* <LoginForm /> */}
       {/* <SignUp /> */}
       <AppointmentBooking />
     {/* <Router>
       <Routes>
         <Route path="/" element={<Home />} /> */}
         {/* <Route path="/partnerSignIn" element={<PartnerSignIn />} /> */}
         {/* <Route path="/categories" element={<Categories />} /> */}
         {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
         {/* <Route path="/contactUs" element={<ContactUs />} /> */}
         {/* <Route path="/userProfile" element={<UserProfile />} /> */}
       {/* </Routes>
     </Router> */}
     <Footer />
    </>
  );
};

export default App;
