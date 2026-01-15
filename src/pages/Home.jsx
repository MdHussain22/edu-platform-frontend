import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { PlayCircle, Award, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Big Text (Depth Effect) */}
        <h1 style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20vw',
          fontWeight: '900',
          color: 'rgba(255,255,255,0.02)',
          zIndex: -1,
          whiteSpace: 'nowrap',
          pointerEvents: 'none'
        }}>
          LEARN
        </h1>

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div>
            <div style={{ 
              display: 'inline-block', 
              padding: '8px 16px', 
              background: 'rgba(252, 163, 17, 0.1)', 
              color: '#fca311', 
              borderRadius: '20px', 
              marginBottom: '20px',
              fontWeight: '600',
              border: '1px solid rgba(252, 163, 17, 0.2)'
            }}>
              🚀 The Future of Education
            </div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '25px' }}>
              Unlock Your <br />
              <span style={{ color: '#fca311' }}>Creative Mind.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px' }}>
              Experience a new era of learning. Master coding, design, and business with an immersive platform designed for the modern world.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/courses" className="btn btn-primary">Start Learning</Link>
              <button className="btn glass" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PlayCircle size={20} /> Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - The "Floating" 3D Visual */}
          <div style={{ position: 'relative', height: '500px' }}>
            {/* Main Floating Card */}
            <div className="glass floating" style={{ 
              padding: '30px', 
              position: 'absolute', 
              top: '50px', 
              left: '50px', 
              right: '50px',
              zIndex: 2,
              background: 'linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.9rem', color: '#fca311' }}>Live Session</span>
                <span style={{ background: 'red', width: '8px', height: '8px', borderRadius: '50%' }}></span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Web Architecture</h3>
              <p style={{ color: 'var(--text-muted)' }}>Advanced concepts for senior engineers.</p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '-10px' }}>
                {/* Mock Avatars */}
                {[1,2,3].map(i => (
                  <div key={i} style={{ 
                    width: '40px', height: '40px', borderRadius: '50%', background: `#333`, border: '2px solid rgba(255,255,255,0.2)', marginLeft: i > 1 ? '-10px' : 0 
                  }}></div>
                ))}
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="glass floating" style={{ 
              position: 'absolute', top: '0', right: '0', padding: '15px', borderRadius: '20px', animationDelay: '1s'
            }}>
              <Award color="#fca311" size={32} />
            </div>

            {/* Floating Badge 2 */}
            <div className="glass floating" style={{ 
              position: 'absolute', bottom: '50px', left: '0', padding: '20px', borderRadius: '20px', animationDelay: '2s', display: 'flex', gap: '10px', alignItems: 'center'
            }}>
              <Zap color="#fca311" fill="#fca311" />
              <div>
                <div style={{ fontWeight: 'bold' }}>10k+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Students</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Trending Now</h2>
            <Link to="/courses" style={{ color: '#fca311', fontWeight: 'bold' }}>View All Courses &rarr;</Link>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '30px' 
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


