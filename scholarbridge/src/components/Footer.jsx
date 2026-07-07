import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="brand">
              <span className="logo"><Icon.logo /></span>
              ScholarBridge
            </Link>
            <p>Your bridge to global opportunities. Discover, track and win verified scholarships built around who you are.</p>
            <div className="socials">
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5-6.6L5.6 22H2.5l7.8-8.9L1.6 2h6.7l4.5 6zm-1.2 18h1.7L7.4 3.8H5.6z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8v12H3V8h3.9zM5 3.5A2.3 2.3 0 1 1 5 8a2.3 2.3 0 0 1 0-4.5zM21 20h-3.9v-6.3c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H9.4V8h3.7v1.6c.5-.8 1.4-1.9 3.4-1.9 2.5 0 4.4 1.6 4.4 5.1V20z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div className="fcol"><h5>Platform</h5><Link to="/discover">Discover</Link><Link to="/dashboard">Dashboard</Link><Link to="/scholarships">My Scholarships</Link><a href="/#how">How it works</a></div>
          <div className="fcol"><h5>Company</h5><a href="#">About us</a><a href="#">Careers</a><a href="#">Blog</a><a href="#contact">Contact</a></div>
          <div className="fcol"><h5>Support</h5><a href="#">Help center</a><a href="#">Privacy policy</a><a href="#">Terms of use</a><a href="#">FAQ</a></div>
        </div>
        <div className="foot-bottom">© 2026 ScholarBridge. Built to bridge students to opportunity.</div>
      </div>
    </footer>
  )
}
