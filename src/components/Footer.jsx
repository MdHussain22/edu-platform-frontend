import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: {
      background: '#0f0c29', // Deep dark purple to match your theme
      color: 'white',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: 'auto', // Pushes footer to bottom if page is short
      fontSize: '0.9rem'
    },
    topBanner: {
      padding: '20px 40px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    },
    mainContent: {
      padding: '40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    link: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: '0.2s'
    },
    langButton: {
      background: 'transparent',
      border: '1px solid white',
      color: 'white',
      padding: '8px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      width: 'fit-content'
    },
    bottomBar: {
      background: 'black',
      padding: '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Top Banner (Corporate Trust) */}
      <div style={styles.topBanner}>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Top companies choose <span style={{ color: '#fca311' }}>Lumina Business</span> to build in-demand career skills.
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {/* Fake Company Logos for "Social Proof" */}
          <span style={{ opacity: 0.5, fontWeight: 'bold' }}>NVIDIA</span>
          <span style={{ opacity: 0.5, fontWeight: 'bold' }}>GOOGLE</span>
          <span style={{ opacity: 0.5, fontWeight: 'bold' }}>TESLA</span>
          <span style={{ opacity: 0.5, fontWeight: 'bold' }}>NASA</span>
        </div>
      </div>

      {/* Main Links Section */}
      <div style={styles.mainContent}>
        {/* Column 1 */}
        <div style={styles.column}>
          <Link to="#" style={styles.link}>Lumina Business</Link>
          <Link to="#" style={styles.link}>Teach on Lumina</Link>
          <Link to="#" style={styles.link}>Get the app</Link>
          <Link to="#" style={styles.link}>About us</Link>
          <Link to="#" style={styles.link}>Contact us</Link>
        </div>

        {/* Column 2 */}
        <div style={styles.column}>
          <Link to="#" style={styles.link}>Careers</Link>
          <Link to="#" style={styles.link}>Blog</Link>
          <Link to="#" style={styles.link}>Help and Support</Link>
          <Link to="#" style={styles.link}>Affiliate</Link>
          <Link to="#" style={styles.link}>Investors</Link>
        </div>

        {/* Column 3 */}
        <div style={styles.column}>
          <Link to="#" style={styles.link}>Terms</Link>
          <Link to="#" style={styles.link}>Privacy policy</Link>
          <Link to="#" style={styles.link}>Cookie settings</Link>
          <Link to="#" style={styles.link}>Sitemap</Link>
          <Link to="#" style={styles.link}>Accessibility statement</Link>
        </div>

        {/* Column 4 (Language Selector) */}
        <div style={{ ...styles.column, alignItems: 'flex-start' }}>
          <button style={styles.langButton}>
            <Globe size={18} /> English
          </button>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={styles.bottomBar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#fca311', padding: '5px', borderRadius: '4px' }}>
            <BookOpen size={20} color="black" />
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LUMINA</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
          © 2026 Lumina, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;