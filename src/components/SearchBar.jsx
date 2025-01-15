/* eslint-disable react/prop-types */

function SearchBar({ handleChange }) {
  return (
    <div className="search-bar">
      <input
        className="form-control mb-2"
        type="text"
        name="name"
        id="name"
        placeholder="Search..."
        onChange={handleChange}
      />
      <label>
        <input
          className="form-check-input mb-5"
          type="checkbox"
          name="inStock"
          id="inStock"
          onChange={handleChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
