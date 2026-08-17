import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Phone, Mic2, BrainCircuit, BarChart3, Clock3,
  UploadCloud, Settings2, Play,
} from 'lucide-react';
import Aurora from '../components/Aurora.jsx';
import Parallax from '../components/Parallax.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import WhatWeSolve from '../components/WhatWeSolve.jsx';

const features = [
  ['Multiple Voices', Mic2, 'Choose from natural-sounding voices to match your brand and use case.', '#1351D8'],
  ['Smart Scheduling', Clock3, 'Automate campaigns with scheduling and retry logic built around your workflow.', '#0ea5e9'],
  ['Instant Training', UploadCloud, 'Upload CSV, documents or text and train an agent with your business information.', '#10b981'],
  ['Browser Dialing', Phone, 'Make and manage AI-powered calls directly from your browser.', '#f59e0b'],
  ['Custom Persona', Settings2, 'Define tone, style, goals and behavior so every conversation sounds intentional.', '#8b5cf6'],
  ['Dual-Channel Dialing', BrainCircuit, 'Connect browser or phone-browser calling into the same operational workflow.', '#ef4444'],
];
const industries = [
  ['Healthcare', '/images/ind-healthcare.jpg', 'Automate appointment follow-ups, reminders and patient outreach.'],
  ['Finance', '/images/ind-finance.jpg', 'Handle inquiries, qualify prospects and schedule consultations.'],
  ['Insurance', '/images/ind-insurance.jpg', 'Renewals, claims follow-ups and policyholder communication.'],
  ['Retail', '/images/ind-retail.jpg', 'Order updates, cart recovery and customer support calls.'],
  ['Education', '/images/ind-education.jpg', 'Enrollment follow-ups, inquiries and event reminders.'],
  ['Real Estate', '/images/ind-realestate.jpg', 'Lead qualification, tour scheduling and listing follow-ups.'],
  ['Logistics', '/images/ind-logistics.jpg', 'Delivery notifications, dispatch updates and status checks.'],
  ['Customer Support', '/images/ind-support.jpg', 'Answer questions, resolve issues and escalate when needed.'],
];
const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function AICallAgent() {
  const industryTrack = useRef(null);
  const hovering = useRef(false);

  useEffect(() => {
    const el = industryTrack.current;
    if (!el) return;
    const tick = () => {
      if (hovering.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    };
    const id = setInterval(tick, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero"><Parallax className="hero-copy" amount={18}><div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>AI Call Agent</b></div><div className="eyebrow"><span className="dot" /> AI CALL AGENT · ENTERPRISE VOICE AUTOMATION</div><h1>Smarter calls.<br /><span>Better conversion.</span><br />Stronger business.</h1><p>Create intelligent AI voice agents, automate campaigns, and manage every conversation from one powerful platform.</p><div className="actions"><button className="primary" onClick={() => go('contact')}>Book a Demo <ArrowUpRight size={18} /></button><button className="textbtn" onClick={() => go('how')}>See how it works <ArrowRight size={17} /></button></div></Parallax><Parallax className="hero-art" amount={40}><motion.div className="call-card" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><div className="call-top"><span><i className="live" /> LIVE CALL</span><span>02:41</span></div><div className="avatar">AI</div><div className="caller">AI Agent<small>Healthcare campaign</small></div><div className="wave">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ height: `${12 + (Math.sin(i * 1.8) + 1) * 13}px` }} />)}</div><div className="quote">“Hi Sarah, I'm calling regarding your appointment request...”</div><div className="call-bottom"><span>Conversation active</span><span className="signal">●●●</span></div></motion.div><div className="mini m1"><b>1,248</b><small>calls launched</small></div><div className="mini m2"><b>214</b><small>qualified leads</small></div><div className="mini m3"><b>24/7</b><small>availability</small></div><div className="tech-label">VOICE → DATA → ACTION</div></Parallax>      </section>

      <section className="trust"><span>BUILT FOR TEAMS THAT NEED TO</span><b>REACH</b><b>QUALIFY</b><b>FOLLOW UP</b><b>SUPPORT</b><b>CONVERT</b></section>

      <WhatWeSolve />

      {/* <section className="problem" id="solutions"><div className="section-label">THE CHALLENGE</div><div className="two-col"><h2>Your team shouldn't spend the day <em>making calls.</em></h2><div><p>Manual outbound calling takes time, follow-ups get missed, and customer interactions can become inconsistent. AI Call Agent turns repetitive calling into an intelligent workflow.</p><div className="problem-list"><span>01 <b>Manual calling</b></span><span>02 <b>Slow follow-ups</b></span><span>03 <b>Limited visibility</b></span><span>04 <b>High operating cost</b></span></div></div></div></section>

      <section className="solution" id="product"><div className="section-label">THE SOLUTION</div><h2>One platform.<br /><span>Every conversation.</span></h2><p className="lead">Create, train, launch and analyze intelligent voice agents from a single operational workspace.</p><div className="flow">{['Create', 'Train', 'Launch', 'Converse', 'Analyze'].map((x, i) => { const I = [Settings2, UploadCloud, Play, Phone, BarChart3][i], c = ['#1351D8', '#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6'][i]; return <motion.div className="flow-item" key={x} whileHover={{ y: -5 }}><small>0{i + 1}</small><div className="flow-icon" style={{ background: c + '1a', color: c }}><I size={22} /></div><h3>{x}</h3><p>{['Build your agent', 'Add business knowledge', 'Start a campaign', 'Let AI handle calls', 'Turn calls into insight'][i]}</p></motion.div>; })}</div></section> */}

      <HowItWorks />

      {/* <section className="dashboard"><div className="dashboard-head"><div><div className="section-label">PRODUCT EXPERIENCE</div><h2>Everything your calling team needs.<br /><span>In one dashboard.</span></h2></div><div className="dash-note">CAMPAIGN CONTROL<br /><b>LIVE</b></div></div><Parallax className="dash-window" amount={26}><div className="dash-nav"><b>AI CALL AGENT</b><span>Campaigns</span><span>Agents</span><span>Calls</span><span>Analytics</span><i /></div><div className="dash-body"><div className="dash-main"><div className="dash-title"><div><small>ACTIVE CAMPAIGN</small><h3>Healthcare Lead Campaign</h3></div><button>Running ●</button></div><div className="metrics"><div><small>CALLS</small><b>1,248</b><span>+18.4%</span></div><div><small>CONNECTED</small><b>786</b><span>+12.7%</span></div><div><small>QUALIFIED</small><b>214</b><span>+9.2%</span></div></div><div className="chart"><small>CALL ACTIVITY · TODAY</small><div className="bars">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ height: `${22 + Math.abs(Math.sin(i * 0.75)) * 70}px` }} />)}</div></div></div><aside><small>LIVE AGENTS</small>{['Sarah · Healthcare', 'David · Insurance', 'Maya · Retail'].map((x, i) => <div className="agent" key={x}><i />{x}<b>{i === 2 ? 'PAUSED' : 'LIVE'}</b></div>)}<hr /><small>RECENT CALL</small><p>Conversation recorded<br /><b>02:41</b> · Qualified</p></aside></div></Parallax></section> */}

      <section className="impact"><div className="section-label" style={{ color: 'var(--blue)' }}>BUSINESS IMPACT</div><h2>What changes when<br /><span>AI handles the calls?</span></h2><Parallax className="impact-grid" amount={20}><div><b>24/7</b><small>AVAILABILITY</small><p>Never miss a lead or support request because the team is offline.</p></div><div><b>90%</b><small>LOWER COSTS*</small><p>Automate routine calls and reduce repetitive calling operations.</p></div><div><b>0</b><small>WAIT TIME</small><p>Respond without putting customers on hold.</p></div><div><b>100%</b><small>CALL INSIGHT</small><p>Record, transcribe and analyze conversations for actionable data.</p></div></Parallax></section>

      <section className="features" id="features"><div className="section-label">CAPABILITIES</div><div className="two-col"><h2>Built for conversations <em>at scale.</em></h2><p className="lead">The controls your team needs to make AI calling useful, repeatable and measurable.</p></div><div className="feature-grid">{features.map(([title, I, text, c], i) => <motion.article key={title} whileHover={{ y: -4 }}><span className="feature-icon" style={{ background: c + '1a', color: c }}><I size={22} /></span><small>0{i + 1}</small><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>

      {/* <section className="impact"><div className="section-label" style={{ color: 'var(--blue)' }}>BUSINESS IMPACT</div><h2>What changes when<br /><span>AI handles the calls?</span></h2><Parallax className="impact-grid" amount={20}><div><b>24/7</b><small>AVAILABILITY</small><p>Never miss a lead or support request because the team is offline.</p></div><div><b>90%</b><small>LOWER COSTS*</small><p>Automate routine calls and reduce repetitive calling operations.</p></div><div><b>0</b><small>WAIT TIME</small><p>Respond without putting customers on hold.</p></div><div><b>100%</b><small>CALL INSIGHT</small><p>Record, transcribe and analyze conversations for actionable data.</p></div></Parallax></section> */}

      <section className="industries" id="industries"><div className="section-label">INDUSTRIES</div><div className="two-col"><h2>One AI workforce.<br /><em>Many industries.</em></h2><div><p className="lead">Adapt the conversation to the work your business needs to get done — across every sector, the agent learns your process and handles the calls that slow your team down.</p></div></div><div className="industry-scroll"><div className="industry-grid" ref={industryTrack} onMouseEnter={() => { hovering.current = true; }} onMouseLeave={() => { hovering.current = false; }}>{industries.map(([name, img, desc]) => <div className="industry-card" key={name}><img src={img} alt={name} loading="lazy" /><div className="industry-overlay"><h3>{name}</h3><p>{desc}</p></div></div>)}</div></div></section>

      {/* <section className="why"><div className="section-label">WHY AI CALL AGENT</div><h2>Not another calling tool.<br /><span>A calling system built around your business.</span></h2><div className="why-grid">{['Quick Setup', 'Unlimited Scale', 'Smart Conversations', 'Built-in QA', 'Unified Dashboard'].map((x, i) => <div key={x}><small>0{i + 1}</small><h3>{x}</h3><p>{['Launch human-like AI voice calls with a fast setup.', 'Handle more conversations without adding staff.', 'Train agents with information specific to your business.', 'Record, transcribe and analyze conversations.', 'Monitor calls, conversions and costs in one place.'][i]}</p></div>)}</div></section> */}

      <section className="cta" id="contact"><div className="cta-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1.2} blend={0.6} /></div><div className="cta-inner"><div className="cta-copy"><div className="section-label light">START HERE</div><h2>Let AI do the talking.<br /><span>You focus on growth.</span></h2><p>Ready to turn repetitive calls and follow-ups into an automated workflow?</p></div><form className="cta-form" onSubmit={e => e.preventDefault()}><h3>Request a Demo</h3><div className="cta-row"><label>Full Name<input type="text" name="name" placeholder="Your name" required /></label><label>Work Email<input type="email" name="email" placeholder="you@company.com" required /></label></div><div className="cta-row"><label>Company<input type="text" name="company" placeholder="Company name" /></label><label>Phone Number<input type="tel" name="phone" placeholder="+1 555 000 0000" /></label></div><label>Message<textarea name="message" rows="4" placeholder="Tell us about your calling workflow" /></label><button type="submit" className="primary lightbtn">Request a Demo <ArrowUpRight size={18} /></button></form></div></section>
    </>
  );
}

export default AICallAgent;