import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(to right, #4f46e5, #818cf8)', 
        color: 'white', 
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Master Your Future <br /> With Lumina
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', opacity: 0.9 }}>
            Professional courses taught by industry leaders. Build projects, earn certificates, and launch your career.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/courses" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Explore Courses</Link>
            <Link to="/signup" className="btn" style={{ border: '2px solid white', color: 'white' }}>Join for Free</Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
            <h2 className="section-title">Featured Courses</h2>
            <Link to="/courses" style={{ color: 'var(--primary)', fontWeight: '600' }}>View All &rarr;</Link>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


