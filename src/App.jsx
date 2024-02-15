import React from 'react'
 
import Nav from './Components/navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import { Routes, Route, HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
       
    </HashRouter>
  )
}

