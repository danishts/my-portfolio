// import React from "react";

// function TextCard({ title = "TEXT" }) {
//   return (
//     <div className="w-[404px] h-[107px] border-[8px] border-black flex items-center justify-center">
//       <h1 className="w-[404px] h-[74px] flex items-center justify-center font-montserrat font-bold text-[30px] leading-[128%] tracking-[0.3554em] text-black text-center">
//         {title}
//       </h1>
//     </div>
//   );
// }

// export default TextCard;

// import React from "react";

// function TextCard({ title = "TEXT" }) {
//   return (
//     <div className="w-[280px] sm:w-[320px] md:w-[404px] h-[80px] md:h-[107px] border-[4px] md:border-[8px] border-black flex items-center justify-center">
//       <h1 className="font-montserrat font-bold text-[20px] sm:text-[24px] md:text-[30px] leading-[128%] tracking-[0.18em] md:tracking-[0.3554em] text-black text-center">
//         {title}
//       </h1>
//     </div>
//   );
// }

// export default TextCard;

import React from "react";
import { motion } from "framer-motion";

function TextCard({ title = "TEXT" }) {
  const letters = title.split("");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08, // one by one effect
      },
    },
  };

  const letterAnim = {
    hidden: { y: -80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-[280px] sm:w-[320px] md:w-[404px] h-[80px] md:h-[107px] border-[4px] md:border-[8px] border-black flex items-center justify-center overflow-hidden">
      <motion.h1
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="font-montserrat font-bold text-[20px] sm:text-[24px] md:text-[30px] tracking-[0.18em] md:tracking-[0.3554em] text-black flex"
      >
        {letters.map((char, i) => (
          <motion.span key={i} variants={letterAnim} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default TextCard;