import "./Home.css";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <h2>EduPlatform</h2>
        <div className="nav-buttons">
          <button>Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Learn Skills That Matter</h1>
        <p>Online courses from real instructors</p>
      </section>

      <section className="courses">
        <div className="card">Java Basics</div>
        <div className="card">Web Development</div>
        <div className="card">SQL for Beginners</div>
      </section>
    </div>
  );
}