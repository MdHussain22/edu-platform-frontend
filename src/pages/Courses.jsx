import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Courses</h1>

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
    </div>
  );
}
