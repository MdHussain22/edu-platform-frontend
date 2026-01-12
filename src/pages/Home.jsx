import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1>Learn Skills That Matter</h1>
        <p>Online courses from real instructors</p>
      </section>

      {/* Featured Courses */}
      <section className="section">
        <h2>Featured Courses</h2>

        <div className="courses">
          <CourseCard
            tag="JAVA"
            title="Java Basics"
            description="Start your programming journey"
          />

          <CourseCard
            tag="WEB"
            title="Web Development"
            description="HTML, CSS, JavaScript & more"
          />

          <CourseCard
            tag="SQL"
            title="SQL for Beginners"
            description="Learn databases from scratch"
          />

          <CourseCard
            tag="PY"
            title="Python Programming"
            description="From basics to automation"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
