import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Welcome back 👋</h1>
        <p style={{ marginBottom: "30px", color: "#555" }}>
          Continue learning where you left off
        </p>

        <h2>Your Courses</h2>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <CourseCard
            title="Java Basics"
            description="Progress: 40% completed"
          />
          <CourseCard
            title="Web Development"
            description="Progress: 15% completed"
          />
        </div>
      </div>
    </div>
  );
}
