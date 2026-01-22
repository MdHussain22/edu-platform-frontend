import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  const styles = {
    card: { overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: '0.3s' },
    img: { width: '100%', height: '180px', objectFit: 'cover' },
    content: { padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' },
    tag: { fontSize: '0.7rem', color: '#fca311', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }
  };

  return (
    <div className="glass course-card" style={styles.card}>
      <div style={{position:'relative'}}>
        <img src={course.image} alt={course.title} style={styles.img} />
        <span style={{position:'absolute', top:'10px', right:'10px', background:'rgba(0,0,0,0.7)', padding:'4px 8px', borderRadius:'4px', fontSize:'0.8rem'}}>{course.price}</span>
      </div>
      <div style={styles.content}>
        <span style={styles.tag}>{course.category}</span>
        <h3 style={{margin:'10px 0', fontSize:'1.1rem'}}>{course.title}</h3>
        <div style={{display:'flex', gap:'15px', color:'gray', fontSize:'0.85rem', marginBottom:'15px'}}>
          <span style={{display:'flex', alignItems:'center', gap:'4px'}}><Star size={14} fill="#fca311" color="#fca311"/> {course.rating}</span>
          <span style={{display:'flex', alignItems:'center', gap:'4px'}}><Clock size={14}/> 6h 30m</span>
        </div>
        <Link to={`/course/${course.id}`} className="btn" style={{marginTop:'auto', background:'rgba(255,255,255,0.1)', color:'white', textAlign:'center'}}>View Course</Link>
      </div>
    </div>
  );
};
export default CourseCard;