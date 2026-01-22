import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { Star, CheckCircle, PlayCircle, Lock, ChevronDown } from 'lucide-react';

const CourseDetails = ({ showToast }) => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [openSection, setOpenSection] = useState(0);

  if (!course) return <div style={{paddingTop:'150px', textAlign:'center'}}>Course not found</div>;

  return (
    <div style={{paddingTop:'100px', paddingBottom:'60px'}}>
      <div style={{background:'#0a0a0f', padding:'60px 0', borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <span style={{color:'#fca311', textTransform:'uppercase', letterSpacing:'1px', fontSize:'0.9rem'}}>{course.category}</span>
          <h1 style={{fontSize:'3rem', margin:'10px 0'}}>{course.title}</h1>
          <p style={{maxWidth:'600px', color:'#a0a0c0', fontSize:'1.2rem'}}>{course.description}</p>
          <div style={{display:'flex', gap:'10px', marginTop:'20px', alignItems:'center'}}>
            <span style={{background:'#fca311', color:'black', padding:'2px 8px', borderRadius:'4px', fontWeight:'bold'}}>Bestseller</span>
            <span style={{color:'#fca311', fontWeight:'bold'}}>{course.rating}</span>
            <div style={{display:'flex'}}>{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fca311" color="#fca311"/>)}</div>
            <span style={{color:'gray'}}>({course.reviews} ratings)</span>
          </div>
        </div>
      </div>

      <div className="container" style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:'50px', marginTop:'40px'}}>
        <div>
          <div className="glass" style={{padding:'30px', marginBottom:'30px'}}>
            <h3 style={{marginBottom:'20px'}}>What you'll learn</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
              {course.learningPoints?.map((p, i) => (
                <div key={i} style={{display:'flex', gap:'10px', color:'#e0e0e0'}}><CheckCircle size={20} color="#fca311"/> {p}</div>
              ))}
            </div>
          </div>

          <h3 style={{marginBottom:'20px'}}>Course Content</h3>
          {course.syllabus?.map((s, i) => (
            <div key={i} style={{marginBottom:'10px', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'8px', overflow:'hidden'}}>
              <div onClick={() => setOpenSection(openSection === i ? -1 : i)} style={{padding:'15px', background:'rgba(255,255,255,0.05)', cursor:'pointer', display:'flex', justifyContent:'space-between'}}>
                <strong>{s.topic}</strong> <ChevronDown size={18}/>
              </div>
              {openSection === i && (
                <div style={{padding:'15px'}}>
                  {s.content.map((l, idx) => (
                    <div key={idx} style={{display:'flex', gap:'10px', padding:'8px 0', color:'gray', alignItems:'center'}}>
                      <PlayCircle size={16}/> {l} <Lock size={14} style={{marginLeft:'auto'}}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{position:'sticky', top:'100px', height:'fit-content'}}>
          <div className="glass" style={{padding:'0', overflow:'hidden'}}>
            <img src={course.image} style={{width:'100%', height:'200px', objectFit:'cover'}} />
            <div style={{padding:'25px'}}>
              <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{course.price}</h2>
              <Link to="/login" className="btn btn-primary" style={{width:'100%', marginBottom:'10px'}}>Enroll Now</Link>
              <p style={{fontSize:'0.85rem', color:'gray', textAlign:'center'}}>30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
