import React from 'react';
import { courses } from '../data/courses';
import { BookOpen, Award, TrendingUp, PlayCircle } from 'lucide-react';

const Dashboard = () => {
  const user = { name: "Hussain", progress: [courses[0], courses[1]] };

  return (
    <div className="container" style={{paddingTop:'120px', paddingBottom:'60px'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom:'40px'}}>
        <div>
           <h1>Welcome back, <span style={{color:'#fca311'}}>{user.name}</span></h1>
           <p style={{color:'gray'}}>You've learned for 32 hours this week.</p>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'25px', marginBottom:'40px'}}>
        {[
          { icon: <BookOpen/>, val: "4", label: "Courses" },
          { icon: <Award/>, val: "2", label: "Certificates" },
          { icon: <TrendingUp/>, val: "Top 5%", label: "Rank" }
        ].map((s, i) => (
          <div key={i} className="glass" style={{padding:'25px', display:'flex', alignItems:'center', gap:'20px'}}>
             <div style={{background:'rgba(252,163,17,0.1)', padding:'10px', borderRadius:'50%', color:'#fca311'}}>{s.icon}</div>
             <div><div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{s.val}</div><div style={{color:'gray', fontSize:'0.9rem'}}>{s.label}</div></div>
          </div>
        ))}
      </div>

      <h3 style={{marginBottom:'20px'}}>Continue Learning</h3>
      <div className="glass" style={{padding:'10px'}}>
        {user.progress.map(c => (
          <div key={c.id} style={{display:'grid', gridTemplateColumns:'80px 1fr auto', gap:'20px', padding:'15px', alignItems:'center', borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
             <img src={c.image} style={{width:'80px', height:'50px', objectFit:'cover', borderRadius:'6px'}}/>
             <div>
               <h4>{c.title}</h4>
               <div style={{width:'100%', height:'4px', background:'rgba(255,255,255,0.1)', borderRadius:'2px', marginTop:'8px'}}>
                 <div style={{width:'45%', height:'100%', background:'#fca311', borderRadius:'2px'}}></div>
               </div>
             </div>
             <button className="btn btn-primary" style={{padding:'8px 20px', fontSize:'0.8rem'}}><PlayCircle size={16}/> Resume</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
