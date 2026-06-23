// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

// function Footer() {
//   const facebookLink = "https://www.facebook.com/danish.saddique.18";
//   const linkedinLink = "https://www.linkedin.com/in/danish-saddique-5a3a12232/";

//   return (
//     <div className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat">
//       {/* BACK TO TOP */} <MdOutlineKeyboardDoubleArrowUp className="mb-6 text-white" />
//       <button className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center">
//         BACK TO TOP
//       </button>
//       {/* SOCIAL ICONS */}
//       <div className="flex gap-6 mt-6 text-white text-xl">
//         {/* Facebook */}

//         <a href={facebookLink} target="_blank" rel="noopener noreferrer">
//           <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
//         </a>

//         {/* Twitter (LinkedIn link) */}
//         <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
//           <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//         </a>

//         {/* LinkedIn */}
//         <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
//           <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
//         </a>

//         {/* Instagram (LinkedIn link) */}
//         <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="hover:text-blue-400 cursor-pointer" />
//         </a>
//       </div>
//       {/* COPYRIGHT */}
//       <p className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center">
//         ©2026 Muhammad Danish. All Rights Reserved.
//       </p>
//     </div>
//   );
// }

// export default Footer;




//animation
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

import { motion } from "framer-motion";

function Footer() {
  const facebookLink = "https://www.facebook.com/danish.saddique.18";
  const linkedinLink = "https://www.linkedin.com/in/danish-saddique-5a3a12232/";

  return (
    <motion.div
      className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* BACK TO TOP ICON */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MdOutlineKeyboardDoubleArrowUp className="mb-6 text-white text-2xl" />
      </motion.div>

      {/* BACK TO TOP TEXT */}
      <motion.button
        className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        BACK TO TOP
      </motion.button>

      {/* SOCIAL ICONS */}
      <motion.div
        className="flex gap-6 mt-6 text-white text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          whileHover={{ scale: 1.3 }}
          href={facebookLink}
          target="_blank"
        >
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.3 }}
          href={linkedinLink}
          target="_blank"
        >
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.3 }}
          href={linkedinLink}
          target="_blank"
        >
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.3 }}
          href={linkedinLink}
          target="_blank"
        >
          <FaInstagram className="hover:text-blue-400 cursor-pointer" />
        </motion.a>
      </motion.div>

      {/* COPYRIGHT */}
      <motion.p
        className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        ©2026 Muhammad Danish. All Rights Reserved.
      </motion.p>
    </motion.div>
  );
}

export default Footer;