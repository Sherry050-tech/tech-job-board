import { Link } from "react-router-dom";

export default function JobCard({ job, style }) {
  return (
    <Link to={`/jobs/${job.id}`} className="job-card" style={style}>
      {/* Header: logo + titles */}
      <div className="job-card-header">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="job-logo"
        />
        <div className="job-card-titles">
          <div className="job-title">{job.title}</div>
          <div className="job-company">{job.company}</div>
        </div>
      </div>

      {/* Badges */}
      <div className="job-card-badges">
        <span className="badge badge-location">📍 {job.location}</span>
        <span className="badge badge-type">{job.type}</span>
        <span className="badge badge-salary">💰 {job.salary}</span>
      </div>

      {/* Tags */}
      <div className="job-tags">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="job-card-footer">
        <span className="posted-at">🕐 {job.postedAt}</span>
        <span className="btn-view">View details →</span>
      </div>
    </Link>
  );
}
