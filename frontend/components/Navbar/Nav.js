import React from 'react'

import './Nav.css';

const Nav = () => (
  <nav className="Nav-container">
    <div className="Nav-logo">

      <img src="https://files.slack.com/files-pri/TSL5FDQG3-FTPHD2E9G/bee_logo.png" />
      <h1>FlyLite</h1>
    </div>
    <ul className="Nav-items">
      <li>Hello</li>
      <li>About</li>
      <li>Search</li>
      <li>Login</li>
    </ul>
  </nav>
)

export default Nav
