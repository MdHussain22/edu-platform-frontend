import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1 className="dash-title">Your Learning Dashboard</h1>
        <p className="dash-subtitle">
          Track your progress and continue learning
        </p>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <h2>3</h2>
            <p>Courses Enrolled</p>
          </div>

          <div className="stat-card">
            <h2>45%</h2>
            <p>Overall Progress</p>
          </div>

          <div className="stat-card">
            <h2>12h</h2>
            <p>Learning Time</p>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="continue">
          <h2>Continue Learning</h2>

          <div className="continue-card">
            <div>
              <h3>Java Basics</h3>
              <p>Progress: 60%</p>
            </div>

            <button>Resume</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
