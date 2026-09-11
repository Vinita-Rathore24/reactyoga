import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home"
import Classes from "./assets/pages/Classes"
import Contact from "./assets/pages/Contact"
import Schedule from "./assets/pages/Schedule"
import Studio from "./assets/pages/Studio"

function App () {
  return (
  <>

   <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
       
        <Route path="/classes" element={<Classes/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/studio" element={<Studio/>} />
      </Routes>
    </BrowserRouter>

   
  </>
  );
}

 

export default App;