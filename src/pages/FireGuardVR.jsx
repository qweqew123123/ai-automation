import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from '../components/Aurora.jsx';
import FireGuardHowItWorks from '../components/FireGuardHowItWorks.jsx';
import {
  ArrowUpRight, ArrowRight, Hand, ClipboardCheck, Headset, BarChart3,
  Check, Timer, ClipboardList, TrendingUp, Eye, Target, Flame,
  Factory, Warehouse, Building2, Droplets, FlaskConical, Zap, HeartPulse, School, Briefcase, Hotel,
  ShieldCheck, ShieldX, ChevronLeft, ChevronRight,
} from 'lucide-react';
import './FireGuardVR.css';

const traditional = [
  ['Live drill risks', ShieldX, 'Real fire drills put people and equipment at risk while they train.'],
  ['Production disruption', Timer, 'Shutting down operations for drills disrupts production schedules.'],
  ['Limited repetition', TrendingUp, 'Training rarely gets practiced enough to build real confidence.'],
  ['Manual tracking', ClipboardList, 'Records live in spreadsheets instead of being audit-ready.'],
];

const fgvr = [
  ['Safe simulation', ShieldCheck, 'Practice in a completely safe, repeatable virtual environment.'],
  ['Repeatable training', Headset, 'Run the same high-quality session any number of times.'],
  ['Hands-on practice', Hand, 'Perform real extinguisher actions with hand tracking.'],
  ['Measurable performance', BarChart3, 'Every response is scored and documented automatically.'],
];

const experienceGroups = [
  ['IMMERSIVE', Headset, ['Immersive VR environment', 'Realistic industrial fire simulations', 'Hand tracking']],
  ['PRACTICAL', Hand, ['Identify fire hazards', 'Correct extinguisher selection', 'PASS technique training']],
  ['MEASURABLE', BarChart3, ['Performance assessment', 'Training analytics', 'Instant performance feedback', 'Quiz & certification']],
  ['COMPLIANCE', ClipboardCheck, ['Digital assessments', 'Digital certification', 'Compliance-ready reporting', 'Standardized training']],
];

const capabilities = [
  ['Immersive VR Environment', Headset, 'Realistic industrial fire simulations in a safe, repeatable virtual environment on Meta Quest 3 / 3S.', '#1351D8'],
  ['Hand Tracking', Hand, 'Perform real extinguisher actions — Pull, Aim, Squeeze, Sweep — with natural hand tracking.', '#0ea5e9'],
  ['Extinguisher Selection', Target, 'Select the correct extinguisher from five types matched to the fire class you are facing.', '#10b981'],
  ['Hazard Identification', Eye, 'Spot fire hazards and assess the situation before deciding how to respond.', '#f59e0b'],
  ['Performance Assessment', BarChart3, 'Every response is scored and documented with instant, measurable performance feedback.', '#8b5cf6'],
  ['Certification & Reporting', ClipboardCheck, 'Digital assessments, digital certification and compliance-ready training records.', '#ef4444'],
];

const fgIndustries = [
  ['Manufacturing', Factory, 'Standardized fire safety training across production environments.', '/images/fg-industries/fg-man.jpg'],
  ['Construction', Building2, 'Hazard response training for evolving job sites.', '/images/fg-industries/fg-con.jpg'],
  ['Warehousing & Logistics', Warehouse, 'Safety drills for large facilities and distributed teams.', '/images/fg-industries/fg-war.jpg'],
  ['Oil & Gas', Droplets, 'High-risk environment training in a safe, repeatable simulation.', '/images/fg-industries/fg-oil.jpg'],
  ['Chemical Plants', FlaskConical, 'Practice emergency response without hazardous exposure.', '/images/fg-industries/fg-che.jpg'],
  ['Power Generation', Zap, 'Ready teams for facility-specific fire scenarios.', '/images/fg-industries/fg-pow.jpg'],
  ['Healthcare', HeartPulse, 'Train clinical and support staff without interrupting care.', '/images/fg-industries/fg-hea.jpg'],
  ['Education & Training', School, 'Safe, repeatable fire safety instruction for institutions.', '/images/fg-industries/fg-edu.jpg'],
  ['Corporate Offices', Briefcase, 'Workplace fire readiness for office teams.', '/images/fg-industries/fg-cor.jpg'],
  ['Hospitality', Hotel, 'Guest and staff safety training for hotels and venues.', '/images/fg-industries/fg-hos.jpg'],
];

const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function FireGuardVR() {
  const [industry, setIndustry] = useState(0);
  const [indDir, setIndDir] = useState(1);

  const goIndustry = next => {
    setIndDir(next > industry || (industry === fgIndustries.length - 1 && next === 0) ? 1 : -1);
    setIndustry(next);
  };

  return (
    <>
      {/* 01 — HERO */}
      <section className="hero fg-hero">
        <div className="hero-copy">
          <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>FireGuard VR</b></div>
          <div className="eyebrow"><span className="dot" /> IMMERSIVE VR FIRE SAFETY TRAINING PLATFORM</div>
          <h1>Experience Fire Safety<br /><span>Before Facing It</span><br />in Real Life.</h1>
          <p>FireGuard VR enables employees to identify fire hazards, select the right extinguisher, master the PASS technique and measure their performance in a safe, repeatable virtual environment.</p>
          <div className="actions">
            <button className="primary" onClick={() => go('contact')}>Request a Demo <ArrowUpRight size={18} /></button>
            <button className="textbtn" onClick={() => go('how')}>Explore Training <ArrowRight size={17} /></button>
          </div>
        </div>

        <div className="fg-visual">
          <div className="fg-sim-card">
            <div className="fg-sim-head"><span><i className="fg-dot" /> SIMULATION</span><span>FACTORY FLOOR · FIRE DRILL</span></div>
            <div className="fg-scene">
              <div className="fg-hud fg-hud-tl" /><div className="fg-hud fg-hud-tr" /><div className="fg-hud fg-hud-bl" /><div className="fg-hud fg-hud-br" />
              <div className="fg-scene-floor" />
              <div className="fg-building fg-building-1"><i /><i /><i /><i /><i /><i /></div>
              <div className="fg-building fg-building-2"><i /><i /><i /><i /></div>
              <div className="fg-machine"><i /><i /></div>
              <div className="fg-worker">
                <span className="fg-worker-head"><i className="fg-vr-band" /></span>
                <span className="fg-worker-body" />
                <span className="fg-worker-arm" />
              </div>
              <div className="fg-extinguisher"><span className="fg-ext-tank" /><span className="fg-ext-hose" /></div>
              <div className="fg-fire"><span className="fg-flame fg-f1" /><span className="fg-flame fg-f2" /><span className="fg-flame fg-f3" /></div>
              <div className="fg-reticle"><i className="fg-reticle-ring" /><i className="fg-reticle-cross fg-rc-h" /><i className="fg-reticle-cross fg-rc-v" /></div>
              <div className="fg-chip fg-chip-step">STEP 4 · PASS TECHNIQUE</div>
              <div className="fg-chip fg-chip-ok"><Check size={11} /> TARGET ACQUIRED</div>
            </div>
            <div className="fg-sim-foot"><span>IDENTIFY HAZARD</span><span>SELECT EXTINGUISHER</span><span className="fg-foot-active">APPLY PASS</span><span>EXTINGUISH</span></div>
          </div>

          <div className="fg-microstats">
            {[['Meta Quest 3 & 3S', 'COMPATIBLE'], ['3–5 Min', 'AVG. SESSION'], ['8', 'GUIDED STEPS'], ['5', 'EXTINGUISHER TYPES']].map(([v, l]) => <div className="fg-micro" key={l}><b>{v}</b><span>{l}</span></div>)}
          </div>
        </div>
      </section>

      {/* 02 — THE PROBLEM + SOLUTION */}
      <section className="problem fg-problem" id="problem">
        <div className="section-label">02 — THE PROBLEM</div>
        <div className="two-col">
          <h2>Traditional fire safety training<br /><em>isn&apos;t enough.</em></h2>
          <div>
            <p>Real fire drills can introduce safety risks, disrupt operations and make repeated practice difficult. FireGuard VR creates a safe and repeatable environment where employees can experience, practice and improve their emergency response.</p>
          </div>
        </div>

        <div className="fg-vs">
          <div className="fg-vs-col fg-vs-traditional">
            <div className="fg-vs-head"><span className="fg-vs-tag">TRADITIONAL</span><h3>Traditional Training</h3></div>
            <div className="fg-vs-list">
              {traditional.map(([t, I, d]) => (
                <div className="fg-vs-item" key={t}><I size={16} /><div><b>{t}</b><small>{d}</small></div></div>
              ))}
            </div>
          </div>

          <div className="fg-vs-mid">
            <ArrowRight size={26} />
            <span>FIREGUARD<br />VR</span>
          </div>

          <div className="fg-vs-col fg-vs-vr">
            <div className="fg-vs-head"><span className="fg-vs-tag fg-vs-tag-on">FIREGUARD VR</span><h3>Immersive VR Training</h3></div>
            <div className="fg-vs-list">
              {fgvr.map(([t, I, d]) => (
                <div className="fg-vs-item" key={t}><I size={16} /><div><b>{t}</b><small>{d}</small></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — HOW IT WORKS */}
      <FireGuardHowItWorks />

      {/* 04 — TRAINING EXPERIENCE + OUTCOMES */}
      <section className="features fg-experience" id="experience">
        <div className="section-label">04 — THE TRAINING EXPERIENCE</div>
        <div className="two-col">
          <h2>More than simulation.<br /><em>It&apos;s measurable training.</em></h2>
          <p className="lead">Everything employees need to learn, practice and prove fire safety skills — in one immersive VR platform.</p>
        </div>

        <div className="fg-exp-grid">
          <div className="fg-exp-visual">
            <div className="fg-exp-photo"><img src="/images/fg-exp-bg.jpg" alt="FireGuard VR immersive fire training experience" loading="lazy" /></div>
          </div>

          <div className="fg-exp-groups">
            {experienceGroups.map(([title, I, items]) => (
              <div className="fg-exp-group" key={title}>
                <div className="fg-exp-group-head"><I size={18} /><b>{title}</b></div>
                <ul>
                  {items.map(x => <li key={x}><Check size={14} />{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="features fg-capabilities">
        <div className="section-label">CAPABILITIES</div>
        <div className="two-col">
          <h2>Built for the moment<br /><em>when it matters most.</em></h2>
          <p className="lead">The training tools your team needs to learn, practice and prove fire safety skills — in one immersive VR platform.</p>
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
        <div className="section-label">05 — BUILT FOR REAL-WORLD TRAINING</div>
        <div className="two-col">
          <h2>Training built for teams<br /><em>that need to be ready.</em></h2>
          <div>
            <p>Deliver standardized fire safety training across different environments, teams and locations.</p>
          </div>
        </div>

        <div className="fg-ind">
          <div className="fg-ind-tabs">
            {fgIndustries.map(([name, I], i) => (
              <button className={`fg-ind-tab${industry === i ? ' active' : ''}`} key={name} onClick={() => goIndustry(i)}>
                <I size={16} /><span>{name}</span>
              </button>
            ))}
          </div>

          <div className="fg-ind-nav">
            <button className="fg-ind-arrow" aria-label="Previous industry" onClick={() => goIndustry((industry - 1 + fgIndustries.length) % fgIndustries.length)}><ChevronLeft size={20} /></button>
            <div className="fg-ind-visual">
              <AnimatePresence mode="wait" custom={indDir}>
                <motion.figure key={industry} className="fg-ind-figure"
                  initial={{ opacity: 0, x: 40 * indDir, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40 * indDir, scale: 0.98 }}
                  transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}>
                  <img src={fgIndustries[industry][3]} alt={fgIndustries[industry][0]} loading="lazy" />
                  <figcaption>
                    <h3>{fgIndustries[industry][0]}</h3>
                    <p>{fgIndustries[industry][2]}</p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <button className="fg-ind-arrow" aria-label="Next industry" onClick={() => goIndustry((industry + 1) % fgIndustries.length)}><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* 06 — FINAL CTA */}
      <section className="cta fg-cta" id="contact">
        <div className="cta-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1.2} blend={0.6} /></div>
        <div className="cta-inner">
          <div className="cta-copy">
            <div className="section-label light">READY TO PREPARE YOUR TEAM?</div>
            <h2>Prepare employees before<br /><span>emergencies happen.</span></h2>
            <p>Empower your workforce with immersive VR fire safety training that improves confidence, reduces operational risks and strengthens workplace compliance.</p>
          </div>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <h3>Request a Demo</h3>
            <div className="cta-row"><label>Full Name<input type="text" name="name" placeholder="Your name" required /></label><label>Work Email<input type="email" name="email" placeholder="you@company.com" required /></label></div>
            <div className="cta-row"><label>Company<input type="text" name="company" placeholder="Company name" /></label><label>Phone Number<input type="tel" name="phone" placeholder="+1 555 000 0000" /></label></div>
            <label>Message<textarea name="message" rows="4" placeholder="Tell us about your fire safety training needs" /></label>
            <button type="submit" className="primary lightbtn">Request a Demo <ArrowUpRight size={18} /></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default FireGuardVR;