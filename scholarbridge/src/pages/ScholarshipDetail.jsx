import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppLayout from '../components/AppLayout.jsx'
import { Icon } from '../components/Icon.jsx'
import { scholarships, crests, fundingClass } from '../data.js'

const tabs = ['Overview', 'Benefits', 'Eligibility', 'Requirements', 'How to apply', 'Timeline']
const benefits = [
  { ic: Icon.cash, cls: 'ic-green', b: 'Full tuition coverage', s: '100% tuition fees covered' },
  { ic: Icon.plane, cls: 'ic-blue', b: 'Travel allowance', s: 'Round-trip airfare provided' },
  { ic: Icon.home, cls: 'ic-amber', b: 'Accommodation', s: 'On-campus accommodation' },
  { ic: Icon.heart, cls: 'ic-purple', b: 'Health insurance', s: 'Comprehensive health cover' },
]

export default function ScholarshipDetail() {
  const { id } = useParams()
  const [tab, setTab] = useState('Overview')
  const s = scholarships.find(x => x.id === id) || scholarships[0]

  return (
    <AppLayout>
      <Link to="/scholarships" className="back-link"><Icon.arrowLeft /> Back to My Scholarships</Link>

      <div className="detail-grid">
        <div>
          <div className="detail-hero">
            <div className="top">
              <span className="logo-badge has-img" style={{ width: 66, height: 66 }}><img src={crests[s.crest]} alt={s.org} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></span><div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '1.4rem' }}>{s.title} <span className={'pill ' + fundingClass(s.funding)} style={{ fontSize: '.72rem', verticalAlign: 'middle' }}>{s.funding}</span></h2>
                <p className="org">{s.org}</p>
              </div>
            </div>
            <div className="detail-tabs">
              {tabs.map(t => <div key={t} className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)} style={{ padding: '10px 14px', fontSize: '.9rem' }}>{t}</div>)}
            </div>

            <h3 style={{ fontSize: '1.1rem', marginBottom: 10 }}>About the scholarship</h3>
            <p style={{ color: 'var(--muted)' }}>
              The {s.title} at {s.org} is designed to support bright and ambitious students who demonstrate outstanding academic potential, leadership qualities, and a commitment to making a positive impact in their communities. Awardees join a global network of scholars and receive mentorship throughout their studies.
            </p>
          </div>

          <div className="panel" style={{ marginTop: 24 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 16 }}>What you'll receive</h3>
            <div className="benefit-grid">
              {benefits.map(x => (
                <div className="benefit" key={x.b}>
                  <span className={'bic ' + x.cls}><x.ic width="20" height="20" /></span>
                  <div><b>{x.b}</b><small>{x.s}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right rail */}
        <div style={{ display: 'grid', gap: 24 }}>
          <div className="panel">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div className="match-ring" style={{ '--p': s.match }}><div className="in">{s.match}%</div></div>
              <div><b style={{ fontFamily: 'Poppins', color: 'var(--green)' }}>Excellent match!</b><p style={{ color: 'var(--muted)', fontSize: '.88rem', marginTop: 4 }}>This scholarship aligns very well with your academic profile and preferences.</p></div>
            </div>
            <button className="btn btn-primary btn-block" style={{ marginTop: 18 }}>Apply now <Icon.arrow /></button>
            <button className="btn btn-ghost btn-block" style={{ marginTop: 10 }}>Download guideline</button>
          </div>

          <div className="panel">
            <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Key information</h3>
            <div className="info-row"><span className="k">Scholarship type</span><span className="v">{s.type}</span></div>
            <div className="info-row"><span className="k">Study level</span><span className="v">{s.level}</span></div>
            <div className="info-row"><span className="k">Fields</span><span className="v">{s.field}</span></div>
            <div className="info-row"><span className="k">Institution</span><span className="v">{s.org}</span></div>
            <div className="info-row"><span className="k">Country</span><span className="v">{s.country}</span></div>
            <div className="info-row"><span className="k">Deadline</span><span className="v" style={{ color: 'var(--red)' }}>{s.deadline}</span></div>
          </div>

          <div className="panel">
            <h3 style={{ fontSize: '1.05rem', marginBottom: 14 }}>Quick eligibility check</h3>
            {['African citizen', 'Good academic record', 'Leadership potential', 'Community involvement'].map(x => (
              <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
                <span style={{ color: 'var(--green)' }}><Icon.checkCircle width="20" height="20" /></span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '.92rem', flex: 1 }}>{x}</span>
                <span className="pill pill-green">Yes</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
