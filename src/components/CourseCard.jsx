import "./CourseCard.css";

export default function CourseCard({ title, description }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <span>{title.charAt(0)}</span>
      </div>

      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <button className="course-btn">View Course</button>
      </div>
    </div>
  );
}


