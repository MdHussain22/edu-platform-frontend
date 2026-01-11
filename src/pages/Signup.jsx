import Navbar from "../components/Navbar";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <Navbar />

      <div className="signup-container">
        <h2>Create Your Account</h2>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}
