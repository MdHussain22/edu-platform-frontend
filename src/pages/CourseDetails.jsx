import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../data/courses";
import "./CourseDetails.css";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <h2 style={{ padding: 40 }}>Course not found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="course-details">
        <div className="details-left">
          <h1>{course.title}</h1>
          <p>{course.description}</p>

          <h3>What you’ll learn</h3>
          <ul>
            <li>Core concepts explained clearly</li>
            <li>Real-world examples</li>
            <li>Project-based learning</li>
            <li>Career-oriented skills</li>
          </ul>
        </div>

        <div className="details-right">
          <div className="price-card">
            <h2>₹{course.price}</h2>
            <button onClick={() => navigate("/login")}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
