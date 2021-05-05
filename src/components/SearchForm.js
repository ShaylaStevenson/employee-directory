import React from "react";

// function SearchForm(props) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           value={props.search}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search for a Gif"
//           id="search"
//         />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

<div class="form-group">
    <label htmlFor="Sort">Sort</label>
    <select class="form-control" id="sortFeature">
      <option value="ascending">Alphabetically - ascending</option>
      <option value="decending">Alphabetically - decending</option>
    </select>
  </div>