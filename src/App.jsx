import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- IMPORT THIS LINE
import ToastContainer from './components/ToastContainer';

// Page Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';

function App() {
  const toastRef = useRef(null);

  const showToast = (message, type) => {
    if (toastRef.current) {
      toastRef.current.addToast(message, type);
    }
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar />

        {/* This div grows to push the footer down if the content is short */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login showToast={showToast} />} />
            <Route path="/course/:id" element={<CourseDetails showToast={showToast} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="*" element={<div style={{color: 'white', textAlign: 'center', marginTop: '100px'}}>404 - Page Not Found</div>} />
          </Routes>
        </div>

        <Footer /> {/* <--- ADD THIS LINE HERE */}
      
      </div>

      <ToastContainer ref={toastRef} />
    </Router>
  );
}

export default App;
