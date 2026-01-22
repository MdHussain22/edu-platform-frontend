import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Bell, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, transition: '0.3s',
      padding: isScrolled ? '15px 0' : '25px 0',
      background: isScrolled ? 'rgba(15, 12, 41, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    },
    container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', padding: '0 25px' },
    logo: { fontSize: '1.5rem', fontWeight: '800', display: 'flex', gap: '10px', alignItems: 'center', color: 'white' },
    search: { background: 'rgba(255,255,255,0.05)', borderRadius: '50px', padding: '8px 20px', display: isAuthPage ? 'none' : 'flex', alignItems: 'center', width: '300px', border: '1px solid rgba(255,255,255,0.1)' },
    input: { background: 'transparent', border: 'none', color: 'white', marginLeft: '10px', width: '100%', outline: 'none' },
    menu: { display: 'flex', gap: '30px', alignItems: 'center' },
    iconBtn: { background: 'rgba(255,255,255,0.05)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', border: 'none', cursor: 'pointer' }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <div style={{background: '#fca311', padding: '6px', borderRadius: '6px'}}><BookOpen size={20} color="black"/></div>
          LUMINA
        </Link>

        {!isAuthPage && (
          <div className="nav-search" style={styles.search}>
            <Search size={18} color="gray"/>
            <input type="text" placeholder="Search courses..." style={styles.input} />
          </div>
        )}

        <div className="desktop-menu" style={styles.menu}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/dashboard">My Learning</Link>
          <button style={styles.iconBtn}><ShoppingCart size={18}/></button>
          <Link to="/login" style={{...styles.iconBtn, background: 'linear-gradient(135deg, #fca311, #ff6b6b)'}}><User size={18} color="black"/></Link>
        </div>
        
        <button className="mobile-toggle" style={{display:'none', background:'none', border:'none', color:'white'}}><Menu/></button>
      </div>
    </nav>
  );
};
export default Navbar;