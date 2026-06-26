function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo" aria-hidden="true">
            🛍️
          </span>
          <div>
            <h3>Product Explorer</h3>
            <p>Your one-stop shop for amazing products.</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#top">Home</a>
          <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
            API
          </a>
          <a href="mailto:support@example.com">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Product Explorer. All rights reserved.</p>
        <p className="footer-made">Made with ❤️ for Assignment</p>
      </div>
    </footer>
  );
}

export default Footer;
