import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import student from '../assets/student-1.jpg'

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
        <Link to="/" className="brand"><span className="logo"><Icon.logo /></span>ScholarBridge</Link>
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
          <NavLink to="/profile"><Icon.user /> Profile</NavLink>
          <a href="#"><Icon.settings /> Settings</a>
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
            <Link to="/notifications" className="icon-btn"><span className="dot" /><Icon.bell /></Link>
            <Link to="/profile" className="avatar-chip">
              <img src={student} alt="Amara Okafor" />
              <div><b>Amara Okafor</b><small>Undergraduate</small></div>
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
    </div>
  )
}
