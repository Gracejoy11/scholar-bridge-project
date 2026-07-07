import { useState } from 'react'
import AppLayout from '../components/AppLayout.jsx'
import { Icon } from '../components/Icon.jsx'
import { notifications } from '../data.js'

const meta = {
  match: { ic: Icon.checkCircle, cls: 'ic-blue' },
  deadline: { ic: Icon.calendar, cls: 'ic-amber' },
  status: { ic: Icon.file, cls: 'ic-purple' },
  award: { ic: Icon.star, cls: 'ic-green' },
  system: { ic: Icon.settings, cls: 'ic-blue' },
}

export default function Notifications() {
  const [filter, setFilter] = useState('all')
  const [items, setItems] = useState(notifications)
  const shown = filter === 'unread' ? items.filter(n => n.unread) : items
  const markAll = () => setItems(items.map(n => ({ ...n, unread: false })))

  return (
    <AppLayout
      title="Notifications"
      subtitle="Stay on top of new matches, deadlines and application updates."
      actions={<button className="btn btn-ghost" onClick={markAll}>Mark all as read</button>}
    >
      <div className="notif-tabs">
        <button className={'chip' + (filter === 'all' ? ' active' : '')} onClick={() => setFilter('all')}>All ({items.length})</button>
        <button className={'chip' + (filter === 'unread' ? ' active' : '')} onClick={() => setFilter('unread')}>Unread ({items.filter(n => n.unread).length})</button>
      </div>

      <div style={{ maxWidth: 780 }}>
        {shown.map(n => {
          const m = meta[n.type] || meta.system
          return (
            <div key={n.id} className={'notif' + (n.unread ? ' unread' : '')}>
              <span className={'nic ' + m.cls}><m.ic /></span>
              <div className="nbody">
                <b>{n.title}</b>
                <p>{n.body}</p>
                <span className="time">{n.time}</span>
              </div>
              {n.unread && <span className="unread-dot" />}
            </div>
          )
        })}
        {shown.length === 0 && <p style={{ color: 'var(--muted)', padding: 30, textAlign: 'center' }}>You're all caught up. No unread notifications.</p>}
      </div>
    </AppLayout>
  )
}
