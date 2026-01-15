import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create Account</h2>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Full Name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} />
          <input type="email" placeholder="Email" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} />
          <input type="password" placeholder="Password" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
        </form>
        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
