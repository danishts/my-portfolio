import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiNodedotjs, SiMysql, SiMongodb, SiTypescript } from "react-icons/si";
import TextCard from "../components/TextCard";

function Skills() {
  return (
    <div className="min-h-screen bg-[#D7D7D7] flex flex-col items-center py-10 px-4 font-montserrat">
      {/* TITLE */}
      <div className="mt-32">
        <TextCard title="SKILLS" />
      </div>
      {/* <div className="w-full bg-amber-600">
    
      <h2 className="font-bold mt-8 bg-amber-300 text-[22px]  md:text-[30px] tracking-[0.18em] ">
        USING NOW:
      </h2>
      </div> */}
      <div className="w-full  md:mr-11">
        <h2 className="font-bold mr- mt-16 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          USING NOW:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mt-6 mb-10">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            HTML5
          </p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            CSS3
          </p> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            CSS3
          </p>
        </div>

        {/* SASS */}
        <div className="flex flex-col items-center">
          <FaSass className="text-pink-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            SASS
          </p>
        </div>

        {/* JS */}
        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-400 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            JAVASCRIPT
          </p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <FaReact className="text-cyan-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            REACT
          </p>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-purple-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            BOOTSTRAP
          </p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-orange-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            GIT
          </p>
        </div>

        {/* Figma */}
        <div className="flex flex-col items-center">
          <FaFigma className="text-pink-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            FIGMA
          </p>
        </div>
      </div>

      {/* LEARNING */}
      {/* <h2 className="font-bold text-[22px] md:text-[30px] tracking-[0.18em] text-center">
        LEARNING:
      </h2> */}
      <div className="w-full md:mr-11">
        <h2 className="font-bold mt-8 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          LEARNING:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mt-6 mb-10">
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-green-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            NODEJS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMysql className="text-blue-700 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            MYSQL
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            MONGODB
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            TYPESCRIPT
          </p>
        </div>
      </div>

      {/* OTHER SKILLS */}
      {/* <h2 className="font-bold text-[22px] text-left md:text-[30px] tracking-[0.18em] text-center">
        OTHER SKILLS:
      </h2> */}
      <div className="w-full mb-11 md:mr-11">
        <h2 className="font-bold mt-8 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          OTHER SKILLS:
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mb-24 mt-6">
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-green-600 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            NODEJS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMysql className="text-blue-700 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            MYSQL
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            MONGODB
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500 w-14 h-14 md:w-20 md:h-20" />
          {/* <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]"> */}
          <p className="font-montserrat font-normal text-[24px] leading-[100%] tracking-[0.1354em] text-center">
            TYPESCRIPT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
