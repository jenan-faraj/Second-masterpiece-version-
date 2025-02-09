import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F9F3F1]">
      <nav className="navbar flex justify-between items-center p-3">
        <div className="container flex justify-between items-center mx-auto">
          <Link to="/" className="text-[#B58152] text-[30px] font-bold">
            GlamBook
          </Link>
          <button
            className="text-[#B58152] text-[25px] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="navbar-nav text-[17px] lg:text-[17px] xl:text-[23px]  flex flex-col lg:flex-row lg:items-center w-full text-[#B58152]">
            <li className="nav-item p-2">
              <Link to="/partnerSignIn" className="hover:bg-[#f5e6e1] p-2 rounded">
                Join us today
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/" className="hover:bg-[#f5e6e1] p-2 rounded">
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/categories" className="hover:bg-[#f5e6e1] p-2 rounded">
                Categories
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/aboutUs" className="hover:bg-[#f5e6e1] p-2 rounded">
                About us
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/contactUs" className="hover:bg-[#f5e6e1] p-2 rounded">
                Contact us
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/userProfile" className="flex items-center gap-2 hover:bg-[#f5e6e1] p-2 rounded">
                <FaUser /> Jenan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
