import React from 'react'
import Link from 'next/link'
import './Nav.css';

const Nav = () => (
  <nav className="Nav-container">
    <div className="Nav-logo">

      <img src="https://files.slack.com/files-pri/TSL5FDQG3-FTPHD2E9G/bee_logo.png" />
      <h1>FlyLite</h1>
    </div>
    <ul className="Nav-items">
      <Link href="/"><li>Home</li></Link>
      <Link href="/search"><li>Search</li></Link>
      <Link href="blog"><li>Blog</li></Link>
    </ul>
  </nav>
)

export default Nav
