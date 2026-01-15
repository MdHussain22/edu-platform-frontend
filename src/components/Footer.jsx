import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--dark)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3>Lumina Academy</h3>
        <p style={{ color: 'var(--gray)', marginTop: '1rem' }}>Empowering the next generation of creators.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>© 2024 Lumina Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;