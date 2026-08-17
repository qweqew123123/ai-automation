import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onProducts = pathname.startsWith('/products');

  const goContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 250);
    }
  };

  return (
    <header className="nav">
      <Link className="brand" to="/"><img className="brand-logo" src="/header.svg" alt="WebAshlar" /></Link>
      <nav className={open ? 'navlinks open' : 'navlinks'}>
        <Link to="/">About</Link>
        <Link to="/">Solutions</Link>
        <Link to="/products" className={onProducts ? 'active' : ''}>Products</Link>
        <a>Portfolio</a>
        <a>Career</a>
        <a>Blogs</a>
      </nav>
      <button className="navcta" onClick={goContact}>Contact Us <ArrowUpRight size={16} /></button>
      <button className="menubtn" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}

export default Navbar;
