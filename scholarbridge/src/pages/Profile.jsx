import AppLayout from '../components/AppLayout.jsx'
import { Icon } from '../components/Icon.jsx'
import student from '../assets/student-1.jpg'

export default function Profile() {
  return (
    <AppLayout>
      <div className="profile-head">
        <div className="profile-cover" />
        <div className="profile-main">
          <img className="pic" src={student} alt="Amara Okafor" />
          <div className="who">
            <h2>Amara Okafor</h2>
            <p>Undergraduate · University of Ibadan · 🇳🇬 Nigeria</p>
          </div>
          <button className="btn btn-primary">Edit profile</button>
        </div>
      </div>

      <div className="profile-grid">
        <div style={{ display: 'grid', gap: 24 }}>
          <div className="panel">
            <div className="panel-head"><h3>Academic information</h3></div>
            <div className="info-row"><span className="k">Degree level</span><span className="v">Undergraduate</span></div>
            <div className="info-row"><span className="k">Field of study</span><span className="v">Computer Science</span></div>
            <div className="info-row"><span className="k">Current CGPA</span><span className="v">3.82 / 4.00</span></div>
            <div className="info-row"><span className="k">Expected graduation</span><span className="v">2027</span></div>
            <div className="info-row"><span className="k">Institution</span><span className="v">University of Ibadan</span></div>
          </div>

          <div className="panel">
            <div className="panel-head"><h3>Scholarship preferences</h3></div>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 14 }}>Preferred study destinations</p>
            <div className="tag-list">
              {['🇳🇬 Nigeria', '🇬🇭 Ghana', '🇰🇪 Kenya', '🇨🇦 Canada', '🇬🇧 U.K'].map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', margin: '18px 0 14px' }}>Interests</p>
            <div className="tag-list">
              {['STEM', 'Fully funded', 'Research', 'Women in Tech'].map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          <div className="panel" style={{ textAlign: 'center' }}>
            <div className="ring" style={{ '--p': 85 }}><div className="in"><b>85%</b><small>complete</small></div></div>
            <h3 style={{ fontSize: '1.05rem' }}>Profile completeness</h3>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginTop: 6 }}>Add your CGPA and a personal statement to reach 100% and unlock more matches.</p>
            <button className="btn btn-primary btn-block" style={{ marginTop: 16 }}>Complete profile</button>
          </div>

          <div className="panel">
            <div className="panel-head"><h3>Account</h3></div>
            <div className="info-row"><span className="k">Email</span><span className="v">amara@email.com</span></div>
            <div className="info-row"><span className="k">Member since</span><span className="v">Jan 2026</span></div>
            <div className="info-row"><span className="k">Plan</span><span className="v">Free</span></div>
            <button className="btn btn-ghost btn-block" style={{ marginTop: 16 }}>Upgrade to Premium</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
