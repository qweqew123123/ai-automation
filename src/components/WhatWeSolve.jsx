import React from 'react';
import { Phone, History, Users, BarChart3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Phone, title: 'Manual Calling', text: 'Hours spent dialing instead of handling high-value conversations.' },
  { icon: History, title: 'Missed Follow-ups', text: 'Leads go cold when follow-ups aren\'t consistent.' },
  { icon: Users, title: 'Limited Capacity', text: 'Your team can only handle so many conversations at once.' },
  { icon: BarChart3, title: 'Scattered Insights', text: 'Valuable information gets buried inside conversations.' },
  { icon: Sparkles, title: 'AI Call Agent', text: 'Automated calls, consistent follow-ups and structured insights at scale.' },
];

function WhatWeSolve() {
  return (
    <section className="solve" id="solve">
      <div className="section-label">WHAT WE SOLVE</div>
      <div className="two-col"><h2>Stop losing time to<br /><span>repetitive conversations.</span></h2><p className="lead">AI Call Agent takes repetitive outbound calling, follow-ups and qualification off your team's plate — so your people can focus on conversations that need them.</p></div>
      <div className="solve-grid">
        {items.map(({ icon: I, title, text }, i) => (
          <motion.div className="solve-item" key={title} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
            <small>0{i + 1}</small>
            <div className="solve-icon"><I size={22} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeSolve;
