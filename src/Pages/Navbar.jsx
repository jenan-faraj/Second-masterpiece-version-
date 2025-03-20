import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "Join us today", path: "/partnerSignIn" },
    { title: "Home", path: "/" },
    { title: "Categories", path: "/categories" },
    { title: "About us", path: "/aboutUs" },
    { title: "Contact us", path: "/contactUs" },
  ];

  return (
    <header className="w-full bg-[#F9F3F1] shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-[#B58152] text-2xl md:text-3xl font-bold"
          >
            GlamBook
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex items-center text-[20px] space-x-2 text-[#B58152] font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="px-3 py-2 rounded hover:bg-[#f5e6e1] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/userProfile"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#f5e6e1] transition-colors"
                >
                  <FaUser /> Jenan
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#B58152] text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#F9F3F1] border-t border-[#e6d8d3]">
            <ul className="py-2 text-[#B58152]">
              {navLinks.map((link) => (
                <li key={link.path} className="border-b border-[#e6d8d3]">
                  <Link
                    to={link.path}
                    className="block py-3 px-4 hover:bg-[#f5e6e1] transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="py-3 px-4">
                <Link
                  to="/userProfile"
                  className="flex items-center gap-2 hover:bg-[#f5e6e1] p-2 rounded transition-colors"
                  onClick={toggleMenu}
                >
                  <FaUser /> Jenan
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
