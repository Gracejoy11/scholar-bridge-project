import { useState } from 'react'
import AppLayout from '../components/AppLayout.jsx'
import { ScholarshipCard } from '../components/ScholarshipCard.jsx'
import { Icon } from '../components/Icon.jsx'
import { scholarships } from '../data.js'

const chips = ['All fields', 'STEM', 'Medicine', 'Business', 'Arts & Design', 'Law', 'Women in Tech']

export default function Discover() {
  const [chip, setChip] = useState('All fields')
  const [showFilters, setShowFilters] = useState(false)
  return (
    <AppLayout title="Discover scholarships" subtitle="Explore opportunities matched to your profile and interests.">
      <div className="chips">
        {chips.map(c => <button key={c} className={'chip' + (chip === c ? ' active' : '')} onClick={() => setChip(c)}>{c}</button>)}
      </div>

      <div className="mobile-filter-bar" style={{ display: 'none', marginBottom: 18 }}>
        <button 
          className="btn btn-ghost" 
          onClick={() => setShowFilters(!showFilters)} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: '12px', fontSize: '0.88rem' }}
        >
          <Icon.settings style={{ width: 16, height: 16 }} />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="disc">
        <aside className={'filters' + (showFilters ? ' open' : '')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><h3>Filters</h3><a href="#" className="clear">Clear all</a></div>
          <div className="fgroup">
            <h4>Study level</h4>
            <label className="fopt"><input type="checkbox" defaultChecked /> Undergraduate <span className="count">1.2k</span></label>
            <label className="fopt"><input type="checkbox" /> Masters <span className="count">840</span></label>
            <label className="fopt"><input type="checkbox" /> PhD / Research <span className="count">320</span></label>
          </div>
          <div className="fgroup">
            <h4>Funding</h4>
            <label className="fopt"><input type="radio" name="fund" defaultChecked /> Fully funded</label>
            <label className="fopt"><input type="radio" name="fund" /> Partially funded</label>
            <label className="fopt"><input type="radio" name="fund" /> Any</label>
          </div>
          <div className="fgroup">
            <h4>Country</h4>
            <label className="fopt"><input type="checkbox" /> Nigeria</label>
            <label className="fopt"><input type="checkbox" /> Ghana</label>
            <label className="fopt"><input type="checkbox" /> Kenya</label>
            <label className="fopt"><input type="checkbox" /> United Kingdom</label>
            <label className="fopt"><input type="checkbox" /> Canada</label>
          </div>
          <div className="fgroup">
            <h4>Deadline</h4>
            <label className="fopt"><input type="radio" name="dl" /> This week</label>
            <label className="fopt"><input type="radio" name="dl" defaultChecked /> This month</label>
            <label className="fopt"><input type="radio" name="dl" /> Any time</label>
          </div>
        </aside>

        <div className="disc-main">
          <div className="toolbar">
            <div className="count"><b>128</b> scholarships match your filters</div>
            <div className="select">Sort: Best match <Icon.chevron /></div>
          </div>
          <div className="disc-grid">
            {scholarships.map(s => <ScholarshipCard key={s.id} s={s} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}><a href="#" className="btn btn-ghost">Load more scholarships</a></div>
        </div>
      </div>
    </AppLayout>
  )
}
