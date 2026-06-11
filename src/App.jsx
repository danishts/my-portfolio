// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//     </div>
//   );
// }


import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Home />
      </div>
    </div>
  );
}

export default App
