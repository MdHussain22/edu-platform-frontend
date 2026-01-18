import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Search } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Marketing'];

  // Filter Logic
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '50px' }}>
      <div className="container">
        
        {/* --- SEARCH HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title">Explore Courses</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Discover the best content to learn from.</p>
          
          {/* Search Bar */}
          <div style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search style={{ position: 'absolute', left: '20px', color: '#a0a0c0' }} size={20} />
            <input 
              type="text" 
              placeholder="Search for Python, React, Design..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 15px 15px 50px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                backdropFilter: 'blur(10px)'
              }}
            />
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 25px',
                  borderRadius: '30px',
                  border: selectedCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  background: selectedCategory === cat ? '#fca311' : 'rgba(255,255,255,0.05)',
                  color: selectedCategory === cat ? 'black' : 'white',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: '0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- COURSE GRID --- */}
        {filteredCourses.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)' }}>
            <h3>No courses found matching "{searchTerm}"</h3>
            <button onClick={() => {setSearchTerm(''); setSelectedCategory('All')}} style={{ marginTop: '10px', color: '#fca311', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Courses;
