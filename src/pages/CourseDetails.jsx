import { useParams } from "react-router-dom";
import courses from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <h2 style={{ padding: 40 }}>Course not found</h2>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Full course content coming soon 🚀</p>
    </div>
  );
}

