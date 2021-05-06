import React from "react";

function SearchForm(props) {
  return (
    <form className="bg-dark text-light">
      <div className="form-group m-3 p-3 bg-secondary">
        <label htmlFor="search">Search</label>
        <input
          onChange={props.handleSearchChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleSearchSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form> 
  );
}

export default SearchForm;

    