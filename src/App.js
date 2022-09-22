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
import Modal from './pages/Modal.js';



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
  const [openModal, setOpenModal] = useState(false)



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

        <Modal />

        <Footer />
      </Router>
      {showGoToTop &&
        <button
          style={{
            position: 'fixed',
            right: 30,
            bottom: 10,
            background: '#a1b0fc',
            borderRadius: 100,
            height: 50, fontSize: 15,
            cursor: 'pointer', borderColor: '#f55e00'
          }}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        >{<i class="fa-solid fa-ghost"></i>} TOP</button>
      }
    </div >
  )
}

export default App;
