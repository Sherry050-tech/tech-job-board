import { useState, useMemo } from "react";
import { jobs } from "../mockData";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return jobs.filter((job) => {
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q);
      const matchesType =
        activeFilter === "All" || job.type === activeFilter;
      return matchesSearch && matchesType;
    });
  }, [query, activeFilter]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-badge">
          ✨ &nbsp;New jobs added daily
        </div>
        <h1 className="hero-title">
          Find Your Next <br />
          <span className="gradient-text">Tech Dream Job</span>
        </h1>
        <p className="hero-subtitle">
          Browse hand-picked opportunities at the world's most innovative
          companies — from startups to FAANG.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">10+</div>
            <div className="hero-stat-label">Open roles</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-number">10</div>
            <div className="hero-stat-label">Top companies</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-number">4</div>
            <div className="hero-stat-label">Job types</div>
          </div>
        </div>
      </section>

      {/* ── Search & Filter ── */}
      <div className="search-filter-section">
        <SearchBar query={query} setQuery={setQuery} />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      {/* ── Job Grid ── */}
      <section className="jobs-section">
        <div className="jobs-header">
          <p className="jobs-count">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{jobs.length}</strong> roles
          </p>
        </div>

        <div className="jobs-grid">
          {filtered.length > 0 ? (
            filtered.map((job, i) => (
              <JobCard
                key={job.id}
                job={job}
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔭</div>
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
