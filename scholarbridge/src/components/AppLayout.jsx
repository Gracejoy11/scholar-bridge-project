import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import Chatbot from "./Chatbot";
import student from '../assets/student-portrait.webp'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: Icon.grid },
  { to: '/discover', label: 'Discover Scholarships', icon: Icon.compass },
  { to: '/scholarships', label: 'My Scholarships', icon: Icon.bookmark },
  { to: '/notifications', label: 'Notifications', icon: Icon.bell, badge: 3 },
]

export default function AppLayout({ title, subtitle, actions, children, searchPlaceholder = 'Search scholarships, universities or keywords…' }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <div className={'scrim' + (open ? ' show' : '')} onClick={() => setOpen(false)} />
      <aside className={'sidebar' + (open ? ' open' : '')}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26, padding: '0 8px' }}>
          <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 0, padding: 0 }}>
            <span className="logo" style={{ flexShrink: 0 }}><Icon.logo /></span>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>ScholarBridge</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--blue-300)', fontWeight: 500, letterSpacing: '0.01em' }}>Your Bridge to Global Opportunities</span>
            </div>
          </Link>
          <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon.plus style={{ transform: 'rotate(45deg)', width: 24, height: 24, display: 'block', color: 'var(--blue-100)' }} />
          </button>
        </div>
        <p className="side-label">Menu</p>
        <nav className="side-nav" onClick={() => setOpen(false)}>
          {nav.map(n => (
            <NavLink key={n.to} to={n.to}>
              <n.icon /> {n.label}
              {n.badge && <span style={{ marginLeft: 'auto', background: 'var(--blue-300)', color: '#fff', borderRadius: 999, fontSize: '.72rem', padding: '2px 8px', fontFamily: 'Poppins' }}>{n.badge}</span>}
            </NavLink>
          ))}
        </nav>
        <p className="side-label">Account</p>
        <nav className="side-nav" onClick={() => setOpen(false)}>
          <NavLink to="/profile" end><Icon.user /> Profile</NavLink>
          <NavLink to="/profile/settings"><Icon.settings /> Settings</NavLink>
        </nav>
        <div className="side-foot">
          <p>Complete your profile to unlock better matches.</p>
          <Link to="/profile" className="btn btn-light">Finish setup</Link>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button className="icon-btn topbar-menu" onClick={() => setOpen(true)} aria-label="Menu"><Icon.menu /></button>
            <div className="search"><Icon.search /><input placeholder={searchPlaceholder} /></div>
          </div>
          <div className="top-right">
            <Link to="/notifications" className="icon-btn" style={{ position: 'relative' }}>
              <span className="dot" style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, background: 'var(--red)', borderRadius: '50%' }} />
              <Icon.bell />
            </Link>
            <Link to="/profile" className="avatar-chip">
              <img src={student} alt="Faith" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <b>Faith</b>
                <Icon.chevron style={{ width: 14, height: 14, color: 'var(--muted)', display: 'block' }} />
              </div>
            </Link>
          </div>
        </div>

        <div className="content page-fade">
          {(title || actions) && (
            <div className="page-head">
              <div>{title && <h1>{title}</h1>}{subtitle && <p>{subtitle}</p>}</div>
              {actions}
            </div>
          )}
          {children}
        </div>
      </div>
      <Chatbot />
    </div>
  );
}