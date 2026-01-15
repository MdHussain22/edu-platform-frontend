import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

const Navbar = () => {
  const styles = {
    nav: {
      padding: '20px 0',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      background: 'transparent', // Let the gradient show through
      backdropFilter: 'blur(5px)'
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '15px 30px',
      borderRadius: '50px', // Floating pill navbar
      border: '1px solid rgba(255,255,255,0.1)'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      letterSpacing: '1px'
    },
    links: { display: 'flex', gap: '30px', alignItems: 'center' },
    linkItem: { color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '0.95rem' }
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.wrapper}>
        <Link to="/" style={styles.logo}>
          <BookOpen color="#fca311" strokeWidth={2.5} />
          LUMINA
        </Link>
        <div style={styles.links}>
          <Link to="/" style={styles.linkItem}>Home</Link>
          <Link to="/courses" style={styles.linkItem}>Courses</Link>
          <Link to="/login" className="btn btn-primary" style={{ padding: '10px 25px' }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;