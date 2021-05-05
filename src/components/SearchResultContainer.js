import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SortForm from "./SortForm";
import ResultCards from "./ResultCards";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    sort: "",
    results: []
  };

  // When this component mounts, get random users
  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  // original activity 19
  //  componentDidMount() {
  //    this.searchRU("");
  //  }

   searchRU = query => {
       const searchEmployee = this.state.results.filter(employee => employee.name.first || employee.name.last === query);
       this.setState({ results: searchEmployee})
   };
   //const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

// To use search 
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleSubmit = event => {
    event.preventDefault();
    this.searchRU(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h1 className="display-3">Employee Directory</h1>
            </div>
            <SearchForm
              value={this.state.value}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <SortForm
              value={this.state.value}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-md-8">
            <ResultCards results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;