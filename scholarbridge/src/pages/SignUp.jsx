import { useState, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import onb1 from '../assets/onb-1-certificate.webp'
import onb2 from '../assets/onb-2-profile.webp'
import onb3 from '../assets/onb-3-globe.webp'

const steps = ['Account', 'Profile', 'Preferences']
const destinations = [
  ['🇳🇬', 'Nigeria'], ['🇬🇭', 'Ghana'], ['🇰🇪', 'Kenya'],
  ['🇨🇦', 'Canada'], ['🇺🇸', 'U.S.A'], ['🇷🇼', 'Rwanda'],
  ['🇬🇧', 'U.K'], ['🇦🇺', 'Australia'], ['🌍', 'Anywhere'],
]

export default function SignUp() {
  const [step, setStep] = useState(0)
  const [prefs, setPrefs] = useState(['Nigeria', 'Ghana'])
  const [show, setShow] = useState(false)
  const nav = useNavigate()
  const illus = [onb1, onb2, onb3][step]
  const toggle = (c) => setPrefs(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c])

  return (
    <div className="auth">
      <main className="auth-main">
        <div className="auth-form">
          <Link to="/" className="brand" style={{ marginBottom: 26 }}><span className="logo"><Icon.logo /></span>ScholarBridge</Link>

          {/* stepper */}
          <div className="stepper">
            {steps.map((label, i) => (
              <Fragment key={label}>
                {i > 0 && <div className={'line' + (i <= step ? ' done' : '')} />}
                <div className={'st' + (i === step ? ' active' : i < step ? ' done' : '')}>
                  <span className="dot">{i < step ? <Icon.check width="16" height="16" /> : i + 1}</span>
                  <small>{label}</small>
                </div>
              </Fragment>
            ))}
          </div>

          <p className="step-label">Step {step + 1} of 3</p>

          {step === 0 && (
            <>
              <h1>Welcome to <span style={{ color: 'var(--blue-300)' }}>ScholarBridge</span></h1>
              <p className="sub">Join thousands of African students discovering verified scholarship and funding opportunities.</p>
              <div className="field"><label>Full name</label><div className="input"><Icon.user /><input placeholder="Enter your full name" /></div></div>
              <div className="field"><label>Email address</label><div className="input"><Icon.mail /><input type="email" placeholder="Enter your email address" /></div></div>
              <div className="field">
                <label>Password</label>
                <div className="input"><Icon.lock /><input type={show ? 'text' : 'password'} placeholder="Create a strong password" /><span className="toggle" onClick={() => setShow(v => !v)}><Icon.eye width="18" height="18" /></span></div>
              </div>
              <p className="check-line" style={{ alignItems: 'center' }}><span className="chk" style={{ width: 20, height: 20, borderRadius: 6, background: 'var(--green-bg)', color: 'var(--green)', display: 'grid', placeItems: 'center' }}><Icon.check width="13" height="13" /></span> Password must be at least 8 characters</p>
              <button className="btn btn-primary btn-block" onClick={() => setStep(1)}>Continue <Icon.arrow /></button>
            </>
          )}

          {step === 1 && (
            <>
              <h1>Tell us about yourself</h1>
              <p className="sub">Help us personalise your scholarship recommendations just for you.</p>
              <div className="row-2">
                <div className="field"><label>Country</label><div className="select-field"><select defaultValue="Ghana"><option>Nigeria</option><option>Ghana</option><option>Kenya</option><option>Uganda</option><option>Rwanda</option></select><Icon.chevron /></div></div>
                <div className="field"><label>Degree level</label><div className="select-field"><select defaultValue=""><option value="" disabled>Select your degree level</option><option>Undergraduate</option><option>Masters</option><option>PhD</option></select><Icon.chevron /></div></div>
              </div>
              <div className="row-2">
                <div className="field"><label>Field of study</label><div className="select-field"><select defaultValue=""><option value="" disabled>Select your field of study</option><option>Engineering</option><option>Medicine</option><option>Business</option><option>Arts &amp; Design</option></select><Icon.chevron /></div></div>
                <div className="field"><label>Current CGPA (optional)</label><div className="input"><Icon.star width="18" height="18" /><input placeholder="e.g 3.50 or 70%" /></div></div>
              </div>
              <div className="form-actions">
                <button className="btn btn-ghost" onClick={() => setStep(0)}><Icon.arrowLeft /> Back</button>
                <button className="btn btn-primary" onClick={() => setStep(2)}>Continue <Icon.arrow /></button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1>What are you looking for?</h1>
              <p className="sub">Help us tailor opportunities that match your goals and preferences.</p>
              <p className="step-label" style={{ color: 'var(--navy)' }}>Preferred study destinations</p>
              <div className="pill-grid">
                {destinations.map(([fl, c]) => (
                  <div key={c} className={'pill-select' + (prefs.includes(c) ? ' on' : '')} onClick={() => toggle(c)}>
                    <span className="fl">{fl}</span>{c}
                  </div>
                ))}
              </div>
              <div className="form-actions">
                <button className="btn btn-ghost" onClick={() => setStep(1)}><Icon.arrowLeft /> Back</button>
                <button className="btn btn-primary" onClick={() => nav('/dashboard')}>Finish &amp; explore <Icon.arrow /></button>
              </div>
            </>
          )}

          <p className="auth-alt">Already a member? <Link to="/signin">Sign in</Link></p>
        </div>
      </main>

      <aside className="onb-side">
        <Link to="/" className="brand badge-brand" style={{ color: 'var(--navy)' }}><span className="logo"><Icon.logo /></span>ScholarBridge</Link>
        <img src={illus} alt="Onboarding illustration" />
      </aside>
    </div>
  )
}
