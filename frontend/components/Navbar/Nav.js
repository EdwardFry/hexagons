import React from 'react'
import Link from 'next/link'

import './Nav.css';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav className="Nav-container">
    <div className="Nav-logo">
      <h1>Logo Here</h1>
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
