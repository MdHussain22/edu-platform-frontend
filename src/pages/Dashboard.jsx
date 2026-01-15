import React from 'react';
import { courses } from '../data/courses'; // Reusing data as "enrolled" courses

const Dashboard = () => {
  // Simulating user having enrolled in the first two courses
  const myCourses = courses.slice(0, 2);

  return (
    <div className="container" style={{ padding: '3rem 0', minHeight: '80vh' }}>
      <h2 className="section-title">My Learning</h2>
      <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Welcome back, Student!</h3>
        {myCourses.length > 0 ? (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {myCourses.map(course => (
              <div key={course.id} style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '1rem', 
                border: '1px solid var(--border)', 
                borderRadius: '8px',
                alignItems: 'center'
              }}>
                <img src={course.image} alt={course.title} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <h4 style={{ margin: 0 }}>{course.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray)' }}>Progress: 45%</p>
                </div>
                <button className="btn btn-primary" style={{ marginLeft: 'auto', padding: '5px 15px', fontSize: '0.8rem' }}>Continue</button>
              </div>
            ))}
          </div>
        ) : (
          <p>You haven't enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

