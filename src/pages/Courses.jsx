import React from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  return (
    <div style={{ padding: '3rem 0', minHeight: '80vh' }}>
      <div className="container">
        <h2 className="section-title">All Courses</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--gray)' }}>Browse our extensive catalog of professional skills.</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
