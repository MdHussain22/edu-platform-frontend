import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { PlayCircle, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div style={{paddingTop:'80px'}}>
      {/* Hero */}
      <section style={{minHeight:'80vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden'}}>
        <div className="container" style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', alignItems:'center', gap:'50px'}}>
          <div className="fade-in">
            <span style={{color:'#fca311', background:'rgba(252,163,17,0.1)', padding:'5px 15px', borderRadius:'20px', fontSize:'0.9rem', fontWeight:'bold'}}>🚀 Future of Learning</span>
            <h1 style={{fontSize:'4rem', lineHeight:'1.1', margin:'20px 0'}}>Unlock Your <br/><span style={{color:'#fca311'}}>Creative Mind.</span></h1>
            <p style={{fontSize:'1.2rem', color:'#a0a0c0', marginBottom:'40px', maxWidth:'500px'}}>Master coding, design, and business with our immersive, project-based platform.</p>
            <div style={{display:'flex', gap:'20px'}}>
              <Link to="/courses" className="btn btn-primary">Start Learning</Link>
              <button className="btn" style={{background:'rgba(255,255,255,0.1)', color:'white'}}><PlayCircle size={20}/> Watch Demo</button>
            </div>
          </div>
          
          <div className="floating" style={{position:'relative'}}>
             <div className="glass" style={{padding:'30px', transform:'rotate(-3deg)'}}>
                <h3>Web Architecture</h3>
                <p style={{color:'gray'}}>Advanced concepts for seniors.</p>
                <div style={{marginTop:'20px', display:'flex', alignItems:'center', gap:'10px'}}>
                  <Zap fill="#fca311" color="#fca311"/> <span>Trending Course</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{padding:'60px 0'}}>
        <div className="container">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom:'40px'}}>
            <h2 className="section-title">Featured Courses</h2>
            <Link to="/courses" style={{color:'#fca311'}}>View All &rarr;</Link>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'30px'}}>
            {courses.slice(0, 3).map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;

