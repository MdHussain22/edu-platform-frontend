import { motion } from "framer-motion";
import "./CourseCard.css";

export default function CourseCard({ tag, title, description }) {
  return (
    <motion.div
      className="course-card"
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="course-image">
        <span>{tag}</span>
      </div>

      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="course-btn">View Course</button>
      </div>
    </motion.div>
  );
}




