import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import { crests, fundingClass } from '../data.js'
import { useState } from 'react'

// Grid card (Discover / landing)
export function ScholarshipCard({ s }) {
  const [saved, setSaved] = useState(false)
  return (
    <article className="scard">
      <div className="scard-top">
        <span className="logo-badge has-img"><img src={crests[s.crest]} alt={s.org} /></span>
        <button className="save" aria-label="Save" onClick={() => setSaved(v => !v)} style={{ color: saved ? 'var(--navy)' : '' }}><Icon.bookmark /></button>
      </div>
      <h3>{s.title}</h3>
      <p className="org">{s.org}</p>
      <div className="amount">{s.amount}<small>&nbsp;{s.funding}</small></div>
      <div className="tags">
        <span className={'pill ' + fundingClass(s.funding)} style={{ fontSize: '.72rem' }}>{s.funding}</span>
        <span className="tag">{s.flag} {s.country}</span>
        <span className="tag">{s.level}</span>
      </div>
      <div className="scard-foot">
        <span className="deadline"><Icon.calendar /> {s.deadline}</span>
        <Link to={'/scholarship/' + s.id} className="btn btn-primary">View</Link>
      </div>
    </article>
  )
}

// Wide list row (dashboard / my scholarships) — mirrors the mockup row layout
export function ScholarshipRow({ s, cta = 'View Details' }) {
  return (
    <article className="acard">
      <span className="logo-badge has-img"><img src={crests[s.crest]} alt={s.org} /></span>
      <div className="body">
        <h3>{s.title} {s.verified && <span className="pill pill-green" style={{ fontSize: '.68rem', verticalAlign: 'middle' }}>verified</span>}</h3>
        <p className="org">{s.org}</p>
        <div className="meta">
          <span>{s.flag} {s.country}</span>
          <span><Icon.user /> {s.level}</span>
          <span><Icon.calendar /> {s.deadline}</span>
        </div>
      </div>
      <div className="side">
        <span className={'pill ' + fundingClass(s.funding)}>{s.funding}</span>
        <span className="amt">{s.amount}</span>
        <Link to={'/scholarship/' + s.id} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '.86rem' }}>{cta}</Link>
      </div>
    </article>
  )
}
