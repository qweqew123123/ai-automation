import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../components/Aurora.jsx';
import {
  ArrowUpRight, ArrowRight, BusFront, Users, Route, MapPinned, Radio, Siren, FileBarChart, ClipboardCheck, Check, Clock, EyeOff, AlertTriangle, ClipboardX, LayoutDashboard, ShieldAlert, BarChart3, School, Briefcase, Building2, Plane, Factory, HeartPulse, ChevronLeft, ChevronRight,
} from 'lucide-react';
import './FireGuardVR.css';
import '../components/FireGuardHowItWorks.css';

const traditional = [
  ['Paper rosters & calls', Clock, 'Schedules managed in sheets and phone calls, no single source of truth.'],
  ['No live visibility', EyeOff, 'Buses on the road with no real-time position or trip status.'],
  ['Slow incident response', AlertTriangle, 'Breakdowns and complaints surface late and get lost in follow-ups.'],
  ['Manual compliance', ClipboardX, 'Licences, insurance and PUC tracked manually across files.'],
];

const intellifleet = [
  ['Single operations console', LayoutDashboard, 'Rosters, fleet, routes and passengers managed in one workspace.'],
  ['Live map & telemetry', MapPinned, 'Real-time positions, speed, stops and journey progress on the map.'],
  ['Alerts to resolution', ShieldAlert, 'Triage alerts, investigate incidents and resolve complaints without delay.'],
  ['Reports & audit trail', BarChart3, 'Boarding scans, assignments and compliance ready to export.'],
];

const busSteps = [
  { number: '01', title: 'REGISTER FLEET', description: 'Add buses with number, registration, capacity and compliance documents.', bg: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '02', title: 'ONBOARD DRIVERS', description: 'Create driver profiles with licence, expiry, experience and availability.', bg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '03', title: 'DESIGN ROUTES', description: 'Define stops, sequence and ETAs with live route and stop maps.', bg: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '04', title: 'ENROLL PASSENGERS', description: 'Assign passengers to routes with pickup and drop stops.', bg: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '05', title: 'SCHEDULE ASSIGNMENTS', description: 'Pair bus + driver + route + date with passenger manifest.', bg: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '06', title: 'GO LIVE', description: 'Track journeys on the live map and capture boarding scans.', bg: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '07', title: 'TRIAGE ALERTS', description: 'Monitor alerts and escalate to incidents or complaints.', bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1067&fit=crop&q=80&auto=format' },
  { number: '08', title: 'REPORT & ANALYZE', description: 'Export scan history and compliance reports for audits.', bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1067&fit=crop&q=80&auto=format' },
];
const BUS_BASE_BG = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=1080&fit=crop&q=80&auto=format';

const experienceGroups = [
  ['FLEET', BusFront, ['Buses by type & fuel', 'Registration & capacity', 'GPS device & live status', 'Insurance, PUC & fitness']],
  ['CREW', Users, ['Driver profiles & licences', 'Experience & availability', 'Trips completed & status', 'Search & roster control']],
  ['ROUTES', Route, ['Route code & stops', 'ETA offsets & sequence', 'Stop maps & polylines', 'Passengers per route']],
  ['CONTROL', ShieldAlert, ['Live assignments & map', 'Boarding scan history', 'Alerts, incidents & complaints', 'Reports & exports']],
];

const capabilities = [
  ['Fleet Management', BusFront, 'Manage buses by type, fuel and capacity with registration, documents and live status.', '#1351D8'],
  ['Driver Rosters', Users, 'Maintain licences, expiry, experience and availability with trips completed.', '#0ea5e9'],
  ['Route Planning', Route, 'Build routes with stops, ETAs and maps covering every pickup and drop point.', '#10b981'],
  ['Live Tracking', MapPinned, 'Follow journeys on the map with speed, position and stop progress in real time.', '#f59e0b'],
  ['Alerts & Operations', Siren, 'Triage operational alerts and convert them to incidents or complaints.', '#8b5cf6'],
  ['Reports & Scans', FileBarChart, 'Review boarding scans and export fleet, driver and assignment reports.', '#ef4444'],
];

const bdIndustries = [
  ['Education', School, 'Student shuttles with verified boarding and route tracking.', 'https://images.unsplash.com/photo-1524995997946-a62e631f06d7?w=1200&h=700&fit=crop&q=80&auto=format'],
  ['Corporate', Briefcase, 'Employee commutes with scheduled assignments and scans.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=700&fit=crop&q=80&auto=format'],
  ['City Transit', Building2, 'Public routes with live positions and stop-level visibility.', 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=700&fit=crop&q=80&auto=format'],
  ['Tour & Travel', Plane, 'Charter journeys with crew, vehicle and manifest control.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop&q=80&auto=format'],
  ['Industrial', Factory, 'Factory and plant shuttles with shift-based assignments.', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=700&fit=crop&q=80&auto=format'],
  ['Healthcare', HeartPulse, 'Hospital shuttles with compliant driver and vehicle records.', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=700&fit=crop&q=80&auto=format'],
];

const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function BusHowItWorks() {
  const [hovered, setHovered] = useState(null);
  const shown = hovered ?? 0;
  return (
    <section className="fghiw">
      <div className="fghiw-bg">
        <AnimatePresence mode="sync">
          <motion.div key={shown} className="fghiw-bg-img" style={{ backgroundImage: `url(${hovered !== null ? busSteps[hovered].bg : BUS_BASE_BG})` }} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} />
        </AnimatePresence>
      </div>
      <div className="fghiw-overlay" />
      <div className="fghiw-inner">
        <div className="fghiw-top">
          <div className="fghiw-top-left">
            <motion.span className="fghiw-label" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>HOW IT WORKS</motion.span>
            <motion.h2 className="fghiw-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}>REGISTER.<br />ASSIGN.<br />TRACK.</motion.h2>
          </div>
          <motion.div className="fghiw-nav" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>01 — 08</motion.div>
        </div>
        <div className="fghiw-steps" onMouseLeave={() => setHovered(null)}>
          {busSteps.map((s, i) => (
            <motion.div className={'fghiw-step' + (i === shown ? ' on' : '')} key={s.number} onMouseEnter={() => setHovered(i)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: 'easeOut' }}>
              <span className="fghiw-num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <i className="fghiw-rule" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusDriver() {
  const [industry, setIndustry] = useState(0);
  const [indDir, setIndDir] = useState(1);
  const goIndustry = next => {
    setIndDir(next > industry || (industry === bdIndustries.length - 1 && next === 0) ? 1 : -1);
    setIndustry(next);
  };

  return (
    <>
      {/* 01 — HERO */}
      <section className="hero fg-hero">
        <div className="hero-copy">
          <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>IntelliFleet</b></div>
          <div className="eyebrow"><span className="dot" /> INTELLIFLEET · BUS &amp; DRIVER MANAGEMENT SUITE</div>
          <h1>Every bus.<br /><span>Every driver.</span><br />Every journey.</h1>
          <p>IntelliFleet is the operations console for buses, drivers, routes and passengers — live positions, crew rosters, compliance documents, incidents and boarding scans in one workspace.</p>
          <div className="actions">
            <button className="primary" onClick={() => go('contact')}>Request a Demo <ArrowUpRight size={18} /></button>
            <button className="textbtn" onClick={() => go('how')}>Explore Operations <ArrowRight size={17} /></button>
          </div>
        </div>
        <div className="bd-hero-stage bd-hero-stage--rich">
          <div className="bd-hero-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1} blend={0.55} /></div>
          <motion.div className="bd-v4 bd-v4--rich" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <motion.div className="bd-v4-card" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="bd-v4-head"><span><Route size={14} /> Koramangala → Hebbal</span><motion.span className="bd-v4-live" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 1.6, repeat: Infinity }}><motion.i className="bd-live" animate={{ scale: [1, 1.35, 1], opacity: [1, .65, 1] }} transition={{ duration: 1.2, repeat: Infinity }} /> Running</motion.span></div>
              <div className="bd-v4-timeline">
                <div className="bd-v4-line" />
                <motion.div className="bd-v4-fill" initial={{height:'0%'}} animate={{height:['0%','48%','96%','96%','0%']}} transition={{duration:4.5,times:[0,0.28,0.56,0.82,1],ease:'easeInOut',repeat:Infinity,repeatDelay:0.7}} />
                <motion.i className="bd-v4-bus" animate={{ top: ['12%','46%','86%','12%'] }} transition={{duration:4.5,times:[0,0.28,0.56,1],ease:'easeInOut',repeat:Infinity,repeatDelay:0.7}}><BusFront size={12} /></motion.i>
                <div className="bd-v4-stop done"><i><Check size={10} strokeWidth={3} /></i><div><b>Koramangala</b><small>08:00 · 3 picked</small></div><span className="bd-v4-time">08:00</span></div>
                <div className="bd-v4-stop active"><motion.i animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.2, repeat: Infinity }}><BusFront size={11} /></motion.i><div><b>HSR Layout</b><small>08:22 · Boarding</small></div><motion.span className="bd-v4-eta" animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 1, repeat: Infinity }}>ETA 3 min</motion.span></div>
                <div className="bd-v4-stop"><i /><div><b>Hebbal</b><small>09:10 · Next · 4 stops</small></div><span className="bd-v4-next">Next</span></div>
              </div>
              <div className="bd-v4-foot"><span><Users size={12} /> 5/7 passengers</span><motion.span className="bd-v4-running" animate={{ opacity: [1, .8, 1] }} transition={{ duration: 1.8, repeat: Infinity }}>Running • 42 km/h</motion.span></div>
              <div className="bd-v4-avatars"><span>A</span><span>P</span><span>R</span><small>+2</small></div>
            </motion.div>
          </motion.div>
          <motion.div className="bd-v4-chip bd-v4-chip--map" initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{delay:.4}}><MapPinned size={12} /> Live Map <small>2 buses</small></motion.div>
        </div>
      </section>

      {/* 02 — WHAT WE SOLVE */}
      <section className="bd-what" id="problem">
        <div className="bd-what-left">
          <span className="bd-what-label">WHAT WE SOLVE</span>
          <h2>Bus operations<br />shouldn&apos;t run<br />on paper.</h2>
          <p>Whether you run school, corporate or city fleets, paper rosters and blind trips leave operations exposed. IntelliFleet brings every bus, driver and journey into one live, accountable workspace — from roster to reports.</p>
        </div>
        <div className="bd-what-grid">
          {intellifleet.map(([t, I, d]) => (
            <div className="bd-what-card" key={t}>
              <span className="bd-what-icon"><I size={16} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — HOW IT WORKS */}
      <div id="how"><BusHowItWorks /></div>

      {/* 04 — OPERATIONS EXPERIENCE */}
      <section className="features fg-experience" id="experience">
        <div className="section-label">THE OPERATIONS EXPERIENCE</div>
        <div className="two-col">
          <h2>More than tracking.<br /><em>It&apos;s a complete control centre.</em></h2>
          <p className="lead">Every bus, driver, route and passenger linked — from roster to live journey to reports.</p>
        </div>
        <div className="fg-exp-grid">
          <div className="fg-exp-col fg-exp-col--left">
            {experienceGroups.slice(0, 2).map(([title, I, items]) => (
              <div className="fg-exp-group" key={title}>
                <div className="fg-exp-group-head"><I size={18} /><b>{title}</b></div>
                <ul>{items.map(x => <li key={x}><Check size={14} />{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="fg-exp-center">
            <div className="fg-exp-photo"><img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=900&fit=crop&q=80&auto=format" alt="Bus fleet operations" loading="lazy" /></div>
          </div>
          <div className="fg-exp-col fg-exp-col--right">
            {experienceGroups.slice(2, 4).map(([title, I, items]) => (
              <div className="fg-exp-group" key={title}>
                <div className="fg-exp-group-head"><I size={18} /><b>{title}</b></div>
                <ul>{items.map(x => <li key={x}><Check size={14} />{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="features fg-capabilities">
        <div className="section-label">CAPABILITIES</div>
        <div className="two-col">
          <h2>Built for teams<br /><em>that keep the fleet moving.</em></h2>
          <p className="lead">The tools your depot needs to manage fleet, crew and every journey reliably.</p>
        </div>
        <div className="feature-grid">
          {capabilities.map(([title, I, text, c], i) => (
            <motion.article key={title} whileHover={{ y: -4 }}>
              <span className="feature-icon" style={{ background: c + '1a', color: c }}><I size={22} /></span>
              <small>0{i + 1}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 05 — INDUSTRIES */}
      <section className="industries fg-industries" id="industries">
        <div className="section-label">BUILT FOR REAL-WORLD OPERATIONS</div>
        <div className="two-col">
          <h2>One operations console.<br /><em>Many fleets.</em></h2>
          <div><p>Run school, corporate, city and charter operations from the same workflow.</p></div>
        </div>
        <div className="fg-ind">
          <div className="fg-ind-tabs">
            {bdIndustries.map(([name, I], i) => (
              <button className={`fg-ind-tab${industry === i ? ' active' : ''}`} key={name} onClick={() => goIndustry(i)}>
                <I size={16} /><span>{name}</span>
              </button>
            ))}
          </div>
          <div className="fg-ind-nav">
            <button className="fg-ind-arrow" aria-label="Previous industry" onClick={() => goIndustry((industry - 1 + bdIndustries.length) % bdIndustries.length)}><ChevronLeft size={20} /></button>
            <div className="fg-ind-visual">
              <AnimatePresence mode="wait" custom={indDir}>
                <motion.figure key={industry} className="fg-ind-figure" initial={{ opacity: 0, x: 40 * indDir, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -40 * indDir, scale: 0.98 }} transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}>
                  <img src={bdIndustries[industry][3]} alt={bdIndustries[industry][0]} loading="lazy" />
                  <figcaption>
                    <h3>{bdIndustries[industry][0]}</h3>
                    <p>{bdIndustries[industry][2]}</p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <button className="fg-ind-arrow" aria-label="Next industry" onClick={() => goIndustry((industry + 1) % bdIndustries.length)}><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* 06 — FINAL CTA */}
      <section className="cta fg-cta" id="contact">
        <div className="cta-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1.2} blend={0.6} /></div>
        <div className="cta-inner">
          <div className="cta-copy">
            <div className="section-label light">READY TO RUN FLEET OPERATIONS?</div>
            <h2>Run every journey<br /><span>without the chaos.</span></h2>
            <p>Bring buses, drivers, routes and passengers into one live console — tracking, scans and compliance included.</p>
          </div>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <h3>Request a Demo</h3>
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
