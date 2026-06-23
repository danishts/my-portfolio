// import React from "react";
// import img from "../assets/ITB.png";

// function TextImageCard() {
//   return (
//     <div className="w-full max-w-[1920px] mx-auto min-h-[250px] md:h-[313px] bg-[#1D1D1D] flex flex-col md:flex-row">
//       {/* LEFT BOX */}
//       {/* <div className="flex-[1.5] w-full relative">
//         <h1 className="absolute left-[102px] top-[49px] w-[363px] h-[63px] font-montserrat font-bold text-[30px] leading-[100%] tracking-[0.1854em] text-white">
//           IT BERRIES
//         </h1>
//       </div> */}
//       {/* <div className="flex-[3]  w-full relative">

//         <h1 className="absolute left-[102px] top-[49px] w-[363px] h-[63px] font-montserrat font-bold text-[30px] leading-[100%] tracking-[0.1854em] text-white">
//           IT BERRIES
//         </h1>

//         <p className="absolute left-[102px] top-[111px] w-[1148px] h-[89px] font-sans text-[15px] leading-[139%] tracking-[0em] text-white text-justify">
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//           quis libero viverra facilisis ut ac <br /> est. Morbi commodo, eros in
//           dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
//           tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet <br />
//           elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque
//           laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae
//           elementum tempor, accumsan nec
//           <br />
//           eros.
//         </p>
//       </div> */}
//       <div className="flex-[3] w-full relative">
//         {/* HEADING */}
//         <h1 className="absolute left-[102px] top-[49px] w-[363px] h-[63px] font-montserrat font-bold text-[30px] leading-[100%] tracking-[0.1854em] text-white">
//           IT BERRIES
//         </h1>

//         {/* PARAGRAPH */}
//         <p className="absolute left-[102px] top-[111px] w-[1148px] h-[89px] font-sans text-[15px] leading-[139%] text-white text-justify">
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//           quis libero viverra facilisis ut ac <br />
//           est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue,
//           in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper
//           a, dictum sit amet <br />
//           elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque
//           laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae
//           elementum tempor, accumsan nec <br />
//           eros.
//         </p>

//         {/* READ MORE (LEFT + RIGHT BORDER ONLY) */}
//         <div className="absolute left-[102px] top-[233px] w-[139px] h-[25px] border-x-2 border-white flex items-center justify-center">
//           <span className="font-montserrat font-semibold text-[15px] leading-[100%] text-white text-center">
//             READ MORE
//           </span>
//         </div>
//       </div>

//       {/* RIGHT BOX (IMAGE) */}
//       <div className="flex-[1] w-full flex items-end justify-end overflow-hidden">
//         <img
//           src={img}
//           alt="ITB"
//           className="h-[250px] md:h-[350px] object-cover translate-y-10 md:translate-y-9"
//         />
//       </div>
//     </div>
//   );
// }

// export default TextImageCard;

// import React from "react";
// import img from "../assets/ITB.png";

// function TextImageCard() {
//   return (
//     <div className="w-full max-w-[1920px] mx-auto bg-[#1D1D1D] flex flex-col md:flex-row overflow-hidden">
//       {/* LEFT + TEXT SECTION */}
//       <div className="flex-[3] w-full relative px-6 md:px-0 py-10 md:py-0">
//         {/* HEADING */}
//         <h1 className="md:absolute left-[102px] top-[49px] font-montserrat font-bold text-[22px] md:text-[30px] leading-[100%] tracking-[0.1854em] text-white">
//           IT BERRIES
//         </h1>

//         {/* PARAGRAPH */}
//         <p className="md:absolute left-[102px] top-[111px] w-full md:w-[1148px] font-sans text-[13px] md:text-[15px] leading-[139%] text-white text-justify mt-4 md:mt-0">
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//           quis libero viverra facilisis ut ac <br className="hidden md:block" />
//           est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue,
//           in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper
//           a, dictum sit amet <br className="hidden md:block" />
//           elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque
//           laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae
//           elementum tempor, accumsan nec <br className="hidden md:block" />
//           eros.
//         </p>

//         {/* READ MORE */}
//         <div className="md:absolute left-[102px] top-[233px] w-[139px] h-[25px] border-x-2 border-white flex items-center justify-center  md:mt-0">
//           <span className="font-montserrat  font-semibold text-[15px] text-white text-center">
//             READ MORE
//           </span>
//         </div>
//       </div>

//       {/* IMAGE SECTION */}
//       <div className="flex-[1] w-full flex items-end justify-end overflow-hidden">
//         <img
//           src={img}
//           alt="ITB"
//           className="h-[250px] md:h-[350px] object-cover -mb-16 translate-y-6 md:translate-y-0"
//         />
//       </div>
//     </div>
//   );
// }

// export default TextImageCard;

// //animation
// import React, { useEffect, useRef } from "react";
// import img from "../assets/ITB.png";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function TextImageCard() {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);
//   const titleRef = useRef(null);
//   const btnRef = useRef(null);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // TITLE ANIMATION
//   gsap.from(titleRef.current, {
//     y: -200, // upar bohat door se start
//     opacity: 0,
//     duration: 1.2,
//     ease: "bounce.out", // 👈 yahi "fall feel" deta hai
//     scrollTrigger: {
//       trigger: containerRef.current,
//       start: "top 80%",
//     },
//   });

//       // TEXT ANIMATION (smooth stagger feel)
//       gsap.from(textRef.current, {
//         x: -80,
//         opacity: 0,
//         duration: 1.2,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 75%",
//         },
//       });

//       // BUTTON
//       gsap.from(btnRef.current, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//         },
//       });

//       // IMAGE FLOAT + ENTER
//       gsap.from(imgRef.current, {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.to(imgRef.current, {
//         y: -15,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full max-w-[1920px] mx-auto bg-[#1D1D1D] flex flex-col md:flex-row overflow-hidden"
//     >
//       {/* LEFT */}
//       <div className="flex-[3] w-full relative px-6 md:px-0 py-10 md:py-0">
//         {/* TITLE */}
//         <h1
//           ref={titleRef}
//           className="md:absolute left-[102px] top-[49px] font-montserrat font-bold text-[22px] md:text-[30px] tracking-[0.1854em] text-white"
//         >
//           IT BERRIES
//         </h1>

//         {/* TEXT */}
//         <p
//           ref={textRef}
//           className="md:absolute left-[102px] top-[111px] w-full md:w-[1048px] text-[13px] md:text-[15px] leading-[139%] text-white text-justify mt-4 md:mt-0"
//         >
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//           quis libero viverra facilisis ut ac est. Morbi commodo, eros in
//           dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
//           tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
//           Nunc egestas nisi eget enim gravida facilisis.
//         </p>

//         {/* BUTTON */}
//         <motion.div
//           ref={btnRef}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="md:absolute left-[102px] top-[233px] w-[139px] h-[25px] border-x-2 border-white flex items-center justify-center mt-6 md:mt-0 cursor-pointer"
//         >
//           <span className="font-montserrat font-semibold text-[15px] text-white">
//             READ MORE
//           </span>
//         </motion.div>
//       </div>

//       {/* IMAGE */}
//       <div className="flex-[1] w-full flex items-end justify-end overflow-hidden">
//         <img
//           ref={imgRef}
//           src={img}
//           alt="ITB"
//           className="h-[250px] md:h-[350px] object-cover -mb-16"
//         />
//       </div>
//     </div>
//   );
// }

// export default TextImageCard;

import React, { useEffect, useRef } from "react";
import img from "../assets/ITB.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TextImageCard() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 TITLE (DROP + SCROLL REVERSE)
      gsap.fromTo(
        titleRef.current,
        {
          y: -200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // 🔥 TEXT (SLIDE LEFT + SMOOTH SCROLL)
      gsap.fromTo(
        textRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // 🔥 BUTTON (POP IN)
      gsap.fromTo(
        btnRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // 🔥 IMAGE (SLIDE + FLOAT)
      gsap.fromTo(
        imgRef.current,
        {
          x: 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // FLOAT EFFECT (always running)
      gsap.to(imgRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1920px] mx-auto bg-[#1D1D1D] flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT */}
      <div className="flex-[3] w-full relative px-6 md:px-0 py-10 md:py-0">
        {/* TITLE */}
        <h1
          ref={titleRef}
          className="md:absolute left-[102px] top-[49px] font-montserrat font-bold text-[22px] md:text-[30px] tracking-[0.1854em] text-white"
        >
          IT BERRIES
        </h1>

        {/* TEXT */}
        <p
          ref={textRef}
          className="md:absolute left-[102px] top-[111px] w-full md:w-[1048px] text-[13px] md:text-[15px] leading-[139%] text-white text-justify mt-4 md:mt-0"
        >
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis.
        </p>

        {/* BUTTON */}
        <motion.div
          ref={btnRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:absolute left-[102px] top-[233px] w-[139px] h-[25px] border-x-2 border-white flex items-center justify-center mt-6 md:mt-0 cursor-pointer"
        >
          <span className="font-montserrat font-semibold text-[15px] text-white">
            READ MORE
          </span>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="flex-[1] w-full flex items-end justify-end overflow-hidden">
        <img
          ref={imgRef}
          src={img}
          alt="ITB"
          className="h-[250px] md:h-[350px] object-cover -mb-16"
        />
      </div>
    </div>
  );
}

export default TextImageCard;