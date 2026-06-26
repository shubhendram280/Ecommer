function SearchBar({ search, setSearch, count }) {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          className="search"
          type="text"
          placeholder="Search products by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {count !== undefined && (
        <p className="results-count">
          {count} product{count !== 1 ? "s" : ""} found
        </p>
      )}
    </div>
  );
}

export default SearchBar;
