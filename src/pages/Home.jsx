// // import Hero from "../sections/Hero";
// // import About from "../sections/About";
// // import Skills from "../sections/Skills";
// // import Portfolio from "../sections/Portfolio";
// // import Contact from "../sections/Contact";

// // export default function Home() {
// //   return (
// //     <div className="">
// //       <Hero />
// //       <About />
// //       <Skills />
// //       <Portfolio />
// //       <Contact />
// //     </div>
// //   );
// // }

// import Hero from "../sections/Hero";
// import TextImageCard from "../components/TextImageCard";
// import Skills from "../sections/Skills";
// import Portfolio from "../sections/Portfolio";
// import Contact from "../sections/Contact";

// export default function Home() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section>
//         <Hero />
//       </section>

//       {/* YOUR CUSTOM SECTION (IT BERRIES CARD) */}
//       <section className="">
//         <TextImageCard />
//       </section>

//       {/* SKILLS SECTION */}
//       <section className="scroll-mt-20">
//         <Skills />
//       </section>

//       {/* PORTFOLIO SECTION */}
//       <section className="scroll-mt-20">
//         <Portfolio />
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="scroll-mt-20">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// import Hero from "../sections/Hero";
// import About from "../sections/About";

// import Skills from "../sections/Skills";
// import Portfolio from "../sections/Portfolio";
// import Contact from "../sections/Contact";
// import Footer from "../sections/Footer";
// import TextImageCard from "../components/TextImageCard";

// export default function Home() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section>
//         <Hero />
//       </section>

//       {/* ABOUT SECTION */}

//       {/* YOUR CUSTOM SECTION (IT BERRIES CARD) */}
//       <section>
//         <TextImageCard />
//       </section>

//       <section className="scroll-mt-20">
//         <About />
//       </section>
//       {/* SKILLS SECTION */}
//       <section className="scroll-mt-20">
//         <Skills />
//       </section>

//       {/* PORTFOLIO SECTION */}
//       <section className="scroll-mt-20">
//         <Portfolio />
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="scroll-mt-20">
//         <Contact />
//       </section>
//       <section>
//         <Footer />
//       </section>
//     </div>
//   );
// }

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import TextImageCard from "../components/TextImageCard";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section>
        <Hero />
      </section>

      {/* CUSTOM SECTION */}
      <section>
        <TextImageCard />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-20">
        <Portfolio />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* FOOTER */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
