import { useParams, Link } from "react-router-dom";
import { jobs } from "../mockData";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="job-details-page" style={{ textAlign: "center", paddingTop: "4rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😕</div>
        <h2 style={{ marginBottom: "0.5rem" }}>Job not found</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
          This job listing may have been removed or the link is incorrect.
        </p>
        <Link to="/" className="btn-primary">← Back to jobs</Link>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      {/* Back */}
      <Link to="/" className="back-btn">← Back to all jobs</Link>

      {/* Hero card */}
      <div className="job-details-hero">
        <img src={job.logo} alt={`${job.company} logo`} className="job-details-hero-logo" />
        <div className="job-details-hero-info">
          <h1 className="job-details-title">{job.title}</h1>
          <p className="job-details-company">{job.company}</p>
          <div className="job-details-badges">
            <span className="badge badge-location">📍 {job.location}</span>
            <span className="badge badge-type">{job.type}</span>
            <span className="badge badge-salary">💰 {job.salary}</span>
            <span
              className="badge"
              style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
            >
              🕐 {job.postedAt}
            </span>
          </div>
        </div>
        <div className="job-details-apply-btn">
          <button
            id="apply-now-btn"
            className="btn-primary"
            onClick={() => alert(`Your application for "${job.title}" at ${job.company} has been submitted! 🎉`)}
          >
            ✉️ Apply Now
          </button>
        </div>
      </div>

      {/* Body + Sidebar */}
      <div className="job-details-layout">
        {/* Description */}
        <div className="job-details-body">
          <h2>About the Role</h2>
          <p>{job.description}</p>

          <div className="job-tags-section">
            <h3>Skills & Technologies</h3>
            <div className="job-tags" style={{ gap: "0.5rem" }}>
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "var(--color-primary)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    fontSize: "0.8125rem",
                    padding: "0.35rem 0.75rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="job-sidebar">
          <div className="sidebar-card">
            <h3>Job Details</h3>
            <div className="sidebar-item">
              <div className="sidebar-item-icon">📍</div>
              <div className="sidebar-item-content">
                <small>Location</small>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-item-icon">💼</div>
              <div className="sidebar-item-content">
                <small>Type</small>
                <span>{job.type}</span>
              </div>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-item-icon">💰</div>
              <div className="sidebar-item-content">
                <small>Salary Range</small>
                <span>{job.salary}</span>
              </div>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-item-icon">🕐</div>
              <div className="sidebar-item-content">
                <small>Posted</small>
                <span>{job.postedAt}</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Company</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <img
                src={job.logo}
                alt={job.company}
                style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover", border: "1px solid var(--color-border)" }}
              />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{job.company}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Technology</div>
              </div>
            </div>
          </div>

          <button
            id="apply-sidebar-btn"
            className="btn-primary btn-full"
            onClick={() => alert(`Your application for "${job.title}" at ${job.company} has been submitted! 🎉`)}
          >
            ✉️ Apply for this role
          </button>
        </div>
      </div>
    </div>
  );
}
