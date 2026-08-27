import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './FireGuardHowItWorks.css';

const fgSteps = [
  {
    number: '01',
    title: 'WEAR HEADSET',
    description: 'Put on the Meta Quest headset and enter the immersive training environment.',
    bg: '/images/fg-steps/fg-01.jpg',
  },
  {
    number: '02',
    title: 'EXPLORE FACTORY',
    description: 'Move through a realistic industrial environment and get familiar with your surroundings.',
    bg: '/images/fg-steps/fg-02.jpg',
  },
  {
    number: '03',
    title: 'IDENTIFY HAZARD',
    description: 'Spot hazards and assess the situation before deciding how to respond.',
    bg: '/images/fg-steps/fg-03.jpg',
  },
  {
    number: '04',
    title: 'SELECT EXTINGUISHER',
    description: 'Choose the right extinguisher for the fire type you are facing.',
    bg: '/images/fg-steps/fg-04.jpg',
  },
  {
    number: '05',
    title: 'PRACTICE PASS',
    description: 'Perform Pull, Aim, Squeeze and Sweep with guided hand tracking.',
    bg: '/images/fg-steps/fg-05.jpg',
  },
  {
    number: '06',
    title: 'EXTINGUISH FIRE',
    description: 'Safely control and extinguish the simulated fire using the correct technique.',
    bg: '/images/fg-steps/fg-06.jpg',
  },
  {
    number: '07',
    title: 'PERFORMANCE ASSESSMENT',
    description: 'Receive instant, measurable feedback on your emergency response.',
    bg: '/images/fg-steps/fg-07.jpg',
  },
  {
    number: '08',
    title: 'DIGITAL CERTIFICATION',
    description: 'Complete the training and receive a digital certificate.',
    bg: '/images/fg-steps/fg-08.jpg',
  },
];

const BASE_BG = '/images/fg-vr-bg.jpg';

function FireGuardHowItWorks() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const shown = hovered ?? 0;

  return (
    <section className="fghiw">
      <div className="fghiw-bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={shown}
            className="fghiw-bg-img"
            style={{ backgroundImage: `url(${hovered !== null ? fgSteps[hovered].bg : BASE_BG})` }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </AnimatePresence>
      </div>
      <div className="fghiw-overlay" />

      <div className="fghiw-inner">
        <div className="fghiw-top">
          <div className="fghiw-top-left">
            <motion.span className="fghiw-label" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>03 — HOW IT WORKS</motion.span>
            <motion.h2 className="fghiw-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}>EXPERIENCE.<br />PRACTICE.<br />IMPROVE.</motion.h2>
          </div>
          <motion.div className="fghiw-nav" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>01 — 08</motion.div>
        </div>

        <div className="fghiw-steps" onMouseLeave={() => setHovered(null)}>
          {fgSteps.map((s, i) => (
            <motion.div
              className={'fghiw-step' + (i === shown ? ' on' : '')}
              key={s.number}
              onMouseEnter={() => { setHovered(i); setActive(i); }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
            >
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

export default FireGuardHowItWorks;