import React, { useState } from "react";
import im from "../assets/im.png";
import img4 from "../assets/P.png";
import img1 from "../assets/Project.png";
import img2 from "../assets/Rect.png";
import img3 from "../assets/Pro.png";
import TextCard from "../components/TextCard";

function Portfolio() {
  const [active, setActive] = useState("ALL");

  const tabs = ["ALL", "CODE", "DESIGN"];

  const projects = [img1, img2, img3, img4, img3, img1];

  return (
    <div className="min-h-screen bg-[#d9d9d9] flex flex-col items-center font-montserrat">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <img src={im} alt="" className="w-full h-auto object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          
            <TextCard title="PORTFOLIO" />
        
        </div>
      </div>

      {/* TABS BAR */}
      <div className="w-full h-16 bg-[#1A1A1A] flex flex-col items-center justify-center">
        <div className="flex gap-12 text-[14px] font-semibold">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`transition-all ${
                active === item ? "text-white scale-110" : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-72 h-[2px] bg-gray-500 mt-2 relative">
          <div
            className="h-[2px] bg-white transition-all duration-300"
            style={{
              width:
                active === "ALL" ? "33%" : active === "CODE" ? "66%" : "100%",
            }}
          />
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {projects.map((img, index) => (
            <div
              key={index}
              className="relative w-[640px] h-[400px] max-w-full"
            >
              {/* IMAGE */}
              <img src={img} alt="" className="w-full h-full object-cover" />

              {/* ONLY 2ND IMAGE OVERLAY */}
              {index === 1 && (
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">
                  <p className="font-semibold text-[10px] tracking-[0.095em] text-center">
                    CODED • DESIGNED
                  </p>

                  <h2 className="mt-6 font-bold text-[25px] leading-[128%] tracking-[0.2054em] text-center uppercase">
                    EATSOME.
                  </h2>

                  <p className="mt-4 font-medium text-[10px] text-center">
                    Restaurant browsing in React.js
                  </p>

                  <div className="flex gap-4 mt-8">
                    <button className="border-l-2 border-r-2 border-white px-4 py-1 font-semibold text-[12px] tracking-[0.095em]">
                      DEMO
                    </button>

                    <button className="border-l-2 border-r-2 border-white px-4 py-1 font-semibold text-[12px] tracking-[0.095em]">
                      MORE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER TEXT */}
      <div className="w-full flex bg-[#1A1A1A] justify-center items-center h-16">
        <p className="text-center text-white font-semibold text-[20px]">
          And many more to come!
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
