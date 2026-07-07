import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from './Icon.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand">
          <span className="logo"><Icon.logo /></span>
          ScholarBridge
        </Link>
        <nav className={'nav-links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/discover">Discover</NavLink>
          <a href="/#how">About Us</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="nav-cta">
          <Link to="/signin" className="signin">Sign In</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(v => !v)}><Icon.menu width="26" height="26" /></button>
      </div>
    </header>
  )
}
