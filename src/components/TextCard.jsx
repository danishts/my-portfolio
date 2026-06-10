import React from "react";

function TextCard({ title = "TEXT" }) {
  return (
    <div className="w-[404px] h-[107px] border-[8px] border-black flex items-center justify-center">
      <h1 className="w-[404px] h-[74px] flex items-center justify-center font-montserrat font-bold text-[30px] leading-[128%] tracking-[0.3554em] text-black text-center">
        {title}
      </h1>
    </div>
  );
}

export default TextCard;
