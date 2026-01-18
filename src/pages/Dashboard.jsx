import React from 'react';
import { courses } from '../data/courses';
import { Clock, Award, BookOpen, PlayCircle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  // Mock data for the logged-in user
  const user = {
    name: "Hussain",
    role: "Full-Stack Developer",
    coursesInProgress: [courses[0], courses[1]]
  };

  const styles = {
    page: {
      paddingTop: '100px',
      paddingBottom: '50px',
      minHeight: '100vh',
    },
    header: {
      marginBottom: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end'
    },
    welcome: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '10px'
    },
    subtext: {
      color: 'var(--text-muted)',
      fontSize: '1.1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginBottom: '40px'
    },
    statCard: {
      padding: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      position: 'relative',
      overflow: 'hidden'
    },
    statIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'rgba(252, 163, 17, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fca311'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    courseItem: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: '20px',
      alignItems: 'center',
      padding: '20px',
      marginBottom: '15px',
      transition: '0.3s ease'
    },
    image: {
      width: '80px',
      height: '60px',
      borderRadius: '10px',
      objectFit: 'cover'
    },
    progressBar: {
      height: '6px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      marginTop: '10px',
      width: '100%',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: '#fca311',
      width: '45%', // Mock progress
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(252, 163, 17, 0.5)'
    }
  };

  return (
    <div className="container" style={styles.page}>
      
      {/* --- HEADER --- */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.welcome}>Welcome back, <span style={{color: '#fca311'}}>{user.name}</span></h1>
          <p style={styles.subtext}>You've learned for <strong>32 hours</strong> this week. Keep it up!</p>
        </div>
        <div style={{ textAlign: 'right', display: 'none' }}> {/* Hidden on mobile via media query if needed */}
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Current Streak</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fca311' }}>🔥 12 Days</div>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div style={styles.grid}>
        <div className="glass" style={styles.statCard}>
          <div style={styles.statIcon}><BookOpen size={28} /></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>4</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Courses in Progress</div>
          </div>
        </div>

        <div className="glass" style={styles.statCard}>
          <div style={styles.statIcon}><Award size={28} /></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>2</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Certificates Earned</div>
          </div>
        </div>

        <div className="glass" style={styles.statCard}>
          <div style={styles.statIcon}><TrendingUp size={28} /></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Top 5%</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Class Ranking</div>
          </div>
        </div>
      </div>

      {/* --- COURSE LIST --- */}
      <div>
        <h2 style={styles.sectionTitle}><PlayCircle size={24} color="#fca311" /> Continue Learning</h2>
        
        <div className="glass" style={{ padding: '10px' }}>
          {user.coursesInProgress.map((course, index) => (
            <div key={course.id} style={styles.courseItem} className="course-row">
              <img src={course.image} alt={course.title} style={styles.image} />
              
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{course.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div style={styles.progressBar}>
                  <div style={styles.progressFill}></div>
                </div>
              </div>

              <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                Resume
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
