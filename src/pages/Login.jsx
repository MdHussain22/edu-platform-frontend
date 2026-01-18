import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';

const Login = ({ showToast }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Optional: Show loading state
    // showToast('Verifying credentials...', 'info');

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // SUCCESS: Trigger the green toast
        showToast(`Welcome back!`, 'success');
        
        // Wait 1.5 seconds so they can see the message, then redirect
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        // FAILURE: Trigger the red toast
        showToast('Invalid email or password. Please try again.', 'error');
      }
    } catch (error) {
      // SERVER DOWN: Trigger the yellow toast
      showToast('Cannot connect to server. Is the backend running?', 'warning');
      console.error("Login Error:", error);
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at top right, #1a1a40, #0f0c29)',
      padding: '20px'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(16px)',
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      maxWidth: '420px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
      color: 'white'
    },
    subtitle: {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.6)',
      marginBottom: '30px'
    },
    inputGroup: {
      marginBottom: '20px',
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 50px',
      background: 'rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: 'white',
      fontSize: '1rem',
      outline: 'none',
      transition: '0.3s'
    },
    icon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'rgba(255, 255, 255, 0.4)'
    },
    button: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #fca311 0%, #ff6b6b 100%)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      cursor: 'pointer',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'transform 0.2s'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ padding: '12px', background: 'rgba(252, 163, 17, 0.1)', borderRadius: '50%' }}>
            <User size={32} color="#fca311" />
          </div>
        </div>
        
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Enter your credentials to access your account.</p>

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <Mail size={20} style={styles.icon} />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <Lock size={20} style={styles.icon} />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a href="#" style={{ color: '#fca311', fontSize: '0.9rem', textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          <button type="submit" style={styles.button}>
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#fca311', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;