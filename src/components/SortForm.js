import React from "react";

// sort form to be deployed 
// ref https://reactjs.org/docs/forms.html
// refactored to be consistant with search form 
function SortForm(props) {
  return (
    <form className="bg-dark text-light">
        <div className="form-group m-3 p-3 bg-secondary">
            <label htmlFor="sort">Sort by name</label>
                <select
                    onChange={props.handleSortChange}
                    value={props.sort}
                    // {this.state.sort}
                    name="sort"
                    className="form-control"
                    id="sort"
                    style={{width: "100%"}}
                > 
                    <option></option>
                    <option value="ascending">ascending</option>
                    <option value="decending">decending</option>
                </select>
            <button onClick={props.handleSortSubmit} type="submit" className="btn btn-primary mt-3">
              Sort
            </button>
            <button onClick={props.handleResetSubmit} type="submit" className="btn btn-warning ml-2 mt-3">
              Reset
            </button>
      </div>
    </form>  
  );
}

export default SortForm;