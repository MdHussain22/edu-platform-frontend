import React from 'react';
import { BookOpen, Globe } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: { background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto', padding: '60px 0 20px', fontSize: '0.9rem', color: '#a0a0c0' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' },
    link: { display: 'block', marginBottom: '12px', color: '#a0a0c0' },
    bottom: { borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          <div>
            <h4 style={{color:'white', marginBottom:'20px'}}>Lumina Business</h4>
            <a href="#" style={styles.link}>Teach on Lumina</a>
            <a href="#" style={styles.link}>Get the app</a>
            <a href="#" style={styles.link}>About us</a>
          </div>
          <div>
            <h4 style={{color:'white', marginBottom:'20px'}}>Careers</h4>
            <a href="#" style={styles.link}>Blog</a>
            <a href="#" style={styles.link}>Help and Support</a>
            <a href="#" style={styles.link}>Affiliate</a>
          </div>
          <div>
             <button style={{background:'transparent', border:'1px solid white', color:'white', padding:'8px 20px', display:'flex', gap:'8px', cursor:'pointer'}}>
               <Globe size={16}/> English
             </button>
          </div>
        </div>
        <div style={styles.bottom}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', color:'white'}}>
            <BookOpen size={20} color="#fca311"/> <span>LUMINA</span>
          </div>
          <span>© 2026 Lumina Inc.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;