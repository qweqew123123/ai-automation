import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../components/Aurora.jsx';
import {
  ArrowUpRight, ArrowRight, BusFront, Users, Route, MapPinned, Radio, Siren,
  Check, LayoutDashboard, ShieldAlert, ShieldCheck, Smartphone, QrCode,
  BadgeCheck, Activity, Flag, Eye, Gauge, Crosshair, Ticket, Navigation,
  ChevronDown, ChevronRight, Play,
} from 'lucide-react';
import './FireGuardVR.css';
import './BusDriver.css';
import '../components/HowItWorks.css';

const challenges = [
  ['Fleet Visibility', BusFront, 'Track and manage vehicles and journeys from a connected operational view.'],
  ['Driver Safety', ShieldAlert, 'Monitor driver behavior and safety conditions while journeys are in progress.'],
  ['Passenger Security', ShieldCheck, 'Make passenger boarding more controlled and secure with verified access.'],
  ['Operational Complexity', LayoutDashboard, 'Bring administration, driver workflows and passenger experiences into one connected system.'],
];

const BUS_HOW_STEPS = [
  { number: '01', title: 'Configure operations', description: 'Set up transportation operations, vehicles, drivers and journey information.', image: '/images/bus-how-01.jpg', label: 'FLEET SETUP' },
  { number: '02', title: 'Assign drivers & vehicles', description: 'Connect drivers and vehicles to the required journeys with schedules and manifests.', image: '/images/bus-how-02.jpg', label: 'DRIVER ASSIGNMENT' },
  { number: '03', title: 'Verify access', description: 'Verify driver and passenger access before boarding begins.', image: '/images/bus-how-03.jpg', label: 'ACCESS CHECK' },
  { number: '04', title: 'Start the journey', description: 'Begin the journey with the assigned driver and vehicle, live from the first stop.', image: '/images/bus-how-04.jpg', label: 'JOURNEY LIVE' },
  { number: '05', title: 'Board with dynamic QR', description: 'Passengers use secure dynamic QR-based boarding at every pickup stop.', image: '/images/bus-how-05.jpg', label: 'QR BOARDING' },
  { number: '06', title: 'Monitor in real time', description: 'Operations teams monitor journeys, stops and relevant safety information live.', image: '/images/bus-how-06.jpg', label: 'LIVE MONITORING' },
  { number: '07', title: 'Surface safety alerts', description: 'Safety or operational events are surfaced for attention and escalation.', image: '/images/bus-how-07.jpg', label: 'SAFETY ALERTS' },
  { number: '08', title: 'Complete & record', description: 'Close the journey and retain the relevant operational information for review.', image: '/images/bus-how-08.jpg', label: 'JOURNEY RECORD' },
];

const BUS_STEP_DURATION = 5.6;

const journeyNodes = [
  [LayoutDashboard, 'ADMIN', 'Plan and manage operations.'],
  [Smartphone, 'DRIVER', 'Receive and execute assigned journeys.'],
  [BusFront, 'VEHICLE', 'Connect the vehicle to the journey.'],
  [Ticket, 'PASSENGER', 'Verify and board securely.'],
  [Navigation, 'JOURNEY', 'Track the active transportation journey.'],
  [Activity, 'MONITORING', 'Maintain operational visibility.'],
  [Flag, 'COMPLETION', 'Complete the journey with connected records.'],
];

const useCases = [
  ['Corporate Transportation', 'Daily Commute', 'Staff', 'Run daily employee commutes with assigned vehicles, verified boarding and live journey visibility.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop'],
  ['Factories & Campuses', 'Shift-Based', 'Industrial', 'Coordinate shift-based movement across large campuses with scheduled routes and rosters.', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop'],
  ['Staff Transport Operators', 'Multi-Route', 'Operators', 'Operate multi-route staff transport with driver assignments, manifests and monitoring.', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&auto=format&fit=crop'],
  ['Schools & Universities', 'Students', 'Verified Boarding', 'Manage student movement with controlled boarding and clear operational oversight.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop'],
];

function mulberry(seed) {
  let a = seed * 2654435761 % 4294967296;
  return () => {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function QrPattern({ seed }) {
  const rand = mulberry(seed * 97 + 13);
  const cells = [];
  for (let i = 0; i < 144; i++) cells.push(rand() > 0.52);
  return (
    <div className="if-qr-grid">
      {cells.map((on, i) => <i key={i} className={on ? 'on' : ''} />)}
    </div>
  );
}

const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function BusHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const step = BUS_HOW_STEPS[activeStep];

  useEffect(() => {
    const t = setInterval(() => setActiveStep(prev => (prev + 1) % BUS_HOW_STEPS.length), BUS_STEP_DURATION * 1000);
    return () => clearInterval(t);
  }, [activeStep]);

  return (
    <section className="how bus-hiw" id="how">
      <div className="section-label">HOW IT WORKS</div>
      <div className="two-col">
        <h2>From fleet management<br />to a <em>completed journey.</em></h2>
        <p className="lead">IntelliFleet connects the operational steps behind every journey, from configuration and driver assignment to passenger boarding, monitoring and completion.</p>
      </div>
      <div className="hiw-grid">
        <div className="hiw-visual">
          <AnimatePresence>
            <motion.div
              key={activeStep}
              className="hiw-visual-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="hiw-image">
                <img src={step.image} alt={step.title} loading="lazy" />
                <span className="hiw-image-tag">{step.number} — {step.label}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hiw-steps">
          {BUS_HOW_STEPS.map((s, i) => (
            <div
              className={'hiw-step' + (i === activeStep ? ' active' : '')}
              key={s.number}
              onClick={() => setActiveStep(i)}
              role="button"
              aria-expanded={i === activeStep}
            >
              <div className="hiw-step-top">
                <span className="hiw-num">{s.number}</span>
                <b className="hiw-step-title">{s.title}</b>
                {i === activeStep ? <ChevronDown size={17} /> : <ChevronRight size={17} />}
              </div>
              <AnimatePresence initial={false}>
                {i === activeStep && (
                  <motion.p
                    className="hiw-step-desc"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {s.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="hiw-line">
                {i === activeStep && (
                  <motion.span
                    className="hiw-line-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: BUS_STEP_DURATION, ease: 'linear' }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusDriver() {
  const [con, setCon] = useState(null);
  const [qrSecs, setQrSecs] = useState(30);
  const [qrCycle, setQrCycle] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setQrSecs(s => {
        if (s <= 1) { setQrCycle(c => c + 1); return 30; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* 01 — HERO (layout preserved) */}
      <section className="hero fg-hero">
        <div className="hero-copy">
          <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>IntelliFleet</b></div>
          <div className="eyebrow"><span className="dot" /> INTELLIFLEET</div>
          <h1>Smarter fleets.<br /><span>Safer journeys.</span><br />Better operations.</h1>
          <p>Manage fleets, improve driver safety, secure passenger boarding, and monitor every journey from one connected platform.</p>
          <div className="actions">
            <button className="primary" onClick={() => go('contact')}>Request a Demo <ArrowUpRight size={18} /></button>
            <button className="textbtn" onClick={() => go('experiences')}>Explore IntelliFleet <ArrowRight size={17} /></button>
          </div>
        </div>
        <div className="bd-hero-stage bd-hero-stage--rich">
          <div className="bd-hero-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1} blend={0.55} /></div>
          <motion.div className="bd-v4 bd-v4--rich" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div className="bd-v4-card" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="bd-v4-head"><span><Route size={14} /> Koramangala → Hebbal</span><motion.span className="bd-v4-live" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 1.6, repeat: Infinity }}><motion.i className="bd-live" animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }} transition={{ duration: 1.2, repeat: Infinity }} /> Running</motion.span></div>
              <div className="bd-v4-timeline">
                <div className="bd-v4-line" />
                <motion.div className="bd-v4-fill" initial={{ height: '0%' }} animate={{ height: ['0%', '48%', '96%', '96%', '0%'] }} transition={{ duration: 4.5, times: [0, 0.28, 0.56, 0.82, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.7 }} />
                <motion.i className="bd-v4-bus" animate={{ top: ['12%', '46%', '86%', '12%'] }} transition={{ duration: 4.5, times: [0, 0.28, 0.56, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.7 }}><BusFront size={12} /></motion.i>
                <div className="bd-v4-stop done"><i><Check size={10} strokeWidth={3} /></i><div><b>Koramangala</b><small>08:00 · 3 picked</small></div><span className="bd-v4-time">08:00</span></div>
                <div className="bd-v4-stop active"><motion.i animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.2, repeat: Infinity }}><BusFront size={11} /></motion.i><div><b>HSR Layout</b><small>08:22 · Boarding</small></div><motion.span className="bd-v4-eta" animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 1, repeat: Infinity }}>ETA 3 min</motion.span></div>
                <div className="bd-v4-stop"><i /><div><b>Hebbal</b><small>09:10 · Next · 4 stops</small></div><span className="bd-v4-next">Next</span></div>
              </div>
              <div className="bd-v4-foot"><span><Users size={12} /> 5/7 passengers</span><motion.span className="bd-v4-running" animate={{ opacity: [1, 0.8, 1] }} transition={{ duration: 1.8, repeat: Infinity }}>Running • 42 km/h</motion.span></div>
              <div className="bd-v4-avatars"><span>A</span><span>P</span><span>R</span><small>+2</small></div>
            </motion.div>
          </motion.div>
          <motion.div className="bd-v4-chip bd-v4-chip--map" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}><MapPinned size={12} /> Live Map <small>2 buses</small></motion.div>
        </div>
      </section>

      {/* 02 — THE CHALLENGE (layout preserved) */}
      <section className="bd-what" id="problem">
        <div className="bd-what-left">
          <span className="bd-what-label">THE CHALLENGE</span>
          <h2>Managing transportation<br />takes more than tracking vehicles.</h2>
          <p>Transportation operations need visibility across fleets, drivers, passengers and daily journeys. IntelliFleet connects these moving parts into one coordinated platform.</p>
        </div>
        <div className="bd-what-grid">
          {challenges.map(([t, I, d]) => (
            <div className="bd-what-card" key={t}>
              <span className="bd-what-icon"><I size={20} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — THREE CONNECTED EXPERIENCES */}
      <section className="if-exp" id="experiences">
        <div className="section-label">ONE CONNECTED PLATFORM</div>
        <div className="two-col">
          <h2>Three experiences.<br /><em>One connected operation.</em></h2>
          <p className="lead">IntelliFleet connects the people and operations behind every journey through dedicated experiences for administrators, drivers and passengers.</p>
        </div>
        <div className="if-con" onMouseLeave={() => setCon(null)}>
          <div className={'if-con-card' + (con === 'admin' ? ' on' : '')} onMouseEnter={() => setCon('admin')} onClick={() => setCon(con === 'admin' ? null : 'admin')}>
            <div className="if-con-flex">
              <div className="if-con-text">
                <small>01</small>
                <b>ADMIN COMMAND CENTER</b>
                <div className="if-con-desc"><p>Manage the entire operation from one centralized platform with fleet visibility, driver management, journey monitoring and operational oversight.</p></div>
                <div className="if-con-extra"><div><p>Every assignment, scan and alert stays recorded, giving operations a complete trail from roster to reports.</p></div></div>
                <div className="if-con-viewmore"><span>View More</span><span className="if-con-go" aria-hidden="true"><ArrowUpRight size={14} /></span></div>
              </div>
              <div className="if-con-img"><img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format&fit=crop" alt="Bus fleet operations" loading="lazy" /></div>
            </div>
          </div>
          <div className={'if-con-card' + (con === 'driver' ? ' on' : '')} onMouseEnter={() => setCon('driver')} onClick={() => setCon(con === 'driver' ? null : 'driver')}>
            <div className="if-con-flex">
              <div className="if-con-text">
                <small>02</small>
                <b>DRIVER APPLICATION</b>
                <div className="if-con-desc"><p>Keep drivers connected with assigned journeys, trip information and tools that support safer transportation operations.</p></div>
                <div className="if-con-extra"><div><p>Drivers see stop sequences, ETAs and advisories as they drive, with safety signals shared back to the operations team.</p></div></div>
                <div className="if-con-viewmore"><span>View More</span><span className="if-con-go" aria-hidden="true"><ArrowUpRight size={14} /></span></div>
              </div>
              <div className="if-con-img"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop" alt="Driver on duty" loading="lazy" /></div>
            </div>
          </div>
          <div className={'if-con-card' + (con === 'passenger' ? ' on' : '')} onMouseEnter={() => setCon('passenger')} onClick={() => setCon(con === 'passenger' ? null : 'passenger')}>
            <div className="if-con-flex">
              <div className="if-con-text">
                <small>03</small>
                <b>PASSENGER APPLICATION</b>
                <div className="if-con-desc"><p>Give passengers a simple and secure boarding experience with dynamic QR-based verification.</p></div>
                <div className="if-con-extra"><div><p>Each code links the passenger to the right journey and manifest, keeping boarding verified at every pickup stop.</p></div></div>
                <div className="if-con-viewmore"><span>View More</span><span className="if-con-go" aria-hidden="true"><ArrowUpRight size={14} /></span></div>
              </div>
              <div className="if-con-img"><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop" alt="Passengers travelling together" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — HOW INTELLIFLEET WORKS */}
      <BusHowItWorks />

      {/* 05 — SAFETY & SECURITY */}
      <section className="if-safety">
        <div className="section-label">SAFETY & SECURITY</div>
        <h2>Built around safer journeys.</h2>
        <div className="if-safe-stage">
          <div className="if-safe-grid">
            <div className="if-safe-card if-safe-lg">
              <h3>AI Driver Safety</h3>
              <p>Monitor driver behavior and safety conditions during active journeys.</p>
              <div className="if-safe-visual">
                <div className="if-safe-monitor">
                  <div className="if-safe-cam"><span className="if-safe-avatar">AV</span><i className="if-safe-corner tl" /><i className="if-safe-corner tr" /><i className="if-safe-corner bl" /><i className="if-safe-corner br" /><span className="if-safe-rec"><i />MONITORING</span></div>
                  <div className="if-safe-rows">
                    <div className="if-safe-row"><span>BUS-001 · On journey</span><span className="if-pill on">Safety Clear</span></div>
                    <div className="if-safe-row"><span>Seat-belt · Speed 42 km/h</span><span className="if-pill on">OK</span></div>
                    <div className="if-safe-row"><span>Phone use · 08:24</span><span className="if-pill warn">Flagged</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="if-safe-card if-safe-lg">
              <h3>Secure Passenger Boarding</h3>
              <p>Verify passengers and control boarding with dynamic QR-based access.</p>
              <div className="if-safe-visual">
                <div className="if-safe-pass">
                  <div className="if-safe-pass-head"><span>BOARDING PASS</span><span className="if-pill on">Verified</span></div>
                  <QrPattern seed={qrCycle} />
                  <div className="if-qr-refresh"><Radio size={12} /> QR refreshes in {qrSecs}s<div className="if-qr-bar"><i style={{ width: `${(qrSecs / 30) * 100}%` }} /></div></div>
                  <div className="if-safe-pass-meta"><span>Priya S. · BUS-001</span><span>HSR Layout → Hebbal</span></div>
                </div>
              </div>
            </div>
            <div className="if-safe-card">
              <h3>Phone & Distraction</h3>
              <p>Identify phone use and distraction-related behavior during journeys.</p>
              <div className="if-safe-visual if-safe-mini">
                <div className="if-safe-chip"><Smartphone size={16} /><div><b>Phone detected</b><span>08:24 · BUS-001</span></div><span className="if-pill warn">Alert</span></div>
                <div className="if-safe-chip"><Eye size={16} /><div><b>Distraction flagged</b><span>08:31 · BUS-001</span></div><span className="if-pill warn">Review</span></div>
              </div>
            </div>
            <div className="if-safe-card">
              <h3>Speed & Seat-Belt</h3>
              <p>Monitor speed and seat-belt compliance as part of journey safety.</p>
              <div className="if-safe-visual if-safe-mini">
                <div className="if-safe-speed"><b>42<small>km/h</small></b><div><span className="if-safe-speed-row"><ShieldCheck size={13} /> Seat-belt on</span><span className="if-pill on">OK</span></div></div>
                <div className="if-safe-chip"><Activity size={16} /><div><b>Journey safety</b><span>Speed & belt within limits</span></div><span className="if-pill on">OK</span></div>
              </div>
            </div>
            <div className="if-safe-card">
              <h3>Dynamic Verification</h3>
              <p>Keep passenger boarding controlled with secure, time-sensitive QR verification.</p>
              <div className="if-safe-visual if-safe-mini">
                <div className="if-safe-mini-qr"><QrPattern seed={qrCycle + 11} /><span className="if-safe-check"><Check size={12} strokeWidth={3} /></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — ONE JOURNEY. CONNECTED. (hidden for now)
      <section className="if-journey">
        <div className="section-label">ONE JOURNEY. CONNECTED.</div>
        <h2>Every journey, connected from<br /><em>operation to arrival.</em></h2>
        <div className="if-jmap">
          <div className="if-jmap-nodes">
            {journeyNodes.map(([I, t, d], i) => (
              <div className="if-jmap-node" key={t}>
                <small>0{i + 1}</small>
                <span className="if-jmap-icon"><I size={18} /></span>
                <b>{t}</b>
                <span>{d}</span>
              </div>
            ))}
          </div>
          <div className="if-jmap-rail">
            <div className="if-jmap-line" />
            <motion.span className="if-jmap-bus" animate={{ left: ['2%', '98%', '2%'] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}><BusFront size={14} /></motion.span>
          </div>
          <div className="if-jmap-foot"><span><i className="bd-live" /> BUS-001 · Running</span><span>5/7 passengers boarded</span><span>Koramangala → Hebbal</span></div>
        </div>
      </section>
      */}

      {/* 07 — CAPABILITIES */}
      <section className="features">
        <div className="section-label">CAPABILITIES</div>
        <div className="two-col">
          <h2>Everything you need<br />to manage <em>smarter journeys.</em></h2>
          <p className="lead">IntelliFleet brings fleet, driver, passenger and journey operations together in one connected platform.</p>
        </div>
        <div className="feature-grid">
          {[
            ['Fleet Management', BusFront, 'Manage vehicles, drivers and journeys from one connected operational platform.', '#1351D8'],
            ['Driver Management', Users, 'Assign and manage drivers while keeping driver and journey information connected to daily operations.', '#0ea5e9'],
            ['AI Driver Safety', ShieldAlert, 'Monitor phone usage, drowsiness, speed, distraction and seat-belt compliance during journeys.', '#8b5cf6'],
            ['Passenger Management', Ticket, 'Connect passenger information with journeys and controlled boarding workflows.', '#10b981'],
            ['Secure Boarding', QrCode, 'Use dynamic QR-based verification to make passenger boarding controlled and secure.', '#f59e0b'],
            ['Journey Monitoring', Activity, 'Maintain visibility across the journey from assignment and verification through active travel and completion.', '#ef4444'],
          ].map(([title, I, text, c], i) => (
            <motion.article key={title} whileHover={{ y: -4 }}>
              <span className="feature-icon" style={{ background: c + '1a', color: c }}><I size={22} /></span>
              <small>0{i + 1}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 08 — USE CASES */}
      <section className="if-use">
        <div className="section-label">USE CASES</div>
        <div className="two-col">
          <h2>Built for organizations<br /><em>that move people.</em></h2>
          <p className="lead">IntelliFleet adapts to how different organizations move people — from daily commutes to campus shifts and student routes.</p>
        </div>
        <div className="if-use-grid">
          {useCases.map(([t, g1, g2, d, img]) => (
            <div className="if-use-card" key={t}>
              <div className="if-use-tags"><span>{g1}</span><span>{g2}</span></div>
              <h3>{t}</h3>
              <p>{d}</p>
              <div className="if-use-photo"><img src={img} alt={t} loading="lazy" /></div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — FINAL CTA (layout preserved) */}
      <section className="cta fg-cta" id="contact">
        <div className="cta-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1.2} blend={0.6} /></div>
        <div className="cta-inner">
          <div className="cta-copy">
            <div className="section-label light">READY TO MOVE BEYOND VEHICLE TRACKING?</div>
            <h2>Move from vehicle tracking<br /><span>to intelligent journey management.</span></h2>
            <p>Bring fleet operations, driver safety and passenger security into one connected platform.</p>
          </div>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <h3>Talk to our team</h3>
            <div className="cta-row"><label>Full Name<input type="text" name="name" placeholder="Your name" required /></label><label>Work Email<input type="email" name="email" placeholder="you@company.com" required /></label></div>
            <div className="cta-row"><label>Company<input type="text" name="company" placeholder="Company name" /></label><label>Phone Number<input type="tel" name="phone" placeholder="+1 555 000 0000" /></label></div>
            <label>Message<textarea name="message" rows="4" placeholder="Tell us about your fleet and operations" /></label>
            <button type="submit" className="primary lightbtn">Request a Demo <ArrowUpRight size={18} /></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BusDriver;
