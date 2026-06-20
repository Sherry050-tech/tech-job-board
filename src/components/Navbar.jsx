import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setMenuOpen(false);
    navigate("/");
  };

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <>
      <header className="navbar">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">💼</div>
          <span>TechJobs</span>
        </Link>

        {/* Desktop links */}
        <nav>
          <ul className="navbar-links">
            <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
            {user && <li><NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink></li>}
          </ul>
        </nav>

        {/* Desktop right actions */}
        <div className="navbar-right">
          {user ? (
            <>
              <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                👋 {user.name}
              </span>
              <button className="nav-btn" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>Sign in</NavLink>
              <NavLink to="/register" className="nav-btn">Get started</NavLink>
            </>
          )}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile dropdown */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
        {user && (
          <NavLink to="/dashboard" className={linkClass} onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
        )}
        {user ? (
          <button
            className="nav-link"
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <>
            <NavLink to="/login" className={linkClass} onClick={() => setMenuOpen(false)}>Sign in</NavLink>
            <NavLink to="/register" className={linkClass} onClick={() => setMenuOpen(false)}>Get started</NavLink>
          </>
        )}
      </nav>
    </>
  );
}
