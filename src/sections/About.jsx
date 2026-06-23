// import React from "react";
// import TextCard from "../components/TextCard";
// import separator from "../assets/separatorBlack.png";
// import three from "../assets/three.png";
// import ma from "../assets/ma.png";
// import IconCard from "../components/IconCard";

// import ico from "../assets/ico.png";;

// function About() {
//   return (
//     <div
//       id="about"
//       className="w-full min-h-screen flex flex-col items-center bg-[#D7D7D7] px-4"
//     >
//       {/* TITLE */}
//       <div className="mt-32">
//         <TextCard title="ABOUT ME" />
//       </div>

//       {/* PARAGRAPH */}
//       <p className="mt-20 w-full max-w-[763px] text-center text-[15px] leading-[139%]">
//         Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
//         finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel urna quis libero
//         viverra facilisis ut ac est.
//       </p>

//       {/* BUTTON */}
//       <div className="mt-20 w-[139px] h-[25px] border-x-2 border-black flex items-center justify-center">
//         <span className="font-montserrat font-semibold text-[15px]">
//           EXPLORE
//         </span>
//       </div>

//       {/* SEPARATOR */}
//       <img
//         src={separator}
//         alt="separator"
//         className="w-[170px] h-[12px] mt-16 object-contain"
//       />

//       {/* ===================== */}
//       {/* ICON CARDS SECTION */}
//       {/* ===================== */}
//       <div className="mt-20 w-full max-w-6xl flex flex-col gap-12 items-center">
//         {/* TOP ROW */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
//           <IconCard icon={three} title="DESIGN">
//             I can design the site based on your needs and suggestions. I can
//             also design the site from scratch and consult you during the job.
//           </IconCard>

//           <IconCard icon={ma} title="MAINTENANCE">
//             I can design the site based on your needs and suggestions. I can
//             also design the site from scratch and consult you during the job.
//           </IconCard>
//         </div>

//         {/* BOTTOM CENTER */}
//         <div className="flex justify-center w-full">
//           <IconCard icon={ico} title="DEVELOPMENT">
//             I can design the site based on your needs and suggestions. I can
//             also design the site from scratch and consult you during the job.
//           </IconCard>
//         </div>
//       </div>
//       <img
//         src={separator}
//         alt="separator"
//         className="w-[170px] h-[12px] mt-32 object-contain"
//       />
//     </div>
//   );
// }

// export default About;

//animation
import React, { useEffect, useRef } from "react";
import TextCard from "../components/TextCard";
import separator from "../assets/separatorBlack.png";
import three from "../assets/three.png";
import ma from "../assets/ma.png";
import ico from "../assets/ico.png";
import IconCard from "../components/IconCard";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const iconRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 TITLE FALL ANIMATION
      gsap.from(titleRef.current, {
        y: -120,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // 🔥 PARAGRAPH SLIDE
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // 🔥 BUTTON POP
      gsap.from(btnRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // 🔥 ICON CARDS STAGGER (ONE BY ONE DROP)
      gsap.from(iconRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="about"
      className="w-full min-h-screen flex flex-col items-center bg-[#D7D7D7] px-4"
    >
      {/* TITLE */}
      <div ref={titleRef} className="mt-32">
        <TextCard title="ABOUT ME" />
      </div>

      {/* PARAGRAPH */}
      <p
        ref={textRef}
        className="mt-20 w-full max-w-[763px] text-center text-[15px] leading-[139%]"
      >
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem <br />
        sed viverra. In vel urna quis libero viverra facilisis ut ac est.
      </p>

      {/* BUTTON */}
      <motion.div
        ref={btnRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-20 w-[139px] h-[25px] border-x-2 border-black flex items-center justify-center cursor-pointer"
      >
        <span className="font-montserrat font-semibold text-[15px]">
          EXPLORE
        </span>
      </motion.div>

      {/* SEPARATOR */}
      <img
        src={separator}
        alt="separator"
        className="w-[170px] h-[12px] mt-16 object-contain"
      />

      {/* ICON CARDS */}
      <div className="mt-20 w-full max-w-6xl flex flex-col gap-12 items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
          <div ref={(el) => (iconRef.current[0] = el)}>
            <IconCard icon={three} title="DESIGN">
              I can design the site based on your needs and suggestions.
            </IconCard>
          </div>

          <div ref={(el) => (iconRef.current[1] = el)}>
            <IconCard icon={ma} title="MAINTENANCE">
              I can design the site based on your needs and suggestions.
            </IconCard>
          </div>
        </div>

        <div
          ref={(el) => (iconRef.current[2] = el)}
          className="flex justify-center w-full"
        >
          <IconCard icon={ico} title="DEVELOPMENT">
            I can design the site based on your needs and suggestions.
          </IconCard>
        </div>
      </div>

      {/* BOTTOM SEPARATOR */}
      <img
        src={separator}
        alt="separator"
        className="w-[170px] h-[12px] mt-32 object-contain"
      />
    </div>
  );
}

export default About;