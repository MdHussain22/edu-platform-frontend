import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

const CourseCard = ({ course }) => {
  const styles = {
    card: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      transition: '0.4s ease',
    },
    imageContainer: {
      height: '200px',
      overflow: 'hidden',
      position: 'relative'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: '0.5s ease',
    },
    content: {
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    category: {
      color: '#fca311',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '10px'
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '10px',
      color: 'white'
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: 'var(--text-muted)',
      fontSize: '0.85rem',
      marginBottom: '20px'
    }
  };

  return (
    <div className="glass course-card-hover" style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={course.image} alt={course.title} style={styles.image} />
        <div style={{ 
          position: 'absolute', 
          top: '15px', 
          right: '15px', 
          background: 'rgba(0,0,0,0.6)', 
          backdropFilter: 'blur(4px)',
          padding: '5px 10px', 
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>
          {course.price}
        </div>
      </div>
      
      <div style={styles.content}>
        <span style={styles.category}>{course.category}</span>
        <h3 style={styles.title}>{course.title}</h3>
        
        <div style={styles.meta}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Star size={14} color="#fca311" fill="#fca311" /> {course.rating}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
             <Clock size={14} /> 6h 30m
          </div>
        </div>

        <Link to={`/course/${course.id}`} className="btn" style={{ 
          marginTop: 'auto', 
          background: 'rgba(255,255,255,0.1)', 
          color: 'white', 
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '10px'
        }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;