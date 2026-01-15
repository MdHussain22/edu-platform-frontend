import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../data/courses";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>My Learning</h1>
        <p>Continue where you left off</p>

        <div className="courses">
          {courses.slice(0, 2).map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>Progress: 40%</p>
              <button className="course-btn">Resume</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

