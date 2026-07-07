import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Landing from './pages/Landing.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Discover from './pages/Discover.jsx'
import MyScholarships from './pages/MyScholarships.jsx'
import ScholarshipDetail from './pages/ScholarshipDetail.jsx'
import Profile from './pages/Profile.jsx'
import Notifications from './pages/Notifications.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// HashRouter chosen so the build runs from a file:// open and on GitHub Pages
// without extra server rewrites — navigation stays smooth and client-side.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/scholarships" element={<MyScholarships />} />
        <Route path="/scholarship/:id" element={<ScholarshipDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
