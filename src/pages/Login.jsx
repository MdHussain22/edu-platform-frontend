import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    navigate('/dashboard');
  };

  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--light)' 
    }}>
      <div style={{ 
        background: 'white', 
        padding: '2.5rem', 
        borderRadius: 'var(--radius)', 
        boxShadow: 'var(--shadow)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Welcome Back</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }}
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Log In</button>
        </form>
        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
        // Updated URL to point to Spring Boot
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok && data.status === "Success") {
            console.log("Login Success:", data);
            // Save user to storage if needed
            // localStorage.setItem("user", JSON.stringify(data.user));
            navigate('/dashboard');
        } else {
            setError(data.message || 'Invalid email or password');
        }
    } catch (err) {
        console.error("Connection Error:", err);
        setError('Failed to connect to server. Is Spring Boot running?');
    }
  };

