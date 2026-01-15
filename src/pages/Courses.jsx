import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import "./Courses.css";

export default function Courses() {
  return (
    <>
      <Navbar />

      <div className="section">
        <h1>All Courses</h1>
        <p>Choose a course and start learning today</p>

        <div className="courses">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

