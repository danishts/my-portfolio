import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import vect from "../assets/Vect.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 AUTO-DETECT ACTIVE SECTION ON SCROLL
  useEffect(() => {
    const handleScrollActive = () => {
      const navItems = ["about", "skills", "portfolio", "contact"];
      const reference = window.innerHeight * 0.25;
      let minDist = Infinity;
      let nearestId = active;

      for (const id of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - reference);
        if (dist < minDist) {
          minDist = dist;
          nearestId = id;
        }
      }

      if (nearestId !== active) {
        setActive(nearestId);
      }
    };

    handleScrollActive();
    window.addEventListener("scroll", handleScrollActive);
    window.addEventListener("resize", handleScrollActive);
    
    return () => {
      window.removeEventListener("scroll", handleScrollActive);
      window.removeEventListener("resize", handleScrollActive);
    };
  }, [active]);

  const linkStyle = (name) =>
    `px-4 py-2 rounded-full transition ${
      active === name ? "bg-white text-black" : "text-white"
    }`;

  // 🔥 CLICK HANDLER (SMOOTH SCROLL)
  const handleClick = (id) => {
    setActive(id);
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full bg-black text-white z-50 transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <img src={vect} alt="logo" className="w-10" />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-6 font-montserrat text-[15px] font-bold">
          <a
            href="#about"
            className={linkStyle("about")}
            onClick={() => handleClick("about")}
          >
            ABOUT
          </a>

          <a
            href="#skills"
            className={linkStyle("skills")}
            onClick={() => handleClick("skills")}
          >
            SKILLS
          </a>

          <a
            href="#portfolio"
            className={linkStyle("portfolio")}
            onClick={() => handleClick("portfolio")}
          >
            PORTFOLIO
          </a>

          <a
            href="#contact"
            className={linkStyle("contact")}
            onClick={() => handleClick("contact")}
          >
            CONTACT
          </a>
        </div>

        {/* MOBILE ICON */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex flex-col gap-6 px-6 py-6 bg-black border-t border-gray-700 font-montserrat font-bold">
          <button onClick={() => handleClick("about")}>ABOUT</button>
          <button onClick={() => handleClick("skills")}>SKILLS</button>
          <button onClick={() => handleClick("portfolio")}>PORTFOLIO</button>
          <button onClick={() => handleClick("contact")}>CONTACT</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;