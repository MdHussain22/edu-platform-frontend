import Navbar from "../components/Navbar";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div className="login-container">
        <h2>Login to EduPlatform</h2>

        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}


