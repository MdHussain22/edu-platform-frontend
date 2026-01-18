import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Bell, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the "Login" or "Signup" page to hide complex nav items
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: '0.3s ease',
      padding: isScrolled ? '15px 0' : '25px 0',
      background: isScrolled ? 'rgba(15, 12, 41, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 25px'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      letterSpacing: '1px',
      textDecoration: 'none'
    },
    searchContainer: {
      display: isAuthPage ? 'none' : 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '50px',
      padding: '8px 20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      width: '400px',
      transition: '0.3s'
    },
    input: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      marginLeft: '10px',
      width: '100%',
      outline: 'none',
      fontSize: '0.9rem'
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    link: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: '0.3s',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    iconBtn: {
      background: 'rgba(255,255,255,0.05)',
      border: 'none',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      cursor: 'pointer',
      transition: '0.3s',
      position: 'relative'
    },
    badge: {
      position: 'absolute',
      top: '-2px',
      right: '-2px',
      background: '#fca311',
      color: 'black',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* 1. LOGO */}
        <Link to="/" style={styles.logo}>
          <div style={{ background: '#fca311', padding: '8px', borderRadius: '8px', display: 'flex' }}>
            <BookOpen size={20} color="black" strokeWidth={2.5} />
          </div>
          <span>LUMINA</span>
        </Link>

        {/* 2. SEARCH BAR (Hidden on Mobile/Auth Pages) */}
        {!isAuthPage && (
          <div className="nav-search" style={styles.searchContainer}>
            <Search size={18} color="rgba(255,255,255,0.5)" />
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              style={styles.input} 
            />
          </div>
        )}

        {/* 3. MENU ITEMS */}
        <div style={styles.menu} className="desktop-menu">
          <Link to="/" style={styles.link}>Home</Link>
          
          <div style={{ position: 'relative', cursor: 'pointer' }} className="dropdown-trigger">
            <Link to="/courses" style={styles.link}>
              Courses <ChevronDown size={14} />
            </Link>
          </div>

          <Link to="/dashboard" style={styles.link}>My Learning</Link>

          {/* Divider */}
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>

          {/* Icons Section */}
          <button style={styles.iconBtn}>
            <ShoppingCart size={20} />
          </button>
          
          <button style={styles.iconBtn}>
            <Bell size={20} />
            <span style={styles.badge}>3</span> {/* Fake notification count */}
          </button>

          {/* Profile Button */}
          <Link to="/login" style={{ ...styles.iconBtn, background: 'linear-gradient(135deg, #fca311, #ff6b6b)' }}>
            <User size={20} color="black" />
          </Link>
        </div>

        {/* Mobile Menu Toggle (Visible only on small screens via CSS) */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'white', display: 'none' }}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;