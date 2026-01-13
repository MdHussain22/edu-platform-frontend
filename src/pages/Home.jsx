import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <motion.section
        className="hero-neo"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* hero content stays same */}
      </motion.section>

      {/* FEATURED */}
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
        <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          Featured Paths
        </motion.h2>

        <div className="courses">
          {[
            { tag: "JAVA", title: "Java Mastery", desc: "Backend foundations" },
            { tag: "PY", title: "Python Pro", desc: "Automation & AI basics" },
            { tag: "SQL", title: "SQL Zero-to-Hero", desc: "Databases simplified" },
          ].map((c, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CourseCard
                tag={c.tag}
                title={c.title}
                description={c.desc}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
