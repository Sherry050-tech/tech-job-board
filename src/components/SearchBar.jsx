export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        id="job-search"
        type="text"
        className="search-input"
        placeholder="Search by job title or company…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        aria-label="Search jobs"
      />
      {query && (
        <button
          className="search-clear"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
