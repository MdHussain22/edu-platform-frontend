import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top strip */}
      <div className="footer-top">
        <p>Top companies choose EduPlatform to build in-demand career skills.</p>
      </div>

      {/* Main footer */}
      <div className="footer-content">
        <div className="footer-columns">
          <ul>
            <li>EduPlatform Business</li>
            <li>Teach on EduPlatform</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>

          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>

          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>

        <div className="footer-lang">
          <button>🌐 English</button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <h3>EduPlatform</h3>
        <p>© 2026 EduPlatform, Inc.</p>
      </div>
    </footer>
  );
}
