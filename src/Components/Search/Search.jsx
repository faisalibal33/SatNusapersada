import "./search.css";

const Search = ({ setSearch, setSearchBy }) => {
  return (
    <div>
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search User"
          className="inputSearch"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          onChange={(e) => setSearchBy(e.target.value)}
          className="selectSearchBy"
        >
          <option value="name">Search by Name</option>
          <option value="username">Search by Username</option>
          <option value="email">Search by Email</option>
          <option value="phone">Search by Phone</option>
          <option value="website">Search by Website</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
