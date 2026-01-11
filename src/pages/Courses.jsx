import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Java Basics",
    description: "Start your programming journey",
  },
  {
    id: 2,
    title: "Web Development",
    description: "HTML, CSS, JavaScript & more",
  },
  {
    id: 3,
    title: "SQL for Beginners",
    description: "Learn databases from scratch",
  },
];

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
