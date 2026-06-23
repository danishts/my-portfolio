// import React, { useState, useEffect } from "react";
// import ima from "../assets/ima.png";
// import img from "../assets/img.png";
// import vect from "../assets/Vect.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("about");

//   const navItems = ["about", "skills", "portfolio", "contact"];

//   // 🔥 AUTO ACTIVE ON SCROLL
//   useEffect(() => {
//     const sections = navItems;

//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 200;

//       sections.forEach((section) => {
//         const el = document.getElementById(section);

//         if (
//           el &&
//           scrollPos >= el.offsetTop &&
//           scrollPos < el.offsetTop + el.offsetHeight
//         ) {
//           setActive(section);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     handleScroll(); // initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔥 SMOOTH SCROLL CLICK
//   const scrollToSection = (id) => {
//     setOpen(false);

//     const el = document.getElementById(id);

//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const linkStyle = (name) =>
//     `px-4 py-2 rounded-full transition-all duration-300 font-bold text-[17px] ${
//       active === name ? "bg-white text-black" : "text-white hover:bg-white/10"
//     }`;

//   return (
//     <div className="flex min-h-screen bg-black overflow-hidden">
//       {/* ================= LEFT DESKTOP ================= */}
//       <div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         <img src={Group} alt="" className="w-[57px] h-[50px] mt-11 ml-20" />

//         <h1 className="font-bold text-[40px] text-black mt-36 ml-20">
//           Hi, I am
//         </h1>

//         <h2 className="font-bold text-[80px] text-black mt-6 ml-20">
//           Tomasz Gajda
//         </h2>

//         <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
//           Front-end Developer / UI Designer
//         </p>

//         <div className="flex gap-4 ml-20 mt-20 ">
//           <a href="#">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaGithub />
//             </div>
//           </a>

//           <a href="#">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaLinkedin />
//             </div>
//           </a>

//           <a href="#">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaEnvelope />
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* ================= RIGHT SIDE ================= */}
//       <div className="w-full lg:w-[45%] relative h-screen bg-black">
//         {/* MOBILE NAVBAR */}
//         <div className="lg:hidden flex justify-between items-center px-6 py-4 text-white absolute top-0 left-0 w-full z-20">
//           <img src={vect} alt="logo" className="w-10" />

//           <button onClick={() => setOpen(!open)} className="text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="lg:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700 flex flex-col gap-5 px-6 py-6 text-white z-20">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-left font-bold"
//               >
//                 {item.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* DESKTOP NAVBAR */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-10 items-center z-20">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={linkStyle(item)}
//             >
//               {item.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* DESKTOP IMAGE */}
//         <div className="hidden lg:block absolute inset-0">
//           <img
//             src={ima}
//             alt="Profile"
//             className="absolute w-[550px] bottom-0 left-0 object-contain"
//           />

//           <p className="absolute bottom-0 right-96 w-[136px] text-[15px] text-justify ">
//             this is not my photo
//             <br />
//             but I dearly hope to
//             <br />
//             get one just like this
//           </p>
//         </div>

//         {/* MOBILE VIEW */}
//         <div className="lg:hidden relative w-full h-screen">
//           <img
//             src={img}
//             alt="Profile"
//             className="absolute left-7 mt-11 w-full h-full object-cover"
//           />

//           <img
//             src={Ctriangle}
//             alt=""
//             className="absolute bottom-0 mb-6 left-0 w-full z-0"
//           />

//           <div className="absolute inset-0 flex mb-11 items-end p-6 z-10">
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>
//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 items-end">
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaGithub />
//               </div>
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaLinkedin />
//               </div>
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaEnvelope />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// //animation
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// import ima from "../assets/ima.png";
// import img from "../assets/img.png";
// import vect from "../assets/Vect.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("about");

//   const navItems = ["about", "skills", "portfolio", "contact"];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 200;

//       navItems.forEach((section) => {
//         const el = document.getElementById(section);
//         if (
//           el &&
//           scrollPos >= el.offsetTop &&
//           scrollPos < el.offsetTop + el.offsetHeight
//         ) {
//           setActive(section);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     setOpen(false);
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const linkStyle = (name) =>
//     `px-4 py-2 rounded-full transition-all duration-300 font-bold text-[17px] ${
//       active === name ? "bg-white text-black" : "text-white hover:bg-white/10"
//     }`;

//   return (
//     <motion.div
//       className="flex min-h-screen bg-black overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* ================= LEFT ================= */}
//       <motion.div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <motion.img
//           src={Group}
//           className="w-[57px] h-[50px] mt-11 ml-20"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2 }}
//         />

//         <motion.h1
//           className="font-bold text-[40px] text-black mt-36 ml-20"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Hi, I am
//         </motion.h1>

//         <motion.h2
//           className="font-bold text-[80px] text-black mt-6 ml-20"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Tomasz Gajda
//         </motion.h2>

//         <motion.p
//           className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           Front-end Developer / UI Designer
//         </motion.p>
//         <motion.div
//           className="flex gap-4 ml-20 mt-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, y: -3 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
//           >
//             <FaGithub />
//           </motion.a>

//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, y: -3 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
//           >
//             <FaLinkedin />
//           </motion.a>

//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, y: -3 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
//           >
//             <FaEnvelope />
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* ================= RIGHT ================= */}
//       <motion.div
//         className="w-full lg:w-[45%] relative h-screen bg-black"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         {/* MOBILE NAVBAR */}
//         <div className="lg:hidden flex justify-between items-center px-6 py-4 text-white absolute top-0 left-0 w-full z-20">
//           <img src={vect} alt="logo" className="w-10" />

//           <button onClick={() => setOpen(!open)} className="text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <motion.div
//             className="lg:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700 flex flex-col gap-5 px-6 py-6 text-white z-20"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//           >
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-left font-bold"
//               >
//                 {item.toUpperCase()}
//               </button>
//             ))}
//           </motion.div>
//         )}

//         {/* DESKTOP NAVBAR */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-10 items-center z-20">
//           {navItems.map((item) => (
//             <motion.button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={linkStyle(item)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.toUpperCase()}
//             </motion.button>
//           ))}
//         </div>

//         {/* DESKTOP IMAGE FLOAT */}
//         <motion.div
//           className="hidden lg:block absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <motion.img
//             src={ima}
//             className="absolute w-[550px] bottom-0 left-0 object-contain"
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//           />

//           <motion.p
//             className="absolute bottom-0 right-96 w-[136px] text-[15px] text-justify"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             this is not my photo
//             <br />
//             but I dearly hope to
//             <br />
//             get one just like this
//           </motion.p>
//         </motion.div>

//         {/* MOBILE VIEW */}
//         <motion.div className="lg:hidden relative w-full h-screen">
//           <motion.img
//             src={img}
//             className="absolute left-7 mt-11 w-full h-full object-cover"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//           />

//           <img
//             src={Ctriangle}
//             className="absolute bottom-0 left-0 w-full z-0"
//           />

//           <motion.div
//             className="absolute inset-0 flex mb-11 items-end p-6 z-10"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>
//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 items-end">
//               <FaGithub />
//               <FaLinkedin />
//               <FaEnvelope />
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Hero;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ima from "../assets/download.png";
import img from "../assets/img.png";
import vect from "../assets/Vect.png";
import Group from "../assets/Group.png";
import Ctriangle from "../assets/ctangle.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const navItems = ["about", "skills", "portfolio", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      navItems.forEach((section) => {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (name) =>
    `px-4 py-2 rounded-full transition-all duration-300 font-bold text-[17px] ${
      active === name ? "bg-white text-black" : "text-white hover:bg-white/10"
    }`;

  return (
    <motion.div
      className="flex min-h-screen bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ================= LEFT ================= */}
      <motion.div
        className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
      >
        {/* ICON */}
        <motion.img
          src={Group}
          className="w-[57px] h-[50px] mt-11 ml-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* HI I AM (DROP FROM TOP) */}
        <motion.h1
          className="font-bold text-[40px] text-black mt-36 ml-20"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I am
        </motion.h1>

        {/* NAME (FROM LEFT SLIDE) */}
        <motion.h2
          className="font-bold text-[80px] text-black mt-6 ml-20"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Muhammad Danish
        </motion.h2>

        {/* DESCRIPTION (DROP) */}
        <motion.p
          className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Front-end Developer / UI Designer
        </motion.p>

        {/* ICONS */}
        <motion.div
          className="flex gap-4 ml-20 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/danishts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/danish-saddique-5a3a12232/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
          >
            <FaLinkedin />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="mailto:danishsaddique519@gmail.com"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ================= RIGHT ================= */}
      <motion.div
        className="w-full lg:w-[45%] relative h-screen bg-black"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* MOBILE NAVBAR */}
        <div className="lg:hidden flex justify-between items-center px-6 py-4 text-white absolute top-0 left-0 w-full z-20">
          <img src={vect} alt="logo" className="w-10" />

          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            className="lg:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700 flex flex-col gap-5 px-6 py-6 text-white z-20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left font-bold"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex absolute top-20 left-16 gap-10 items-center z-20">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className={linkStyle(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* FLOAT IMAGE */}
        <motion.div className="hidden lg:block absolute inset-0">
          <motion.img
            src={ima}
            className="absolute w-[550px] bottom-0 left-0 object-contain"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          <motion.p
            className="absolute bottom-0 right-96 w-[136px] mb-4 text-[15px] text-justify"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            this is not my photo
            <br />
            but I dearly hope to
            <br />
            get one just like this
          </motion.p>
        </motion.div>

        {/* MOBILE */}
        <motion.div className="lg:hidden relative w-full h-screen">
          <motion.img
            src={img}
            className="absolute left-7 mt-11 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <img
            src={Ctriangle}
            className="absolute bottom-0 left-0 w-full z-0"
          />

          <motion.div
            className="absolute inset-0 flex mb-11 items-end p-6 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex-1 text-white">
              <h1 className="text-3xl font-bold">Hi, I am</h1>
              <h2 className="text-5xl font-bold">Tomasz</h2>
              <p className="text-gray-300 mt-2">
                Front-end Developer / UI Designer
              </p>
            </div>

            <div className="flex flex-col gap-3 items-end">
              {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;