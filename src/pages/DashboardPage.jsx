import { Link } from "react-router-dom";
import { jobs } from "../mockData";

const SAVED_JOBS   = [jobs[0], jobs[2], jobs[5]];
const APPLIED_JOBS = [
  { ...jobs[1], appStatus: "Reviewing" },
  { ...jobs[3], appStatus: "Applied" },
  { ...jobs[8], appStatus: "Applied" },
];

export default function DashboardPage({ user }) {
  const displayName = user?.name ?? "there";

  return (
    <div className="dashboard-page">
      {/* Welcome Banner */}
      <div className="dashboard-welcome">
        <div className="dashboard-welcome-text">
          <h1>Hey, {displayName} 👋</h1>
          <p>Here's a snapshot of your job search activity.</p>
        </div>
        <div className="dashboard-welcome-avatar">🧑‍💻</div>
      </div>

      {/* Stats Row */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-icon">🔖</div>
          <div className="stat-card-number">{SAVED_JOBS.length}</div>
          <div className="stat-card-label">Saved jobs</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">📨</div>
          <div className="stat-card-number">{APPLIED_JOBS.length}</div>
          <div className="stat-card-label">Applications sent</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">👀</div>
          <div className="stat-card-number">1</div>
          <div className="stat-card-label">Under review</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">🎯</div>
          <div className="stat-card-number">12</div>
          <div className="stat-card-label">Profile views</div>
        </div>
      </div>

      {/* Saved Jobs */}
      <h2 className="dashboard-section-title">🔖 Saved Jobs</h2>
      <div className="dashboard-placeholder-list">
        {SAVED_JOBS.map((job) => (
          <div key={job.id} className="placeholder-item">
            <img src={job.logo} alt={job.company} className="placeholder-item-logo" />
            <div className="placeholder-item-info">
              <strong>{job.title}</strong>
              <small>{job.company} &middot; {job.location}</small>
            </div>
            <span className="placeholder-status status-saved">Saved</span>
            <Link
              to={`/jobs/${job.id}`}
              style={{ fontSize: "0.8rem", color: "var(--color-primary)", fontWeight: 600, textDecoration: "none", marginLeft: "0.5rem" }}
            >
              View →
            </Link>
          </div>
        ))}
      </div>

      {/* Applied Jobs */}
      <h2 className="dashboard-section-title">📨 Applications</h2>
      <div className="dashboard-placeholder-list">
        {APPLIED_JOBS.map((job) => (
          <div key={job.id} className="placeholder-item">
            <img src={job.logo} alt={job.company} className="placeholder-item-logo" />
            <div className="placeholder-item-info">
              <strong>{job.title}</strong>
              <small>{job.company} &middot; {job.salary}</small>
            </div>
            <span
              className={`placeholder-status ${
                job.appStatus === "Reviewing" ? "status-reviewing" : "status-applied"
              }`}
            >
              {job.appStatus}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          padding: "2rem",
          background: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 14,
        }}
      >
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
          Ready to find your next opportunity?
        </p>
        <Link to="/" className="btn-primary">Browse all jobs →</Link>
      </div>
    </div>
  );
}
