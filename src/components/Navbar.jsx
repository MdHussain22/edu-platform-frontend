import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
      }}
    >
      <h3 style={{ margin: 0 }}>EduPlatform</h3>

      <div>
       
        <Link to="/" style={{ marginRight: 20 }}>Home</Link>
<Link to="/courses" style={{ marginRight: 20 }}>Courses</Link>
<Link to="/dashboard" style={{ marginRight: 20 }}>Dashboard</Link>
<Link to="/login" style={{ marginRight: 20 }}>Login</Link>
<Link to="/signup">Sign Up</Link>

      </div>
    </nav>
  );
}



