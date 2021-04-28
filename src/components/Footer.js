import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Suivez-nous{' '}
      <a href="https://instagram.com/thrivegoldcoast/">A Mani</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <p>Waroux Lucas</p>.
        </span>
      </div>
    </footer>
  </div>
)
