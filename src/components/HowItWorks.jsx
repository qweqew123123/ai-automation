import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './HowItWorks.css';

const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Upload CSV, documents or text',
    description: 'Drop your business documents, CSV exports or raw text and the agent instantly learns your products, services and FAQs.',
    image: '/images/how-01.jpg',
    label: 'KNOWLEDGE BASE',
  },
  {
    number: '02',
    title: 'Configure persona, tone, style and goals',
    description: 'Set the persona, tone, style and conversation goals so every call sounds intentional and on-brand.',
    image: '/images/how-02.jpg',
    label: 'AGENT PERSONA',
  },
  {
    number: '03',
    title: 'Create campaign, schedule and retry logic',
    description: 'Define campaign schedules, retry logic and pacing so follow-ups happen automatically, around your workflow.',
    image: '/images/how-03.jpg',
    label: 'CAMPAIGN BUILDER',
  },
  {
    number: '04',
    title: 'AI handles the conversation',
    description: 'The AI agent speaks naturally, answers questions, takes action and qualifies leads in real time.',
    image: '/images/how-04.jpg',
    label: 'LIVE CONVERSATION',
  },
  {
    number: '05',
    title: 'Record, transcribe and analyze',
    description: 'Every conversation is recorded, transcribed and analyzed so your team gets insight it can act on.',
    image: '/images/how-05.jpg',
    label: 'CALL ANALYTICS',
  },
];

const STEP_DURATION = 5.6;

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const step = HOW_IT_WORKS_STEPS[activeStep];

  useEffect(() => {
    const t = setInterval(() => setActiveStep(prev => (prev + 1) % HOW_IT_WORKS_STEPS.length), STEP_DURATION * 1000);
    return () => clearInterval(t);
  }, [activeStep]);

  return (
    <section className="how" id="how">
      <div className="hiw-head">
        <div className="section-label">HOW IT WORKS</div>
        <h2>From your data<br />to a <em>real conversation.</em></h2>
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
          {HOW_IT_WORKS_STEPS.map((s, i) => (
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
                    transition={{ duration: STEP_DURATION, ease: 'linear' }}
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

export default HowItWorks;