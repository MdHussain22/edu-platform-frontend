import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <div className="course-image">
        <span>{course.tag}</span>
      </div>

      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <strong>₹{course.price}</strong>

        <button
          className="course-btn"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          View Course
        </button>
      </div>
    </div>
  );
}




