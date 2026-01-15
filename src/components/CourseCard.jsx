import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const styles = {
    card: {
      background: 'white',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      overflow: 'hidden',
      transition: 'var(--transition)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
    },
    content: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    category: {
      fontSize: '0.8rem',
      color: 'var(--primary)',
      fontWeight: '600',
      textTransform: 'uppercase',
      marginBottom: '0.5rem',
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
      lineHeight: 1.4,
    },
    instructor: {
      color: 'var(--gray)',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    footer: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '1px solid var(--border)',
    },
    price: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: 'var(--dark)',
    }
  };

  return (
    <div className="course-card" style={styles.card}>
      <img src={course.image} alt={course.title} style={styles.image} />
      <div style={styles.content}>
        <span style={styles.category}>{course.category}</span>
        <h3 style={styles.title}>{course.title}</h3>
        <p style={styles.instructor}>by {course.instructor}</p>
        <div style={styles.footer}>
          <span style={styles.price}>{course.price}</span>
          <Link to={`/course/${course.id}`} className="btn btn-outline" style={{padding: '5px 15px', fontSize: '0.8rem'}}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;