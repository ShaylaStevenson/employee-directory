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

  // when this component mounts, get random users
  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

// search elements
  // to search for an employee by first name 
  // ref activity 17
  // get the value and name of the input which triggered the change
  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // when the form is submitted, call the search employee function passing in `this.state.search`
  handleSearchSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    this.setState({
      // this should clear the input field, but doesn't seem to be working
      search: ""
    });
  };

  // function to filter through results array to find first names that match the query 
  // ref activity 13
  searchEmployees = query => {
    const foundEmployees = this.state.results.filter(employee => employee.name.first === query);
    this.setState({ results: foundEmployees})
  };

// sort elements
  handleSortChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSortSubmit = event => {
    event.preventDefault();
    this.sortRU(this.state.sort)
  };

  sortRU = query => {
    const sortedEmployees = [];
    this.setState({ results: sortedEmployees})
  };
  // sortResults = () => {
  //   const employees = this.state.results.sort((a, b) => {
  //     if (b.name.last > a.name.last) {
  //       return -1
  //     }
  //     if (a.name.last > b.name.last) {
  //       return 1
  //     }
  //     return 0;
  //   });

  //   if (this.state.sort === "decending") {
  //     employees.reverse();
  //     this.setState({ sort: "ASC" });
  //   } else {
  //     this.setState({ sortOrder: "DESC" });
  //   }
  //   this.setState({ results: employees })
  // }

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
              handleSearchSubmit={this.handleSearchSubmit}
              handleSearchChange={this.handleSearchChange}
            />
            <SortForm
              value={this.state.value}
              handleSortSubmit={this.handleSortSubmit}
              handleSortChange={this.handleSortChange}
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