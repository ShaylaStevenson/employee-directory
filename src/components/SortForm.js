import React from "react";

function SortForm(props) {
  return (
    <form className="bg-dark text-light" onSubmit={props.handleSortSubmit}>
        <div className="form-group m-3 p-3 bg-secondary">
            <label>
                Sort <br></br>
                <select
                    onChange={props.handleSortChange}
                    value={props.sort} 
                    name="sort"
                    className="form-control"
                    id="sort"
                > 
                    <option></option>
                    <option value="ascending">name - ascending</option>
                    <option value="decending">name - decending</option>
                </select>
            </label> <br></br>
            <input className="btn btn-primary mt-3" type="submit" value="Sort" />
      </div>
    </form>  
  );
}

export default SortForm;