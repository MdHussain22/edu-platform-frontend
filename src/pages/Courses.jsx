import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h1>All Courses</h1>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
