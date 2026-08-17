import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BusFront } from 'lucide-react';

function BusDriver() {
  return (
    <>
      <section className="hero bd-hero">
        <div className="hero-copy">
          <div className="breadcrumb"><a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a><span>/</span><Link to="/products">Products</Link><span>/</span><b>Bus &amp; Driver Management</b></div>
          <div className="eyebrow"><span className="dot" /> BUS &amp; DRIVER MANAGEMENT · OPERATIONS</div>
          <h1>Complete digital management<br /><span>for bus operations.</span></h1>
          <p>Digital management solution for bus operations and driver management.</p>
          <div className="actions">
            <button className="primary">Request a Demo <ArrowUpRight size={18} /></button>
            <Link to="/products" className="textbtn">Explore Our Products <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="bd-visual">
          <div className="bd-icon-box"><BusFront size={40} /></div>
          <div className="bd-note">FULL PRODUCT DETAILS<br />COMING SOON</div>
        </div>
      </section>

      <section className="cta bd-cta" id="contact">
        <div className="cta-aurora" />
        <div className="cta-inner">
          <div className="section-label light">BUS &amp; DRIVER MANAGEMENT</div>
          <h2>A digital suite for<br /><span>bus operations.</span></h2>
          <p>Detailed capabilities for this product are being prepared. Check back soon.</p>
          <Link to="/products" className="primary lightbtn" style={{ textDecoration: 'none' }}>Explore Our Products <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

export default BusDriver;