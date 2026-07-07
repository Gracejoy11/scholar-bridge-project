import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout.jsx'
import { ScholarshipRow } from '../components/ScholarshipCard.jsx'
import { Icon } from '../components/Icon.jsx'
import { scholarships } from '../data.js'

export default function MyScholarships() {
  const [tab, setTab] = useState('saved')
  const saved = scholarships.slice(0, 5)
  const applied = scholarships.slice(0, 3)
  const won = scholarships.slice(4, 6)
  const map = { saved, applied, won }

  return (
    <AppLayout
      title="My scholarships"
      subtitle="Manage your saved, applied and archived scholarships."
      actions={<Link to="/discover" className="btn btn-primary">Find more <Icon.plus /></Link>}
    >
      <div className="tabs">
        <div className={'tab' + (tab === 'saved' ? ' active' : '')} onClick={() => setTab('saved')}>Saved <span className="badge">{saved.length}</span></div>
        <div className={'tab' + (tab === 'applied' ? ' active' : '')} onClick={() => setTab('applied')}>Applied <span className="badge">{applied.length}</span></div>
        <div className={'tab' + (tab === 'won' ? ' active' : '')} onClick={() => setTab('won')}>Won <span className="badge">{won.length}</span></div>
      </div>

      <div className="page-fade" key={tab}>
        {map[tab].map(s => (
          <ScholarshipRow key={s.id} s={s} cta={tab === 'saved' ? 'Start application' : 'View Details'} />
        ))}
      </div>
    </AppLayout>
  )
}
