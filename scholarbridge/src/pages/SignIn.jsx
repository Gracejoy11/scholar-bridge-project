import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import onb1 from '../assets/onb-1-certificate.webp'

export default function SignIn() {
  const [show, setShow] = useState(false)
  const nav = useNavigate()
  return (
    <div className="auth">
      <main className="auth-main">
        <div className="auth-form">
          <Link to="/" className="brand" style={{ marginBottom: 30 }}><span className="logo"><Icon.logo /></span>ScholarBridge</Link>
          <h1>Welcome back</h1>
          <p className="sub">Enter your details to access your dashboard.</p>
          <div className="field"><label>Email address</label><div className="input"><Icon.mail /><input type="email" placeholder="Enter your email address" /></div></div>
          <div className="field"><label>Password</label><div className="input"><Icon.lock /><input type={show ? 'text' : 'password'} placeholder="Enter your password" /><span className="toggle" onClick={() => setShow(v => !v)}><Icon.eye width="18" height="18" /></span></div></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0 22px' }}>
            <label className="check-line" style={{ margin: 0 }}><input type="checkbox" /> <span>Remember me</span></label>
            <a href="#" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '.88rem' }}>Forgot password?</a>
          </div>
          <button className="btn btn-primary btn-block" onClick={() => nav('/dashboard')}>Sign in</button>
          <div className="divider">or continue with</div>
          <div className="socials-row">
            <button className="soc-btn"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.5 12.3c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-7.8Z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2v2.8A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.7 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2a11 11 0 0 0 0 9.8l3.7-2.8Z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .6 4.2 1.7l3.1-3.1A11 11 0 0 0 2 7.1l3.7 2.8C6.6 7.3 9.1 5.4 12 5.4Z"/></svg>Google</button>
            <button className="soc-btn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.1c.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.3-3.4z"/></svg>Apple</button>
          </div>
          <p className="auth-alt">New here? <Link to="/signup">Create account</Link></p>
        </div>
      </main>
      <aside className="onb-side">
        <Link to="/" className="brand badge-brand" style={{ color: 'var(--navy)' }}><span className="logo"><Icon.logo /></span>ScholarBridge</Link>
        <img src={onb1} alt="Student awarded a scholarship" />
      </aside>
    </div>
  )
}
