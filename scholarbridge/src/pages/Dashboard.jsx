import { Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout.jsx'
import { ScholarshipRow } from '../components/ScholarshipCard.jsx'
import { Icon } from '../components/Icon.jsx'
import { scholarships, crests } from '../data.js'

export default function Dashboard() {
  const recommended = scholarships.slice(0, 4)
  return (
    <AppLayout
      title="Good afternoon, Amara 👋"
      subtitle="Ready to discover your next scholarship?"
      actions={<Link to="/discover" className="btn btn-primary">Find new matches <Icon.plus /></Link>}
    >
      <div className="kpis">
        <div className="kpi"><span className="ic ic-blue"><Icon.checkCircle /></span><div className="n">48</div><div className="l">Verified scholarships</div><div className="chg up">▲ 6 this week</div></div>
        <div className="kpi"><span className="ic ic-amber"><Icon.bookmark /></span><div className="n">18</div><div className="l">Saved scholarships</div><div className="chg up">▲ 2 new</div></div>
        <div className="kpi"><span className="ic ic-green"><Icon.file /></span><div className="n">5</div><div className="l">Applications submitted</div><div className="chg up">2 in review</div></div>
        <div className="kpi"><span className="ic ic-purple"><Icon.star /></span><div className="n">$92K</div><div className="l">Potential funding</div><div className="chg up">across matches</div></div>
      </div>

      <div className="panels">
        <div className="panel">
          <div className="panel-head"><h3>Recommended for you</h3><Link to="/discover">View all</Link></div>
          <div className="srow-list">
            {recommended.map(s => (
              <div className="srow" key={s.id}>
                <span className="logo-badge has-img"><img src={crests[s.crest]} alt={s.org} /></span>
                <div className="info"><b>{s.title}</b><small>{s.org} · {s.level}</small></div>
                <span className="pill pill-blue">{s.match}% match</span>
                <span className="amt">{s.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          <div className="panel">
            <div className="panel-head"><h3>Application progress</h3></div>
            <div className="prog"><div className="top"><span>African Future Leaders</span><b>80%</b></div><div className="bar"><span style={{ width: '80%' }} /></div></div>
            <div className="prog"><div className="top"><span>Ghana Excellence</span><b>45%</b></div><div className="bar"><span style={{ width: '45%' }} /></div></div>
            <div className="prog"><div className="top"><span>Oxford Global Scholars</span><b>20%</b></div><div className="bar"><span style={{ width: '20%' }} /></div></div>
          </div>
          <div className="panel">
            <div className="panel-head"><h3>Upcoming deadlines</h3></div>
            <div className="dl"><div className="date"><b>19</b><small>Jul</small></div><div className="info"><b>African Future Leaders</b><small>3 days left · University of Ibadan</small></div></div>
            <div className="dl"><div className="date"><b>26</b><small>Jul</small></div><div className="info"><b>North America Future Fund</b><small>6 days left · University of Toronto</small></div></div>
            <div className="dl"><div className="date"><b>01</b><small>Aug</small></div><div className="info"><b>Ghana Excellence</b><small>12 days left · University of Ghana</small></div></div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
