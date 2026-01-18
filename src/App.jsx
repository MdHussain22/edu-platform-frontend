import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import ToastContainer from './components/ToastContainer';

// Page Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';

function App() {
  // 1. Create a reference to the ToastContainer so we can call its function
  const toastRef = useRef(null);

  // 2. This helper function allows any page to show a notification
  const showToast = (message, type) => {
    if (toastRef.current) {
      toastRef.current.addToast(message, type);
    }
  };

  return (
    <Router>
      {/* The Navbar appears on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass showToast to Login so it can say "Welcome Back" */}
        <Route path="/login" element={<Login showToast={showToast} />} />
        
        {/* Pass showToast to CourseDetails so "Enroll" can give feedback */}
        <Route path="/course/:id" element={<CourseDetails showToast={showToast} />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        
        {/* Fallback route for 404s (optional) */}
        <Route path="*" element={<div style={{color: 'white', textAlign: 'center', marginTop: '100px'}}>404 - Page Not Found</div>} />
      </Routes>

      {/* The ToastContainer sits invisible at the top level until triggered */}
      <ToastContainer ref={toastRef} />
    </Router>
  );
}

export default App;
