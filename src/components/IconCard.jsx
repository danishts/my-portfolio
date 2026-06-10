// import React from "react";
// import iq from "../assets/iq.png";

// function IconCard() {
//   return (
//     <div className="flex flex-col items-center">

//       {/* IMAGE + OVERLAY */}
//       <div className="relative w-fit">

//         <img
//           src={iq}
//           alt="IQ"
//           className="object-cover"
//         />

//         {/* HEADING OVER IMAGE */}
//         <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-black text-[22px] font-bold tracking-[0.185em] whitespace-nowrap">
//           MAINTENANCE
//         </h1>

//       </div>

//       {/* PARAGRAPH */}
//       <div className="mt-6 max-w-[300px]">

//         <p className="text-[14px] font-light text-center leading-[139%]">
//           I can design the site based on your needs and suggestions.
//         </p>

//         <p className="text-[14px] font-light text-center leading-[139%] mt-1">
//           I can also design the site from scratch and consult you during the job.
//         </p>

//       </div>

//     </div>
//   );
// }

// export default IconCard;

import React from "react";

function IconCard({ icon, title, children }) {
  return (
    <div className="flex flex-col items-start">
      {/* ICON + TITLE SAME LINE */}
      <div className="flex items-center">
        <img
          src={icon}
          alt="icon"
          className="w-[61px] h-[64px]    object-contain  "
        />

        <h2 className="font-montserrat font-bold  mr-48 text-[22px] -ml-3 tracking-[0.18em] ">
          {title}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="mt-3 text-[14px] font-light leading-[139%] text-justify max-w-[400px]">
        {children}
      </div>
    </div>
  );
}

export default IconCard;