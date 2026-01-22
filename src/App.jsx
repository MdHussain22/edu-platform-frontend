import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const toastRef = useRef(null);
  const showToast = (msg, type) => toastRef.current?.addToast(msg, type);

  return (
    <Router>
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <Navbar />
        <div style={{flex:1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails showToast={showToast} />} />
            <Route path="/login" element={<Login showToast={showToast} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer ref={toastRef} />
    </Router>
  );
}
export default App;