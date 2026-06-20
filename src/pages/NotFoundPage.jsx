import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-code">404</div>
      <h2 className="not-found-title">Page not found</h2>
      <p className="not-found-subtitle">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link id="not-found-home-btn" to="/" className="btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}
