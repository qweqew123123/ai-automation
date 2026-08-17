import React from 'react';
import { ArrowUpRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="webashlar-footer">
      <div className="footer-atmosphere" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-meta">
          <span>LET&apos;S BUILD WHAT MATTERS.</span>
          <span>INDIA →</span>
        </div>

        <section className="footer-hero">
          <h2 className="footer-statement">
            Let&apos;s build<br />something great.
          </h2>
          <div className="footer-hero-side">
            <a className="footer-cta" href="#contact">
              <span className="footer-cta-text">GET AN APPOINTMENT <ArrowUpRight size={16} strokeWidth={1.6} /></span>
              <span className="footer-cta-underline" />
            </a>
            <div className="footer-info">
              <div className="info-block">
                <span className="info-label">BUSINESS ENQUIRY</span>
                <a href="mailto:info@webashlar.com">E. info@webashlar.com</a>
                <a href="tel:+916359488240">P. +91-63594 88240</a>
              </div>
              <div className="info-block">
                <span className="info-label">HR SUPPORT</span>
                <a href="mailto:hr@webashlar.com">E. hr@webashlar.com</a>
                <a href="tel:+917226056106">P. +91-72260 56106</a>
              </div>
              <div className="info-block">
                <span className="info-label">SOCIAL</span>
                <a>LinkedIn</a>
                <a>Instagram</a>
                <a>YouTube</a>
              </div>
            </div>
          </div>
        </section>

        <hr className="footer-divider" />

        <div className="footer-lower">
          <div className="footer-about-col">
            <a className="brand footbrand">
              <img className="brand-logo" src="/footer.svg" alt="WebAshlar" />
            </a>
            <p className="footer-about">
              Webashlar Software Solution Pvt. Ltd. is an emerging IT based company dealing in web design and
              development. With years of experience, we are known for providing tailor made solutions for all kinds
              of software development needs. We are committed to deliver cost effective and scalable solutions to our
              clients across the globe.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-col">
              <h3>SOLUTIONS</h3>
              <ul>
                <li><a>Web Development</a></li>
                <li><a>App Development</a></li>
                <li><a>UI/UX Design</a></li>
                <li><a>AR – VR Development</a></li>
                <li><a>AI &amp; Automation</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>COMPANY</h3>
              <ul>
                <li><a>About Us</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Career</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>PRODUCTS</h3>
              <ul>
                <li><a>AI Call Agent</a></li>
                <li><a>FireGuard VR</a></li>
                <li><a>IntelliFleet</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>CERTIFIED</h3>
              <ul>
                <li><a>ISO 9001:2015</a></li>
                <li><a>ISO 27001:2022</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-stats">
          <div className="footer-stat"><b>600+</b><span>PROJECTS</span></div>
          <span className="stat-sep" />
          <div className="footer-stat"><b>99%</b><span>CLIENT SATISFACTION</span></div>
          <span className="stat-sep" />
          <div className="footer-stat"><b>15+</b><span>YEARS</span></div>
          <span className="stat-sep" />
          <div className="footer-stat"><b>3+</b><span>PRODUCTS</span></div>
        </div>

        <div className="footer-art">
          <div className="footer-wordmark" aria-hidden="true">
            <div className="wm-track">
              {[0, 1].map(g => (
                <div className="wm-group" key={g}>
                  {'WEBASHLAR'.split('').map((ch, i) => <span key={i}>{ch}</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-copy">
          <div className="footer-social">
            <a aria-label="LinkedIn"><Linkedin size={15} strokeWidth={1.6} /></a>
            <a aria-label="Instagram"><Instagram size={15} strokeWidth={1.6} /></a>
            <a aria-label="Facebook"><Facebook size={15} strokeWidth={1.6} /></a>
          </div>
          © 2026 All rights reserved by Webashlar Software Solution Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}

export default Footer;