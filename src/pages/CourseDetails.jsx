import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { CheckCircle, PlayCircle, Lock, ChevronDown, ChevronUp, Star, Globe, Award } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [activeSection, setActiveSection] = useState(null); // For accordion

  if (!course) return <div className="container" style={{padding: '4rem'}}>Course not found</div>;

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const styles = {
    header: {
      background: 'linear-gradient(to right, #1a1a2e, #16213e)',
      padding: '80px 0 60px',
      color: 'white',
      marginTop: '60px' // Offset for navbar
    },
    metaBadge: {
      background: 'rgba(252, 163, 17, 0.2)',
      color: '#fca311',
      padding: '5px 12px',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    glassBox: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '30px',
      marginBottom: '30px'
    },
    curriculumItem: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      marginBottom: '10px',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    curriculumHeader: {
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      fontWeight: '600'
    }
  };

  return (
    <div>
      {/* --- HERO HEADER (Udemy Style) --- */}
      <section style={styles.header}>
        <div className="container">
          <span style={styles.metaBadge}>{course.category}</span>
          <h1 style={{ fontSize: '3rem', margin: '20px 0 15px', lineHeight: 1.2 }}>{course.title}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', opacity: 0.8 }}>{course.description}</p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fca311', fontWeight: 'bold' }}>
              <span style={{ background: '#fca311', color: 'black', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>Bestseller</span>
              <span>{course.rating}</span>
              <div style={{ display: 'flex' }}>{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fca311" />)}</div>
            </div>
            <span style={{ opacity: 0.6 }}>({course.reviews} ratings)</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Globe size={16} /> English</span>
          </div>

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link to="/login" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
              Enroll Now for {course.price}
            </Link>
            <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', padding: '50px 20px' }}>
        
        {/* --- LEFT COLUMN --- */}
        <main>
          {/* 1. What You'll Learn (The "Checkmark Box") */}
          <div style={styles.glassBox}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>What you'll learn</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {course.learningPoints?.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'start', opacity: 0.9 }}>
                  <CheckCircle size={20} color="#fca311" style={{ minWidth: '20px' }} />
                  <span style={{ fontSize: '0.95rem' }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Course Content (The "Accordion") */}
          <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Course Content</h3>
          <div style={{ marginBottom: '40px' }}>
            {course.syllabus?.map((section, index) => (
              <div key={index} style={styles.curriculumItem}>
                <div style={styles.curriculumHeader} onClick={() => toggleSection(index)}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {activeSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    <span>{section.week}: {section.topic}</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>{section.content.length} lectures</span>
                </div>
                
                {/* Collapsible Content */}
                {activeSection === index && (
                  <div style={{ padding: '0 20px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {section.content.map((lesson, idx) => (
                      <div key={idx} style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <PlayCircle size={16} />
                        {lesson}
                        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', opacity: 0.5 }}><Lock size={14}/></span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. Instructor Bio */}
          <div style={styles.glassBox}>
            <h3 style={{ marginBottom: '20px' }}>Instructor</h3>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src="https://i.pravatar.cc/150?img=68" alt="Instructor" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #fca311' }} />
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#fca311', marginBottom: '5px' }}>{course.instructor}</h4>
                <p style={{ opacity: 0.7, marginBottom: '10px' }}>{course.role}</p>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem' }}>
                  <span>⭐ 4.8 Instructor Rating</span>
                  <span>🎓 50,000 Students</span>
                  <span>▶️ 12 Courses</span>
                </div>
              </div>
            </div>
          </div>

        </main>

        {/* --- RIGHT COLUMN (Sticky Sidebar) --- */}
        <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
           <div style={{ ...styles.glassBox, padding: '0', overflow: 'hidden' }}>
             <img src={course.image} alt="Preview" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
             <div style={{ padding: '25px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{course.price}</div>
                <Link to="/login" className="btn btn-primary" style={{ width: '100%', display: 'block', marginBottom: '15px' }}>Enroll Now</Link>
                <button className="btn" style={{ width: '100%', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Add to Wishlist</button>
                
                <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <p style={{ marginBottom: '8px' }}>✅ Full Lifetime Access</p>
                  <p style={{ marginBottom: '8px' }}>✅ Access on Mobile and TV</p>
                  <p>✅ Certificate of Completion</p>
                </div>
             </div>
           </div>
        </aside>

      </div>
    </div>
  );
};

export default CourseDetails;

