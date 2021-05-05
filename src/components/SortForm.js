import React from "react";

function SortForm(props) {
  return (
    <form className="bg-dark text-light" onSubmit={props.handleSubmit}>
        <div className="form-group m-3 p-3 bg-secondary">
            <label>
                Sort <br></br>
                <select
                    onChange={props.handleChange}
                    value={props.sort} 
                    name="sort"
                    classname="form-control"
                    id="sort"
                > 
                    <option></option>
                    <option value="ascending">last name - ascending</option>
                    <option value="decending">last name - decending</option>
                </select>
            </label> <br></br>
            <input className="btn btn-primary mt-3" type="submit" value="Sort" />
      </div>
    </form>  
  );
}

export default SortForm;