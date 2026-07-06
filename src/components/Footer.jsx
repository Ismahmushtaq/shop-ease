import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>🛍️ ShopEase</h2>
          <p>
            Shop smart with the latest fashion, accessories,
            shoes and more at affordable prices.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Explore</h3>

          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/products")}>Products</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => navigate("/dashboard")}>Dashboard</p>
          <p onClick={() => navigate("/profile")}>Profile</p>
        </div>
        <div className="footer-section">
          <h3>Support</h3>

          <p onClick={() => navigate("/contact")}>Contact Us</p>
          <p onClick={() => alert("Privacy Policy Coming Soon!")}>
            Privacy Policy
          </p>
          <p onClick={() => alert("Terms & Conditions Coming Soon!")}>
            Terms & Conditions
          </p>
          <p onClick={() => alert("FAQs Coming Soon!")}>
            FAQs
          </p>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>

          <p>Subscribe for updates and offers.</p>

          <button
            onClick={() => alert("Thanks for subscribing!")}
            className="subscribe-btn"
          >
            Subscribe
          </button>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopEase | Designed with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;