import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { ScholarshipCard } from '../components/ScholarshipCard.jsx'
import { Icon } from '../components/Icon.jsx'
import { scholarships, crests } from '../data.js'
import { useEffect, useRef } from 'react'
import s1 from '../assets/student-1.jpg'
import s2 from '../assets/student-2.jpg'
import s3 from '../assets/student-3.jpg'
import s4 from '../assets/student-4.jpg'

function CountUp({ end, suffix = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let cur = 0; const step = end / 40
      const tick = () => { cur += step; if (cur >= end) { el.textContent = end.toLocaleString() + suffix; return } el.textContent = Math.floor(cur).toLocaleString() + suffix; requestAnimationFrame(tick) }
      tick(); io.disconnect()
    }, { threshold: .5 })
    io.observe(el); return () => io.disconnect()
  }, [end, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Landing() {
  const featured = scholarships.slice(0, 3)
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Your bridge to global opportunities</p>
            <h1>Discover Scholarships <span className="hl">Tailored Just</span> for You</h1>
            <p className="lead">Match with thousands of verified scholarships built around your field, background and goals. No more endless searching, just opportunities that fit.</p>
            <div className="searchbar">
              <Icon.search />
              <input placeholder="Search by field, level or keyword…" />
              <Link to="/discover" className="btn btn-primary">Search</Link>
            </div>
            <div className="hero-tags">
              <span>Popular:</span>
              <Link to="/discover">Engineering</Link>
              <Link to="/discover">Medicine</Link>
              <Link to="/discover">Fully Funded</Link>
              <Link to="/discover">STEM Women</Link>
            </div>
          </div>

          <div className="hero-collage">
            <div className="blob" />
            <div className="ph p1"><img src={s1} alt="Student" /></div>
            <div className="ph p2"><img src={s2} alt="Student" /></div>
            <div className="ph p3"><img src={s3} alt="Student" /></div>
            <div className="ph p4"><img src={s4} alt="Student" /></div>
            <div className="hero-float hf-c1">
              <span className="ic ic-green"><Icon.check /></span>
              <div><b>98% match</b><small>Toronto Future Fund</small></div>
            </div>
            <div className="hero-float hf-c2">
              <span className="ic ic-amber"><Icon.star /></span>
              <div><b>$2.4M+</b><small>Awarded this month</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="wrap">
          <p>Trusted by students placed at leading universities worldwide</p>
          <div className="trust-row">
            {['ibadan', 'ghana', 'nairobi', 'makerere', 'oxford', 'toronto', 'melbourne'].map(k => (
              <img key={k} src={crests[k]} alt={k} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat"><div className="n"><CountUp end={5000} suffix="+" /></div><div className="l">Active Scholarships</div></div>
          <div className="stat"><div className="n"><CountUp end={20000} suffix="+" /></div><div className="l">Students Helped</div></div>
          <div className="stat"><div className="n">$48M+</div><div className="l">Total Funding</div></div>
          <div className="stat"><div className="n"><CountUp end={95} suffix="%" /></div><div className="l">Match Accuracy</div></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three steps to your next scholarship</h2>
            <p>Build your profile once and let ScholarBridge do the matching.</p>
          </div>
          <div className="steps">
            <div className="step"><span className="num">01</span><span className="ic"><Icon.user /></span><h3>Create your profile</h3><p>Tell us your field, level, location and interests. It takes under three minutes.</p></div>
            <div className="step"><span className="num">02</span><span className="ic"><Icon.compass /></span><h3>Get matched instantly</h3><p>Our engine ranks scholarships by how well they fit you, so the best rise to the top.</p></div>
            <div className="step"><span className="num">03</span><span className="ic"><Icon.checkCircle /></span><h3>Apply &amp; win</h3><p>Track deadlines, save favourites and apply, all from one dashboard.</p></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)' }}>
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Featured</p><h2>Scholarships closing soon</h2><p>Hand-picked opportunities with upcoming deadlines.</p></div>
          <div className="grid-cards">{featured.map(s => <ScholarshipCard key={s.id} s={s} />)}</div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/discover" className="btn btn-ghost">Browse all scholarships <Icon.arrow /></Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Explore by field</p><h2>Find funding in your discipline</h2></div>
          <div className="cats">
            <Link to="/discover" className="cat"><span className="ic"><Icon.grid /></span><h4>STEM</h4><p>1,240 awards</p></Link>
            <Link to="/discover" className="cat"><span className="ic"><Icon.file /></span><h4>Business</h4><p>870 awards</p></Link>
            <Link to="/discover" className="cat"><span className="ic"><Icon.heart /></span><h4>Medicine</h4><p>640 awards</p></Link>
            <Link to="/discover" className="cat"><span className="ic"><Icon.compass /></span><h4>Arts &amp; Design</h4><p>512 awards</p></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line-2)' }}>
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Success stories</p><h2>Students who found their fit</h2></div>
          <div className="tgrid">
            <div className="tcard"><div className="stars">★★★★★</div><p>"I'd given up on funding for grad school. ScholarBridge matched me with three scholarships in a week, and I won two."</p><div className="tperson"><img src={s2} alt="" /><div><b>Amara Okafor</b><small>MSc Data Science</small></div></div></div>
            <div className="tcard"><div className="stars">★★★★★</div><p>"The deadline tracker alone saved my application. Everything in one dashboard instead of twelve open tabs."</p><div className="tperson"><img src={s1} alt="" /><div><b>Daniel Mensah</b><small>BEng Mechanical</small></div></div></div>
            <div className="tcard"><div className="stars">★★★★★</div><p>"As a first-generation student I had no idea where to start. The matching felt like a personal advisor who knew my situation."</p><div className="tperson"><img src={s3} alt="" /><div><b>Leila Haddad</b><small>MD Candidate</small></div></div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Your scholarship is waiting</h2>
            <p>Join over 20,000 students who stopped searching and started matching. It's free to create your profile.</p>
            <div className="cta-actions">
              <Link to="/signup" className="btn btn-light">Create free account</Link>
              <Link to="/discover" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,.4)', color: '#fff' }}>Browse scholarships</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
