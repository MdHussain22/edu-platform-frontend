import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react'; // Icon import

const Navbar = () => {
  const styles = {
    nav: {
      background: 'white',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    links: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    }
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.wrapper}>
        <Link to="/" style={styles.logo}>
          <BookOpen size={28} />
          Lumina
        </Link>
        <div style={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/dashboard">My Learning</Link>
          <Link to="/login" className="btn btn-primary">Log In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;