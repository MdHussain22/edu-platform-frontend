import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="hero-neo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="hero-text">
          <span className="tag">🔥 Trending Skill</span>

          <h1>
            MASTER <br />
            <span>WEB DEVELOPMENT</span>
          </h1>

          <p>
            Build real-world projects. Learn skills companies actually hire for.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Start Learning</button>
            <button className="ghost-btn">Explore Courses</button>
          </div>
        </div>

        {/* Floating Card */}
        <div className="hero-card">
          <div className="hero-badge">NEW</div>
          <h3>Full-Stack Web Dev</h3>
          <p>HTML • CSS • JavaScript • React</p>
          <strong>₹499</strong>
        </div>
      </motion.section>

      {/* FEATURED COURSES */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h2
          className="section-title"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          Featured Paths
        </motion.h2>

        <div className="courses">
          {[
            {
              tag: "JAVA",
              title: "Java Mastery",
              desc: "Backend foundations",
            },
            {
              tag: "PY",
              title: "Python Pro",
              desc: "Automation & AI basics",
            },
            {
              tag: "SQL",
              title: "SQL Zero-to-Hero",
              desc: "Databases simplified",
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CourseCard
                tag={course.tag}
                title={course.title}
                description={course.desc}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
