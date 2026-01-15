import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div className="container" style={{padding: '4rem'}}>Course not found</div>;

  return (
    <div>
      <div style={{ background: '#1e1b4b', color: 'white', padding: '4rem 0' }}>
        <div className="container">
          <span style={{ color: '#818cf8', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            {course.category}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{course.title}</h1>
          <p style={{ fontSize: '1.1rem', marginTop: '1rem', opacity: 0.8 }}>Created by {course.instructor}</p>
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{course.price}</span>
             {/* Mock functionality: Enroll goes to login */}
             <Link to="/login" className="btn btn-primary" style={{ padding: '12px 30px' }}>Enroll Now</Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 0', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <main>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About this Course</h3>
          <p style={{ lineHeight: '1.8', color: '#4b5563' }}>{course.description}</p>
          <p style={{ marginTop: '1rem', lineHeight: '1.8', color: '#4b5563' }}>
            This course is designed to take you from beginner to advanced. You will build real-world projects
            and gain hands-on experience. Join thousands of students who have already transformed their careers.
          </p>
        </main>
        <aside style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: 'var(--radius)', 
          border: '1px solid var(--border)',
          height: 'fit-content' 
        }}>
          <h4 style={{ marginBottom: '1rem' }}>What's included:</h4>
          <ul style={{ listStyle: 'none', space: '0.5rem' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>🎥 24 hours of video</li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>📁 15 downloadable resources</li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>🏆 Certificate of completion</li>
            <li style={{ padding: '0.5rem 0' }}>📱 Access on mobile and TV</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetails;

