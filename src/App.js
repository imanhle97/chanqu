import './index.js';
import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Baogia from './pages/Baogia.js';
import Lienhe from './pages/Lienhe.js';
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)

      } else {
        setShowGoToTop(false)

      }
    }
    window.addEventListener('scroll', handleScroll)

  }, [])



  return (
    <div>
      <Router>

        <Header
        />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/baogia' element={<Baogia />} />
          <Route path='/lienhe' element={<Lienhe />} />
          {/* <Route path='/tailieu' element={<Modal/>} /> */}
        </Routes>
        <Footer />
      </Router>
      {showGoToTop &&
        <button
          style={{
            position: 'fixed',
            right: 30,
            bottom: 10,
            width:50,
            background: '#3a3a3d',
            borderRadius: 10,
            height: 50, fontSize: 15,
            cursor: 'pointer', borderColor: 'rgb(0 193 212)',
            color:'#fff'
          }}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        >{<i class="fa-solid fa-chevron-up"></i>}</button>
      }
    </div >
  )
}

export default App;
