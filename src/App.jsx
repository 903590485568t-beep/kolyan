import React from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const images = [
    '/images/kolyan-hero.jpg',
    '/images/photo_2026-02-12_14-34-34.jpg',
    '/images/unnamed (1).jpg'
  ];

  return (
    <div className="container">
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
      >
        <h1 className="title">KOLYAN</h1>
        <p style={{fontSize: '2rem', margin: '10px 0'}}>The Best Token Ever!!1!</p>
      </motion.header>

      <motion.img 
        src={images[0]} 
        alt="Kolyan Hero" 
        className="hero-image"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div 
        className="about-section"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h2>Who is Kolyan?</h2>
        <p>Kolyan is a legend. He goes to the moon. He likes memes and money. Buy $KOLYAN and become cool like him!</p>
        <div className="scrawl" style={{top: '10px', right: '10px'}}>★</div>
      </motion.div>

      <motion.div 
        className="tokenomics-section"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h2>Tokenomics</h2>
        <ul style={{listStyle: 'none', padding: 0, fontSize: '1.5rem', textAlign: 'left'}}>
          <li>💰 Total Supply: 1,000,000,000</li>
          <li>🔥 Liquidity Burned</li>
          <li>🛡️ Mint Revoked</li>
          <li>👶 100% Community Driven (by me)</li>
        </ul>
      </motion.div>

      <div className="gallery">
        {images.map((src, index) => (
          <motion.img 
            key={index}
            src={src}
            className="gallery-img"
            style={{'--rotation': `${Math.random() * 10 - 5}deg`}}
            whileHover={{ scale: 1.1, rotate: 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </div>

      <motion.a 
        href="https://pump.fun/board" 
        target="_blank" 
        className="hand-drawn-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        BUY ON PUMPFUN 🚀
      </motion.a>
      
      <footer style={{marginTop: '50px', fontSize: '1.2rem', opacity: 0.7}}>
        <p>Created with ❤️ and crayons</p>
      </footer>
    </div>
  )
}

export default App
