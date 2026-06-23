

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
