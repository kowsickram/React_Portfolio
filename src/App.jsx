import React from 'react'
import Preloader from './Components/Preloader';
import Nav from './Components/navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Components/footer';
import { useEffect, useState } from "react"; 
import { Routes, Route, HashRouter } from "react-router-dom";


export default function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
    {loading ? (
      <Preloader />
    ) : (
    <HashRouter>
      <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
       <Footer />
    </HashRouter>
  )}
  </>)
}

