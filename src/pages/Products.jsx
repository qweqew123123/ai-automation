import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Aurora from '../components/Aurora.jsx';

const products = [
  {
    name: 'AI Call Agent',
    category: 'AI & Automation',
    desc: 'AI-powered voice agents for automated customer conversations, campaigns, scheduling and performance monitoring.',
    img: '/images/aicall.jpg',
    to: '/products/ai-call-agent',
    cta: 'Explore AI Call Agent',
    tag: 'VOICE AI',
  },
  {
    name: 'FireGuard VR',
    category: 'VR / Safety Training',
    desc: 'Immersive virtual reality fire safety training that prepares employees before emergencies happen.',
    img: '/images/fireguard.jpg',
    to: '/products/fireguard-vr',
    cta: 'Explore FireGuard VR',
    tag: 'VR TRAINING',
  },
  {
    name: 'IntelliFleet',
    category: 'Bus & Driver Management Suite',
    desc: 'Operations console for buses, drivers, routes and passengers — live tracking, boarding scans and compliance in one workspace.',
    img: '/images/bus.jpg',
    to: '/products/bus-driver-management',
    cta: 'Explore IntelliFleet',
    tag: 'INTELLIFLEET',
  },
];

function Products() {
  return (
    <>
      <section className="products-hero">
        <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><b>Products</b></div>
        <div className="section-label">OUR PRODUCTS</div>
        <h1>Our Products</h1>
        <p className="lead">Technology solutions designed to solve real business challenges.</p>
      </section>

      <section className="products-grid-wrap">
        <div className="products-grid">
          {products.map((p, i) => (
            <motion.article className="product-card" key={p.name} whileHover={{ y: -5 }}>
              <div className="product-card-visual">
                <img className="product-card-img" src={p.img} alt={p.name} loading="lazy" />
                <span className="product-card-shade" />
                <span className="product-card-tag">{p.tag}</span>
              </div>
              <div className="product-card-body">
                <span className="product-card-cat">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Link className="product-card-cta" to={p.to}>{p.cta} <ArrowUpRight size={16} /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="cta products-cta" id="contact">
        <div className="cta-aurora"><Aurora colorStops={['#1351D8', '#6fcff5', '#0b3aa8']} amplitude={1.2} blend={0.6} /></div>
        <div className="cta-inner">
          <div className="cta-copy">
            <div className="section-label light">HAVE A PROJECT IN MIND?</div>
            <h2>Not sure which product<br /><span>fits your business?</span></h2>
            <p>Talk to our team and we&apos;ll point you to the right solution.</p>
          </div>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <h3>Talk to our team</h3>
            <div className="cta-row"><label>Full Name<input type="text" name="name" placeholder="Your name" required /></label><label>Work Email<input type="email" name="email" placeholder="you@company.com" required /></label></div>
            <div className="cta-row"><label>Company<input type="text" name="company" placeholder="Company name" /></label><label>Phone Number<input type="tel" name="phone" placeholder="+1 555 000 0000" /></label></div>
            <label>Message<textarea name="message" rows="4" placeholder="Tell us about your requirements" /></label>
            <button type="submit" className="primary lightbtn">Contact Us <ArrowUpRight size={18} /></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Products;