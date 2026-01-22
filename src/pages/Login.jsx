import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';

const Login = ({ showToast }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    if(showToast) showToast('Connecting to server...', 'info');

    try {
      const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        if(showToast) showToast('Login Successful!', 'success');
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        if(showToast) showToast('Invalid credentials', 'error');
      }
    } catch (err) {
      if(showToast) showToast('Server offline', 'error');
    }
  };

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="glass" style={{padding:'40px', width:'100%', maxWidth:'400px'}}>
        <div style={{textAlign:'center', marginBottom:'30px'}}>
          <div style={{background:'rgba(252,163,17,0.1)', width:'60px', height:'60px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px'}}>
             <User size={30} color="#fca311"/>
          </div>
          <h2>Welcome Back</h2>
          <p style={{color:'gray'}}>Sign in to continue learning</p>
        </div>
        <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', gap:'15px'}}>
          <div style={{position:'relative'}}>
             <Mail size={18} style={{position:'absolute', top:'15px', left:'15px', color:'gray'}}/>
             <input type="email" placeholder="Email" value={data.email} onChange={e=>setData({...data, email:e.target.value})} 
               style={{width:'100%', padding:'14px 14px 14px 45px', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.1)', background:'rgba(0,0,0,0.2)', color:'white', outline:'none'}} required/>
          </div>
          <div style={{position:'relative'}}>
             <Lock size={18} style={{position:'absolute', top:'15px', left:'15px', color:'gray'}}/>
             <input type="password" placeholder="Password" value={data.password} onChange={e=>setData({...data, password:e.target.value})}
               style={{width:'100%', padding:'14px 14px 14px 45px', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.1)', background:'rgba(0,0,0,0.2)', color:'white', outline:'none'}} required/>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop:'10px'}}>Sign In <ArrowRight size={18}/></button>
        </form>
        <p style={{textAlign:'center', marginTop:'20px', fontSize:'0.9rem', color:'gray'}}>Don't have an account? <Link to="/signup" style={{color:'#fca311'}}>Sign Up</Link></p>
      </div>
    </div>
  );
};
export default Login;