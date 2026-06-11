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

import React from "react";

function TextCard({ title = "TEXT" }) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[404px] h-[80px] md:h-[107px] border-[4px] md:border-[8px] border-black flex items-center justify-center">
      <h1 className="font-montserrat font-bold text-[20px] sm:text-[24px] md:text-[30px] leading-[128%] tracking-[0.18em] md:tracking-[0.3554em] text-black text-center">
        {title}
      </h1>
    </div>
  );
}

export default TextCard;