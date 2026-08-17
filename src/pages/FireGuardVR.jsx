import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Flame, Target, Hand, ClipboardCheck, Headset, BarChart3,
  Check, AlertTriangle, Gauge, Timer, ClipboardList, TrendingUp, FileCheck2, BookOpenCheck,
  Factory, Warehouse, Building2, Droplets, FlaskConical, Zap, HeartPulse, School, Briefcase, Hotel,
  Brain, TrendingDown, Layers, ShieldCheck, Medal,
} from 'lucide-react';

const challenges = [
  ['Safety risks during live drills', AlertTriangle, 'Live fire drills put people and equipment at risk while they train.'],
  ['Limited employee engagement', Gauge, 'Traditional sessions struggle to hold attention and build real participation.'],
  ['Production downtime', Timer, 'Shutting down operations for drills disrupts production and delivery schedules.'],
  ['Limited assessment capabilities', ClipboardList, 'Measuring individual performance during manual training is difficult.'],
  ['High training costs', TrendingUp, 'Recurring costs for instructors, consumables and equipment add up quickly.'],
  ['Manual compliance tracking', FileCheck2, 'Records live in spreadsheets and binders instead of being audit-ready.'],
  ['Poor knowledge retention', BookOpenCheck, 'Passive learning fades fast when it is not practiced and reinforced.'],
];

const capabilities = [
  ['Immersive VR Environment', Headset, 'Practice fire safety scenarios inside a realistic virtual environment without exposing employees to real-world hazards.'],
  ['Fire Simulation', Flame, 'Experience realistic industrial fire simulations and practice the correct response.'],
  ['PASS Technique Training', Target, 'Learn and perform the PASS technique for effective extinguisher use.'],
  ['Hand Tracking', Hand, 'Use immersive interaction to make training feel more hands-on.'],
  ['Quiz & Certification', ClipboardCheck, 'Assess knowledge and provide digital certification.'],
  ['Training Analytics', BarChart3, 'Measure performance and maintain digital assessments and reports.'],
];

const steps = [
  ['Wear Meta Quest Headset', 'Step into the simulation with the Meta Quest headset.'],
  ['Explore Virtual Factory', 'Move through a realistic industrial environment.'],
  ['Identify Fire Hazard', 'Spot hazards and assess the situation.'],
  ['Select Correct Extinguisher', 'Choose the right extinguisher for the fire type.'],
  ['Practice PASS Technique', 'Perform Pull, Aim, Squeeze and Sweep.'],
  ['Extinguish the Fire', 'Safely control and extinguish the fire.'],
  ['Performance Assessment', 'Get instant, measurable performance feedback.'],
  ['Digital Certification', 'Complete the training with a digital certificate.'],
];

const benefits = [
  ['Faster Emergency Response', Zap, 'Improve reaction time and decision-making during fire emergencies.'],
  ['Better Knowledge Retention', Brain, 'Interactive learning improves memory, confidence, and practical skills.'],
  ['Zero-Risk Learning', ShieldCheck, 'Train employees safely without exposing them to real fire hazards.'],
  ['Lower Training Costs', TrendingDown, 'Reduce recurring expenses for live drills, consumables, and instructor-led sessions.'],
  ['Standardized Training', Layers, 'Deliver the same training quality across multiple locations and teams.'],
  ['Compliance Ready', ClipboardCheck, 'Maintain digital assessments, certificates, and reports for regulatory compliance.'],
];

const fgIndustries = [
  ['Manufacturing', Factory], ['Construction', Building2], ['Warehousing & Logistics', Warehouse],
  ['Oil & Gas', Droplets], ['Chemical Plants', FlaskConical], ['Power Generation', Zap],
  ['Healthcare', HeartPulse], ['Education & Training', School], ['Corporate Offices', Briefcase], ['Hospitality', Hotel],
];

const glance = [
  ['Compatible', 'Meta Quest 3 & 3S'],
  ['Average Training Session', '3–5 Min'],
  ['Guided Training Steps', '5'],
  ['Extinguisher Types', '14'],
];

const microStats = [
  ['Meta Quest 3 & 3S', 'COMPATIBLE'],
  ['3–5 Min', 'AVG. TRAINING SESSION'],
  ['5', 'GUIDED TRAINING STEPS'],
  ['14', 'EXTINGUISHER TYPES'],
];

const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function FireGuardVR() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="hero fg-hero">
        <div className="hero-copy">
          <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>FireGuard VR</b></div>
          <div className="eyebrow"><span className="dot" /> FIREGUARD VR · VR FIRE SAFETY TRAINING</div>
          <h1>Experience Fire Safety<br /><span>Before Facing It</span><br />in Real Life.</h1>
          <p>Immersive VR fire safety training that helps employees identify hazards, choose the right extinguisher, master the PASS technique, and build confidence before a real emergency happens.</p>
          <div className="actions">
            <button className="primary" onClick={() => go('contact')}>Request a Demo <ArrowUpRight size={18} /></button>
            <button className="textbtn" onClick={() => go('how')}>See How It Works <ArrowRight size={17} /></button>
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
            {microStats.map(([v, l]) => <div className="fg-micro" key={l}><b>{v}</b><span>{l}</span></div>)}
          </div>
        </div>
      </section>

      {/* 02 — BUSINESS CHALLENGES */}
      <section className="problem" id="challenge">
        <div className="section-label">01 — THE CHALLENGE</div>
        <div className="two-col">
          <h2>Traditional Fire Safety Training<br /><em>Isn&apos;t Enough.</em></h2>
          <div>
            <p>Traditional training can struggle with safety risks, engagement, downtime and measurable outcomes. FireGuard VR is built to close those gaps.</p>
            <div className="fg-challenge-grid">
              {challenges.map(([t, I], i) => <div className="fg-challenge" key={t}><span className="fg-challenge-num">0{i + 1}</span><I size={17} className="fg-challenge-icon" /><b>{t}</b></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SOLUTION */}
      <section className="solution" id="solution">
        <div className="section-label">02 — THE SOLUTION</div>
        <h2>Learn by Doing with<br /><span>Immersive Virtual Reality.</span></h2>
        <p className="lead">FireGuard VR is an immersive virtual reality fire safety training platform. Employees can:</p>
        <div className="fg-progress">
          {['Identify workplace fire hazards', 'Practice correct extinguisher selection', 'Learn and perform the PASS technique', 'Receive instant performance feedback', 'Complete safe and repeatable training sessions'].map((x, i) => (
            <motion.div className="fg-progress-item" key={x} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, transition: { duration: 0.3 } }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><span>0{i + 1}</span><b>{x}</b></motion.div>
          ))}
        </div>
      </section>

      {/* 04 — KEY CAPABILITIES */}
      <section className="features" id="capabilities">
        <div className="section-label">03 — KEY CAPABILITIES</div>
        <div className="two-col"><h2>Built for real fire safety<br /><em>training outcomes.</em></h2><p className="lead">Everything employees need to learn, practice and prove fire safety skills in VR.</p></div>
        <div className="feature-grid fg-feature-grid">
          {capabilities.map(([t, I, d], i) => (
            <motion.article key={t} whileHover={{ y: -4 }}>
              <I size={22} /><small>0{i + 1}</small><h3>{t}</h3><p>{d}</p><ArrowUpRight className="arr" size={19} />
            </motion.article>
          ))}
        </div>
      </section>

      {/* 05 — HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-label">04 — HOW IT WORKS</div>
        <h2>A guided journey from<br /><em>headset to certification.</em></h2>
        <p className="lead">A repeatable training flow that takes each employee from entering the simulation to earning a certificate.</p>
        <div className="fg-timeline">
          {steps.map(([t, d], i) => (
            <motion.div className="fg-timeline-step" key={t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: (i % 4) * 0.1 }}>
              <div className="fg-timeline-node"><span>{i + 1}</span></div>
              <h3>{t}</h3>
              <p>{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 06 — BENEFITS / OUTCOMES */}
      <section className="why" id="outcomes">
        <div className="section-label">05 — MEASURABLE PERFORMANCE OUTCOMES</div>
        <h2>Measurable Performance<br /><span>Outcomes.</span></h2>
        <div className="fg-benefits-grid">
          {benefits.map(([t, I, d], i) => (
            <div className="fg-benefit" key={t}>
              <div className="fg-benefit-icon"><I size={18} /></div>
              <small>0{i + 1}</small>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07 — INDUSTRIES SERVED */}
      <section className="industries" id="industries">
        <div className="section-label">06 — INDUSTRIES SERVED</div>
        <h2>Built for<br /><em>High-Risk Workplaces.</em></h2>
        <div className="fg-industry-grid">
          {fgIndustries.map(([name, I]) => (
            <motion.div className="fg-industry" key={name} whileHover={{ y: -4 }}>
              <I size={20} /><span>{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 08 — AT A GLANCE */}
      <section className="fg-glance">
        <div className="section-label" style={{ color: 'var(--blue)' }}>07 — AT A GLANCE</div>
        <h2>FireGuard VR<br /><span>at a Glance.</span></h2>
        <div className="fg-glance-grid">
          {glance.map(([k, v], i) => (
            <div className="fg-glance-cell" key={k}><small>{k}</small><b>{v}</b><i /></div>
          ))}
        </div>
      </section>

      {/* 09 — COMPLIANCE & REPORTING */}
      <section className="fg-compliance">
        <div className="section-label" style={{ color: 'var(--blue)' }}>08 — COMPLIANCE &amp; REPORTING</div>
        <h2>Compliance Ready.<br /><span>Measurable. Repeatable.</span></h2>
        <div className="fg-compliance-inner">
          <div className="fg-compliance-copy">
            <p>Maintain digital assessments, certificates, and reports for regulatory compliance.</p>
            <div className="fg-compliance-list">
              {['Digital assessments', 'Certificates', 'Training reports', 'Standardized training', 'Performance measurement'].map((x, i) => (
                <div className="fg-compliance-item" key={x}><ShieldCheck size={16} /><span>0{i + 1}</span>{x}</div>
              ))}
            </div>
          </div>
          <div className="fg-report-card">
            <div className="fg-report-head"><b>TRAINING RECORD</b><span><i className="fg-dot" /> SAMPLE REPORT</span></div>
            <div className="fg-report-row fg-report-h"><span>Employee</span><span>Score</span><span>Hazards</span><span>Extinguisher</span><span>PASS</span><span>Result</span></div>
            {[
              ['R. Mehta', '92', '4 / 4', 'ABC', 'Pass', 'Certified'],
              ['S. Patel', '88', '3 / 4', 'CO₂', 'Pass', 'Certified'],
              ['A. Kumar', '79', '3 / 4', 'ABC', 'Review', 'Retry'],
              ['K. Joshi', '91', '4 / 4', 'ABC', 'Pass', 'Certified'],
              ['P. Nair', '85', '3 / 4', 'CO₂', 'Pass', 'Certified'],
              ['D. Verma', '76', '2 / 4', 'ABC', 'Review', 'Retry'],
            ].map(r => (
              <div className="fg-report-row" key={r[0]}>
                {r.map((c, i) => <span key={i} className={i === r.length - 1 ? (c === 'Certified' ? 'fg-ok' : 'fg-warn') : ''}>{c}</span>)}
              </div>
            ))}
            <div className="fg-report-foot"><Medal size={14} /> Digital certificate issued on completion</div>
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="cta fg-cta" id="contact">
        <div className="cta-aurora" />
        <div className="cta-inner">
          <div className="section-label light">09 — PREPARE · TRAIN · CERTIFY</div>
          <h2>Prepare Employees Before<br /><span>Emergencies Happen.</span></h2>
          <p>Empower your workforce with immersive VR fire safety training that improves confidence, reduces operational risks and strengthens workplace compliance.</p>
          <div className="actions fg-cta-actions">
            <button className="primary lightbtn">Request a Demo <ArrowUpRight size={18} /></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FireGuardVR;