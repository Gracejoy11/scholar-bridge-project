import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppLayout from '../components/AppLayout.jsx'
import { Icon } from '../components/Icon.jsx'
import student from '../assets/student-portrait.webp'

// Custom icons locally defined for clean layout
const CustomIcon = {
  academic: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  preferences: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  documents: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  chat: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

export default function Profile() {
  const location = useLocation()
  const isSettingsPath = location.pathname.endsWith('/settings')
  
  const [activeTab, setActiveTab] = useState(isSettingsPath ? 'settings' : 'personal')

  useEffect(() => {
    setActiveTab(location.pathname.endsWith('/settings') ? 'settings' : 'personal')
  }, [location.pathname])

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Nmesoma Grace',
    dob: '12 March 2000',
    email: 'nmesoma.grace@gmail.com',
    gender: 'Female',
    phone: '+234 806 123 4567',
    nationality: 'Nigerian',
    country: 'Nigeria',
    languages: 'English, Igbo',
    city: 'Lagos',
    status: 'Undergraduate Student',
  })

  // Academic State
  const [academicData, setAcademicData] = useState({
    degreeLevel: 'Undergraduate',
    fieldOfStudy: 'Computer Science',
    cgpa: '3.82 / 4.00',
    graduationYear: '2027',
    institution: 'University of Ibadan',
  })

  // Preferences State
  const [preferencesData, setPreferencesData] = useState({
    destinations: ['Nigeria', 'Ghana', 'Kenya', 'Canada', 'U.K.'],
    interests: ['STEM', 'Fully funded', 'Research', 'Women in Tech'],
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    alert('Changes saved successfully!')
  }

  return (
    <AppLayout>
      {/* Profile Header */}
      <div className="profile-hdr">
        <div className="profile-hdr-left">
          <img className="profile-hdr-avatar" src={student} alt={formData.fullName} />
          <div className="profile-hdr-info">
            <h2>
              {formData.fullName}{' '}
              <span className="badge-verified">
                <Icon.checkCircle style={{ width: 14, height: 14, fill: 'none', stroke: 'currentColor' }} /> Verified
              </span>
            </h2>
            <div className="profile-hdr-meta">
              <span><Icon.mail /> {formData.email}</span>
              <span><CustomIcon.pin /> {formData.city}, {formData.country}</span>
              <span><Icon.calendar /> Joined March 2024</span>
            </div>
          </div>
        </div>
        
        <div className="profile-hdr-right">
          <div className="profile-hdr-strength">
            <div className="str-title">
              <span>Profile Strength</span>
              <span className="pct">85%</span>
            </div>
            <div className="bar">
              <span style={{ width: '85%' }} />
            </div>
            <div className="str-desc">
              Complete your profile to get better scholarship matches.
            </div>
          </div>
          <button className="btn btn-ghost" style={{ borderRadius: '12px', padding: '10px 18px', fontSize: '0.88rem' }}>
            Improve Profile
          </button>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="profile-tabs">
        <button
          className={activeTab === 'personal' ? 'active' : ''}
          onClick={() => setActiveTab('personal')}
        >
          <Icon.user /> Personal Information
        </button>
        <button
          className={activeTab === 'academic' ? 'active' : ''}
          onClick={() => setActiveTab('academic')}
        >
          <CustomIcon.academic /> Academic Background
        </button>
        <button
          className={activeTab === 'preferences' ? 'active' : ''}
          onClick={() => setActiveTab('preferences')}
        >
          <CustomIcon.preferences /> Preferences
        </button>
        <button
          className={activeTab === 'documents' ? 'active' : ''}
          onClick={() => setActiveTab('documents')}
        >
          <CustomIcon.documents /> Documents
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => setActiveTab('settings')}
        >
          <Icon.settings /> Account Settings
        </button>
      </div>

      {/* Two Column Layout: Active Tab Panel & Sidebar */}
      <div className="profile-main-layout">
        
        {/* Left Column: Forms */}
        <div className="panel" style={{ padding: '28px' }}>
          
          {/* Tab 1: Personal Information */}
          {activeTab === 'personal' && (
            <form onSubmit={handleSave}>
              <div className="profile-inputs-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    <Icon.calendar className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <div className="form-input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <div className="form-input-wrapper">
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Nationality</label>
                  <div className="form-input-wrapper">
                    <select
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    >
                      <option value="Nigerian">Nigerian</option>
                      <option value="Ghanaian">Ghanaian</option>
                      <option value="Kenyan">Kenyan</option>
                      <option value="Canadian">Canadian</option>
                      <option value="British">British</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country of Residence</label>
                  <div className="form-input-wrapper">
                    <select name="country" value={formData.country} onChange={handleChange}>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Languages</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>City</label>
                  <div className="form-input-wrapper">
                    <select name="city" value={formData.city} onChange={handleChange}>
                      <option value="Lagos">Lagos</option>
                      <option value="Ibadan">Ibadan</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Nairobi">Nairobi</option>
                      <option value="Accra">Accra</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Status</label>
                  <div className="form-input-wrapper">
                    <select name="status" value={formData.status} onChange={handleChange}>
                      <option value="Undergraduate Student">Undergraduate Student</option>
                      <option value="Graduate Student">Graduate Student</option>
                      <option value="High School Graduate">High School Graduate</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '28px', padding: '12px 30px' }}
              >
                Save Changes
              </button>
            </form>
          )}

          {/* Tab 2: Academic Background */}
          {activeTab === 'academic' && (
            <form onSubmit={handleSave}>
              <div className="profile-inputs-grid">
                <div className="form-group">
                  <label>Degree Level</label>
                  <div className="form-input-wrapper">
                    <select
                      value={academicData.degreeLevel}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, degreeLevel: e.target.value })
                      }
                    >
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Masters">Masters</option>
                      <option value="PhD">PhD</option>
                    </select>
                    <Icon.chevron className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Field of Study</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      value={academicData.fieldOfStudy}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, fieldOfStudy: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current CGPA</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      value={academicData.cgpa}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, cgpa: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Expected Graduation</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      value={academicData.graduationYear}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, graduationYear: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label>Institution</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      value={academicData.institution}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, institution: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '28px', padding: '12px 30px' }}
              >
                Save Changes
              </button>
            </form>
          )}

          {/* Tab 3: Preferences */}
          {activeTab === 'preferences' && (
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '12px' }}>Preferred Study Destinations</h4>
                  <div className="tag-list">
                    {preferencesData.destinations.map((dest) => (
                      <span className="tag" key={dest} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'var(--blue-50)', color: 'var(--navy)', borderRadius: '99px', fontSize: '0.88rem', fontWeight: '500' }}>
                        {dest}{' '}
                        <button
                          type="button"
                          onClick={() =>
                            setPreferencesData({
                              ...preferencesData,
                              destinations: preferencesData.destinations.filter((d) => d !== dest),
                            })
                          }
                          style={{ border: 'none', color: 'var(--blue-300)', padding: '0 2px', fontWeight: 'bold' }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      className="tag"
                      style={{ border: '1px dashed var(--blue-300)', background: 'none', color: 'var(--blue-300)', cursor: 'pointer', padding: '8px 14px', borderRadius: '99px', fontSize: '0.88rem' }}
                      onClick={() => {
                        const next = prompt('Enter country:')
                        if (next) {
                          setPreferencesData({
                            ...preferencesData,
                            destinations: [...preferencesData.destinations, next],
                          })
                        }
                      }}
                    >
                      + Add Country
                    </button>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '12px' }}>Academic Interests</h4>
                  <div className="tag-list">
                    {preferencesData.interests.map((interest) => (
                      <span className="tag" key={interest} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'var(--blue-50)', color: 'var(--navy)', borderRadius: '99px', fontSize: '0.88rem', fontWeight: '500' }}>
                        {interest}{' '}
                        <button
                          type="button"
                          onClick={() =>
                            setPreferencesData({
                              ...preferencesData,
                              interests: preferencesData.interests.filter((i) => i !== interest),
                            })
                          }
                          style={{ border: 'none', color: 'var(--blue-300)', padding: '0 2px', fontWeight: 'bold' }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      className="tag"
                      style={{ border: '1px dashed var(--blue-300)', background: 'none', color: 'var(--blue-300)', cursor: 'pointer', padding: '8px 14px', borderRadius: '99px', fontSize: '0.88rem' }}
                      onClick={() => {
                        const next = prompt('Enter interest:')
                        if (next) {
                          setPreferencesData({
                            ...preferencesData,
                            interests: [...preferencesData.interests, next],
                          })
                        }
                      }}
                    >
                      + Add Interest
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '28px', padding: '12px 30px' }}
              >
                Save Changes
              </button>
            </form>
          )}

          {/* Tab 4: Documents */}
          {activeTab === 'documents' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '18px' }}>Manage Documents</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Upload certificates, letters of recommendation, CV and other supporting documents.
              </p>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ padding: '20px', border: '2px dashed var(--blue-100)', borderRadius: '12px', textAlign: 'center', background: 'var(--cream)' }}>
                  <CustomIcon.documents style={{ width: 36, height: 36, color: 'var(--blue-300)', margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '0.96rem', marginBottom: '6px' }}>Upload a new document</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '14px' }}>
                    PDF, JPG, PNG or DOCX up to 10MB
                  </p>
                  <button type="button" className="btn btn-primary btn-sm" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                    Select File
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Account Settings */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div className="form-group">
                  <label>Account Email</label>
                  <div className="form-input-wrapper">
                    <input type="email" disabled value={formData.email} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Password</label>
                  <div className="form-input-wrapper">
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <div className="form-input-wrapper">
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <div className="form-input-wrapper">
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '28px', padding: '12px 30px' }}
              >
                Update Password
              </button>
            </form>
          )}

        </div>

        {/* Right Column: Widgets */}
        <div style={{ display: 'grid', gap: '24px' }}>
          
          {/* Widget 1: Profile Completion */}
          <div className="panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Profile Completion</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '14px 0' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--navy)', fontFamily: 'Poppins', lineHeight: '1' }}>85%</span>
            </div>
            
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.4', marginBottom: '18px' }}>
              Almost there! Complete the remaining sections to improve your scholarship matches.
            </p>

            <div className="checklist-widget">
              <div className="checklist-item checked">
                <span className="checklist-circle checked" />
                <span>Personal Information</span>
              </div>
              <div className="checklist-item checked">
                <span className="checklist-circle checked" />
                <span>Academic Background</span>
              </div>
              <div className="checklist-item checked">
                <span className="checklist-circle checked" />
                <span>Preferences</span>
              </div>
              <div className="checklist-item checked">
                <span className="checklist-circle checked" />
                <span>Documents</span>
              </div>
              <div className="checklist-item">
                <span className="checklist-circle" />
                <span>Account Settings</span>
              </div>
            </div>

            <button className="btn btn-ghost btn-block" style={{ marginTop: '16px', borderRadius: '12px' }}>
              Complete Profile
            </button>
          </div>

          {/* Widget 2: Profile Overview */}
          <div className="panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '14px' }}>Profile Overview</h3>
            
            <div className="info-row">
              <span className="k">Member Since</span>
              <span className="v">March 2024</span>
            </div>
            <div className="info-row">
              <span className="k">Scholarships Applied</span>
              <span className="v">12</span>
            </div>
            <div className="info-row">
              <span className="k">Applications in Review</span>
              <span className="v">5</span>
            </div>
            <div className="info-row">
              <span className="k">Shortlisted</span>
              <span className="v">3</span>
            </div>
            <div className="info-row">
              <span className="k">Saved Scholarships</span>
              <span className="v">18</span>
            </div>
          </div>

          {/* Widget 3: Need Help */}
          <div className="panel" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ background: 'var(--blue-50)', color: 'var(--navy)', width: '42px', height: '42px', borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <CustomIcon.chat style={{ width: '22px', height: '22px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Need Help?</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.84rem', lineHeight: '1.4', marginBottom: '14px' }}>
                Our support team is here to help you with any questions.
              </p>
              <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '10px' }}>
                Contact Support
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Layout: Recent Activity and Document Status */}
      <div className="profile-bottom-layout">
        
        {/* Recent Activity */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="panel-head" style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Recent Activity</h3>
            <a href="#" style={{ fontSize: '0.88rem', color: 'var(--blue-300)' }}>View all</a>
          </div>
          
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon blue">A</div>
              <div className="activity-info">
                <b>Applied to African Excellence Scholarship</b>
                <small>University of Ghana</small>
              </div>
              <span className="activity-time">2 days ago</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon green">
                <Icon.bookmark style={{ width: '16px', height: '16px', fill: 'currentColor' }} />
              </div>
              <div className="activity-info">
                <b>Saved Future Leaders Scholarship</b>
                <small>University of Nairobi</small>
              </div>
              <span className="activity-time">5 days ago</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon amber">
                <Icon.user style={{ width: '16px', height: '16px' }} />
              </div>
              <div className="activity-info">
                <b>Profile updated successfully</b>
                <small>Personal information updated</small>
              </div>
              <span className="activity-time">1 week ago</span>
            </div>
          </div>
        </div>

        {/* Document Status */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="panel-head" style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Document Status</h3>
            <a href="#" style={{ fontSize: '0.88rem', color: 'var(--blue-300)' }}>View all</a>
          </div>

          <div className="doc-list">
            <div className="doc-item">
              <div className="doc-info">
                <CustomIcon.documents />
                <div>
                  <b>CV / Resume</b>
                  <small>Uploaded 12 Mar 2026</small>
                </div>
              </div>
              <span className="badge-status verified">Verified</span>
            </div>

            <div className="doc-item">
              <div className="doc-info">
                <CustomIcon.documents />
                <div>
                  <b>Academic Transcript</b>
                  <small>Uploaded 12 Mar 2026</small>
                </div>
              </div>
              <span className="badge-status verified">Verified</span>
            </div>

            <div className="doc-item">
              <div className="doc-info">
                <CustomIcon.documents />
                <div>
                  <b>National ID / Passport</b>
                  <small>Uploaded 14 Mar 2026</small>
                </div>
              </div>
              <span className="badge-status verified">Verified</span>
            </div>

            <div className="doc-item">
              <div className="doc-info">
                <CustomIcon.documents style={{ color: 'var(--amber)' }} />
                <div>
                  <b>Proof of Enrollment</b>
                  <small>Not uploaded yet</small>
                </div>
              </div>
              <span className="badge-status pending">Pending</span>
            </div>
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
