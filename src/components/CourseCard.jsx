import "./CourseCard.css";

export default function CourseCard({ tag, title, description }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <span>{tag}</span>
      </div>

      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="course-btn">View Course</button>
      </div>
    </div>
  );
}



