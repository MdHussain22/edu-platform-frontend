import "./Home.css";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Learn Skills That Matter</h1>
        <p>Online courses from real instructors</p>
      </section>

      <section className="section">
        <h2>Featured Courses</h2>

        <div className="courses">
          <CourseCard
            title="Java Basics"
            description="Start your programming journey"
          />
          <CourseCard
            title="Web Development"
            description="HTML, CSS, JavaScript & more"
          />
          <CourseCard
            title="SQL for Beginners"
            description="Learn databases from scratch"
          />
        </div>
      </section>
    </div>
  );
}


