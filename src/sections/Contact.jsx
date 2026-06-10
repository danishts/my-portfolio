import React from "react";
import separatorBlack from "../assets/separatorBlack.png";
import TextCard from "../components/TextCard";

function Contact() {
  return (
    <div className="min-h-screen bg-[#d9d9d9] flex flex-col items-center py-10 px-4 font-montserrat">
      {/* TITLE */}

      <div className="mt-24">
        <TextCard title="  CONTACT" />
      </div>

      {/* TEXT */}
      <p className="mt-10 text-center font-normal text-[15px] leading-[139%] max-w-2xl">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>

      {/* SEPARATOR */}
      <img
        src={separatorBlack}
        alt="separator"
        className="mt-10 w-[170px] h-auto"
      />

      {/* 🔥 FORM */}
      <div className="mt-36 w-full max-w-2xl flex flex-col gap-6">
        {/* NAME */}
        <input
          type="text"
          placeholder="ENTER YOUR NAME*"
          className="bg-transparent border-b-4 border-l-4 border-black px-4 py-3 font-bold text-[14px] tracking-[0.04em] outline-none"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          className="bg-transparent border-b-4 border-l-4 border-black mt-6 px-4 py-4 font-bold text-[14px] tracking-[0.04em] outline-none"
        />

        {/* PHONE */}
        <input
          type="text"
          placeholder="PHONE NUMBER"
          className="bg-transparent border-b-4 border-l-4 border-black px-4 mt-6 py-4 font-bold text-[14px] tracking-[0.04em] outline-none"
        />

        {/* MESSAGE */}
        <input
          type="text"
          placeholder="YOUR MESSAGE*"
          className="bg-transparent border-b-4 border-l-4 border-black px-4 py-6 mt-6 font-bold text-[14px] tracking-[0.04em] outline-none"
        />

        {/* SUBMIT BUTTON */}
      </div>
      <button className="mt-12 mb-6 border-l-3 h-[45px] border-r-3 border-black px-5 py-1 font-bold text-[16px] leading-[100%] tracking-[0.1em] flex items-center justify-center">
        SUBMIT
      </button>
    </div>
  );
}

export default Contact;
