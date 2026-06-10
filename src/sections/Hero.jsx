// import React from "react";
// import ima from "../assets/ima.png";
// import Group from "../assets/Group.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   return (
//     <div className="flex flex-col min-h-screen bg-black overflow-hidden">
//       {/* TOP HERO SECTION */}
//       <div className="flex flex-col lg:flex-row flex-1">
//         {/* LEFT SECTION */}
//         {/* <div
//           className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex  justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
//           style={{
//             clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//           }}
//         >
//           <img src={Group} alt="" className="w-[57.33px] h-[50px] mt-20 ml-20" />
//         </div> */}

//         <div
//           className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex flex-col justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
//           style={{
//             clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//           }}
//         >
//           {/* GROUP ICON */}
//           <img
//             src={Group}
//             alt=""
//             className="w-[57.33px] h-[50px] mt-20 ml-20"
//           />

//           {/* HI, I AM */}
//           <h1 className="font-raleway font-bold text-[40px] text-black mt-48 ml-20 leading-none">
//             Hi, I am
//           </h1>

//           {/* NAME */}
//           <h2 className="font-raleway font-bold text-[80px] text-black mt-11 ml-20 leading-none">
//             Tomasz Gajda
//           </h2>

//           {/* SUBTITLE */}
//           <p
//             className="font-raleway font-extrabold text-[25px] text-[#909090] mt-4 ml-20 leading-none mt-2"
//             style={{
//               width: "426px",
//               height: "40px",
//               fontFamily: "Raleway",
//             }}
//           >
//             Front-end Developer / UI Designer
//           </p>
//           <div className="flex gap-4 ml-20 mt-11">
//             {/* GITHUB */}
//             <a href="https://github.com" target="_blank">
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaGithub className="text-black text-xl" />
//               </div>
//             </a>

//             {/* LINKEDIN */}
//             <a href="https://linkedin.com" target="_blank">
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaLinkedin className="text-black text-xl" />
//               </div>
//             </a>

//             {/* EMAIL */}
//             <a href="mailto:test@gmail.com">
//               <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//                 <FaEnvelope className="text-black text-xl" />
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black relative">
//           <img
//             src={ima}
//             alt="Profile"
//             className="absolute w-[300px] lg:w-[550px] h-auto object-contain left-0 bottom-0"
//           />
//         </div> */}
//         <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black relative">
//           {/* NAVIGATION OVER IMAGE */}
//           <div
//             className="hidden lg:flex absolute top-20 w-full justify-start left-16 gap-8 text-white z-10"
//             style={{
//               fontFamily: "Montserrat",
//               fontWeight: 700,
//               fontSize: "15px",
//               lineHeight: "100%",
//             }}
//           >
//             <a href="#about">ABOUT</a>
//             <a href="#skills">SKILLS</a>
//             <a href="#portfolio">PORTFOLIO</a>
//             <a href="#contact">CONTACT</a>
//           </div>

//           {/* IMAGE (NO CHANGE) */}
//           <img
//             src={ima}
//             alt="Profile"
//             className="absolute w-[300px] lg:w-[550px] h-auto object-contain left-0 bottom-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Hero;
// import React from "react";
// import ima from "../assets/ima.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   return (
//     <div className="flex flex-col min-h-screen bg-black overflow-hidden">
//       {/* ================= LEFT SECTION (UNCHANGED DESKTOP) ================= */}
//       <div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         <img src={Group} alt="" className="w-[57px] h-[50px] mt-20 ml-20" />

//         <h1 className="font-bold text-[40px] text-black mt-48 ml-20 leading-none">
//           Hi, I am
//         </h1>

//         <h2 className="font-bold text-[80px] text-black mt-11 ml-20 leading-none">
//           Tomasz Gajda
//         </h2>

//         <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
//           Front-end Developer / UI Designer
//         </p>

//         <div className="flex gap-4 ml-20 mt-11">
//           <FaGithub />
//           <FaLinkedin />
//           <FaEnvelope />
//         </div>
//       </div>

//       {/* ================= RIGHT SECTION ================= */}
//       <div className="w-full lg:w-[45%] relative h-screen bg-black">
//         {/* DESKTOP NAVBAR (UNCHANGED) */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-8 text-white z-10 font-bold text-[15px]">
//           <a href="#about">ABOUT</a>
//           <a href="#skills">SKILLS</a>
//           <a href="#portfolio">PORTFOLIO</a>
//           <a href="#contact">CONTACT</a>
//         </div>

//         {/* ================= DESKTOP IMAGE (UNCHANGED) ================= */}
//         <img
//           src={ima}
//           alt="Profile"
//           className="hidden lg:block absolute w-[550px] bottom-0 left-0 object-contain"
//         />

//         {/* ================= MOBILE ONLY ================= */}
//         <div className="lg:hidden relative w-full h-screen">
//           {/* FULL IMAGE */}
//           <img
//             src={ima}
//             alt="Profile"
//             className="absolute left-24 bottom-0 w-[120%] h-[900px] object-contain"
//           />

//           {/* CTANGLE BACKGROUND */}
//           <img
//             src={Ctriangle}
//             alt=""
//             className="absolute bottom-0 left-0 w-full z-0"
//           />

//           {/* CONTENT */}
//           <div className="absolute inset-0 flex items-end p-6 z-10">
//             {/* LEFT TEXT */}
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>

//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             {/* RIGHT ICONS COLUMN */}
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

// //danish
// import React from "react";
// import ima from "../assets/ima.png";
// import img from "../assets/img.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   return (
//     <div className="flex flex-col min-h-screen bg-black overflow-hidden">
//       {/* ================= LEFT SECTION (DESKTOP ONLY - SAME) ================= */}
//       <div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         <img src={Group} alt="" className="w-[57px] h-[50px] mt-20 ml-20" />

//         <h1 className="font-bold text-[40px] text-black mt-48 ml-20 leading-none">
//           Hi, I am
//         </h1>

//         <h2 className="font-bold text-[80px] text-black mt-11 ml-20 leading-none">
//           Tomasz Gajda
//         </h2>

//         <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
//           Front-end Developer / UI Designer
//         </p>

//         <div className="flex gap-4 ml-20 mt-11">
//           <FaGithub />
//           <FaLinkedin />
//           <FaEnvelope />
//         </div>
//       </div>

//       {/* ================= RIGHT SECTION ================= */}
//       <div className="w-full lg:w-[45%] relative h-screen bg-black">
//         {/* DESKTOP NAVBAR */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-8 text-white z-10 font-bold text-[15px]">
//           <a href="#about">ABOUT</a>
//           <a href="#skills">SKILLS</a>
//           <a href="#portfolio">PORTFOLIO</a>
//           <a href="#contact">CONTACT</a>
//         </div>

//         {/* ================= DESKTOP IMAGE (UNCHANGED) ================= */}
//         <img
//           src={ima}
//           alt="Profile"
//           className="hidden lg:block absolute w-[550px] bottom-0 left-0 object-contain"
//         />

//         {/* ================= MOBILE ================= */}
//         <div className="lg:hidden relative w-full h-screen">
//           {/* FULL BIG IMAGE (FIXED) */}
//           <img
//             src={img}
//             alt="Profile"
//             className="absolute left-7 bottom-0  w-full h-full object-cover"
//           />

//           {/* CTANGLE BACKGROUND */}
//           <img
//             src={Ctriangle}
//             alt=""
//             className="absolute bottom-0 left-0 w-full z-0"
//           />

//           {/* CONTENT */}
//           <div className="absolute inset-0 flex items-end p-6 z-10">
//             {/* LEFT TEXT */}
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>

//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             {/* RIGHT ICONS COLUMN */}
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

// import React from "react";
// import ima from "../assets/ima.png";
// import img from "../assets/img.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   return (
//     <div className="flex  min-h-screen bg-black overflow-hidden">
//       {/* ================= LEFT SECTION (DESKTOP ONLY - SAME) ================= */}
//       <div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         <img src={Group} alt="" className="w-[57px] h-[50px] mt-20 ml-20" />

//         <h1 className="font-bold text-[40px] text-black mt-48 ml-20 leading-none">
//           Hi, I am
//         </h1>

//         <h2 className="font-bold text-[80px] text-black mt-11 ml-20 leading-none">
//           Tomasz Gajda
//         </h2>

//         <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
//           Front-end Developer / UI Designer
//         </p>

//         <div className="flex gap-4 ml-20 mt-11">
//           <FaGithub />
//           <FaLinkedin />
//           <FaEnvelope />
//         </div>
//       </div>

//       {/* ================= RIGHT SECTION ================= */}
//       <div className="w-full lg:w-[45%] relative h-screen bg-black">
//         {/* DESKTOP NAVBAR */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-8 text-white z-10 font-bold text-[15px]">
//           <a href="#about">ABOUT</a>
//           <a href="#skills">SKILLS</a>
//           <a href="#portfolio">PORTFOLIO</a>
//           <a href="#contact">CONTACT</a>
//         </div>

//         {/* ================= DESKTOP IMAGE ================= */}
//         <img
//           src={ima}
//           alt="Profile"
//           className="hidden lg:block absolute w-[550px] bottom-0 left-0 object-contain"
//         />

//         {/* ================= MOBILE ================= */}
//         <div className="lg:hidden relative w-full h-screen">
//           {/* MOBILE IMAGE */}
//           <img
//             src={img}
//             alt="Profile"
//             className="absolute left-7 mt-24 w-full h-full object-cover"
//           />

//           {/* CTANGLE BACKGROUND */}
//           <img
//             src={Ctriangle}
//             alt=""
//             className="absolute bottom-0 left-0 w-full z-0"
//           />

//           {/* CONTENT */}
//           <div className="absolute inset-0 flex items-end p-6 z-10">
//             {/* LEFT TEXT */}
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>

//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             {/* RIGHT ICONS COLUMN */}
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

// import React, { useState } from "react";
// import ima from "../assets/ima.png";
// import img from "../assets/img.png";
// import vect from "../assets/Vect.png";
// import Group from "../assets/Group.png";
// import Ctriangle from "../assets/ctangle.png";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-black overflow-hidden">
//       {/* ================= LEFT SECTION (DESKTOP ONLY) ================= */}
//       <div
//         className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         <img src={Group} alt="" className="w-[57px] h-[50px] mt-20 ml-20" />

//         <h1 className="font-bold text-[40px] text-black mt-48 ml-20 leading-none">
//           Hi, I am
//         </h1>

//         <h2 className="font-bold text-[80px] text-black mt-11 ml-20 leading-none">
//           Tomasz Gajda
//         </h2>

//         <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
//           Front-end Developer / UI Designer
//         </p>
//         {/*
//         <div className="flex  gap-4 ml-20 mt-11">
//           <FaGithub  />
//           <FaLinkedin />
//           <FaEnvelope />
//         </div> */}
//         <div className="flex gap-4 ml-20 mt-11">
//           {/* GITHUB */}
//           <a href="https://github.com" target="_blank">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaGithub className="text-black text-xl" />
//             </div>
//           </a>

//           {/* LINKEDIN */}
//           <a href="https://linkedin.com" target="_blank">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaLinkedin className="text-black text-xl" />
//             </div>
//           </a>

//           {/* EMAIL */}
//           <a href="mailto:test@gmail.com">
//             <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
//               <FaEnvelope className="text-black text-xl" />
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* ================= RIGHT SECTION ================= */}
//       <div className="w-full lg:w-[45%] relative h-screen bg-black">
//         {/* ================= MOBILE NAVBAR ================= */}
//         <div className="lg:hidden flex justify-between items-center px-6 py-4 text-white absolute top-0 left-0 w-full z-20">
//           <img src={vect} alt="logo" className="w-10" />

//           <button onClick={() => setOpen(!open)} className="text-2xl">
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="lg:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700 flex flex-col gap-5 px-6 py-6 text-white z-20">
//             <a href="#about" onClick={() => setOpen(false)}>
//               ABOUT
//             </a>
//             <a href="#skills" onClick={() => setOpen(false)}>
//               SKILLS
//             </a>
//             <a href="#portfolio" onClick={() => setOpen(false)}>
//               PORTFOLIO
//             </a>
//             <a href="#contact" onClick={() => setOpen(false)}>
//               CONTACT
//             </a>
//           </div>
//         )}

//         {/* ================= DESKTOP NAVBAR ================= */}
//         {/* <div className="hidden lg:flex absolute top-20 left-16 gap-16 text-white z-10 font-bold text-[15px]">
//           <a href="#about">ABOUT</a>
//           <a href="#skills">SKILLS</a>
//           <a href="#portfolio">PORTFOLIO</a>
//           <a href="#contact">CONTACT</a>
//         </div> */}
//         <div className="hidden lg:flex absolute top-20 left-16 gap-10 items-center">
//           {["about", "skills", "portfolio", "contact"].map((item) => (
//             <div
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="relative cursor-pointer font-montserrat font-bold text-[17px] leading-none tracking-normal text-white transition-all duration-300 hover:text-gray-300"
//             >
//               {item.toUpperCase()}

//               {/* underline */}
//               <span className="absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 w-0 hover:w-full" />
//             </div>
//           ))}
//         </div>

//         {/* ================= DESKTOP IMAGE ================= */}
//         <img
//           src={ima}
//           alt="Profile"
//           className="hidden lg:block absolute w-[550px] bottom-0 left-0 object-contain"
//         />

//         {/* ================= MOBILE ================= */}
//         <div className="lg:hidden relative w-full h-screen">
//           {/* IMAGE */}
//           <img
//             src={img}
//             alt="Profile"
//             className="absolute left-7 mt-24 w-full h-full object-cover"
//           />

//           {/* CTANGLE */}
//           <img
//             src={Ctriangle}
//             alt=""
//             className="absolute bottom-0 left-0 w-full z-0"
//           />

//           {/* CONTENT */}
//           <div className="absolute inset-0 flex items-end p-6 z-10">
//             {/* LEFT TEXT */}
//             <div className="flex-1 text-white">
//               <h1 className="text-3xl font-bold">Hi, I am</h1>
//               <h2 className="text-5xl font-bold">Tomasz</h2>

//               <p className="text-gray-300 mt-2">
//                 Front-end Developer / UI Designer
//               </p>
//             </div>

//             {/* RIGHT ICONS */}
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

import React, { useState } from "react";
import ima from "../assets/ima.png";
import img from "../assets/img.png";
import vect from "../assets/Vect.png";
import Group from "../assets/Group.png";
import Ctriangle from "../assets/ctangle.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Hero() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  

  const scrollToSection = (id) => {
    setActive(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["about", "skills", "portfolio", "contact"];

  return (
  
      <div className="flex min-h-screen bg-black overflow-hidden">
        {/* ================= LEFT DESKTOP ================= */}
        <div
          className="hidden lg:flex w-full lg:w-[55%] bg-[#d9d9d9] flex-col justify-start pl-24 relative py-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        >
          <img src={Group} alt="" className="w-[57px] h-[50px] mt-11 ml-20" />

          <h1 className="font-bold text-[40px] text-black mt-36 ml-20">
            Hi, I am
          </h1>

          <h2 className="font-bold text-[80px] text-black mt-6 ml-20">
            Tomasz Gajda
          </h2>

          <p className="font-extrabold text-[25px] text-[#909090] mt-4 ml-20">
            Front-end Developer / UI Designer
          </p>

          <div className="flex gap-4 ml-20 mt-20 ">
            <a href="#">
              <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                <FaGithub />
              </div>
            </a>

            <a href="#">
              <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                <FaLinkedin />
              </div>
            </a>

            <a href="#">
              <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                <FaEnvelope />
              </div>
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="w-full lg:w-[45%] relative h-screen bg-black">
          {/* ================= MOBILE NAVBAR ================= */}
          <div className="lg:hidden flex justify-between items-center px-6 py-4 text-white absolute top-0 left-0 w-full z-20">
            <img src={vect} alt="logo" className="w-10" />

            <button onClick={() => setOpen(!open)} className="text-2xl">
              ☰
            </button>
          </div>
          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700 flex flex-col gap-5 px-6 py-6 text-white z-20">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(item);
                  }}
                  className="text-left font-bold"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          )}
          {/* ================= DESKTOP NAVBAR ================= */}
          ```jsx
          {/* ================= DESKTOP NAVBAR ================= */}
          <div className="hidden lg:flex absolute top-20 left-16 gap-10 items-center z-20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300
        font-bold text-[17px] leading-none
        ${
          active === item
            ? "bg-white text-black"
            : "text-white hover:bg-white/10"
        }`}
                style={{
                  fontFamily: "Montserrat",
                  letterSpacing: "0%",
                }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          ```
          {/* ================= DESKTOP IMAGE ================= */}
          {/* <img
          src={ima}
          alt="Profile"
          className="hidden lg:block absolute w-[550px] bottom-0 left-0 object-contain"
        /> */}
          ```jsx // Replace only the DESKTOP IMAGE section in your Hero
          component with this:
          {/* ================= DESKTOP IMAGE ================= */}
          <div className="hidden lg:block absolute inset-0">
            <img
              src={ima}
              alt="Profile"
              className="absolute w-[550px] bottom-0 left-0 object-contain"
            />
            \
            <p
              className="absolute bottom-0 right-96 w-[136px] h-[60px] text-[15px] font-normal leading-[100%] tracking-[0] text-justify "
              style={{
                fontFamily: "Roboto",
              }}
            >
              this is not my photo
              <br />
              but I dearly hope to
              <br />
              get one just like this
            </p>
          </div>
          ```
          {/* ================= MOBILE ================= */}
          <div className="lg:hidden relative w-full h-screen">
            <img
              src={img}
              alt="Profile"
              className="absolute left-7 mt-11 w-full h-full object-cover"
            />

            <img
              src={Ctriangle}
              alt=""
              className="absolute bottom-0 mb-6 left-0 w-full z-0"
            />

            <div className="absolute inset-0 flex mb-11 items-end p-6 z-10">
              <div className="flex-1 text-white">
                <h1 className="text-3xl font-bold">Hi, I am</h1>
                <h2 className="text-5xl font-bold">Tomasz</h2>
                <p className="text-gray-300 mt-2">
                  Front-end Developer / UI Designer
                </p>
              </div>

              <div className="flex flex-col gap-3 items-end">
                <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                  <FaGithub />
                </div>
                <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                  <FaLinkedin />
                </div>
                <div className="w-10 h-10 bg-[#C4C4C4] flex items-center justify-center rounded">
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Hero;