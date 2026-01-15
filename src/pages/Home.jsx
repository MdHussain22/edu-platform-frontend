import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Learn Skills That Matter</h1>
        <p>Online courses from real instructors</p>
      </motion.section>

      {/* COURSES */}
      <section className="featured">
        <h2>Featured Courses</h2>
        <div className="course-grid">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

