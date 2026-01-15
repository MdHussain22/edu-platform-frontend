import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CourseCard.css";

export default function CourseCard({ course }) {
  return (
    <motion.div
      className="course-card"
      whileHover={{
        scale: 1.05,
        rotateX: 6,
        rotateY: -6
      }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-top">{course.short}</div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`} className="view-btn">
        View Course
      </Link>
    </motion.div>
  );
}





