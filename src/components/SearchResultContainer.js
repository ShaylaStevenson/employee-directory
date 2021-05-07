import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SortForm from "./SortForm";
import ResultCards from "./ResultCards";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    sort: "",
    results: [],
    orgResults: []
  };

  // when this component mounts, get random users
  componentDidMount() {
    API.search()
      .then(res => this.setState({ 
        results: res.data.results,
        // saves the original result array for reset element
        orgResults: res.data.results   
      }))
      .catch(err => console.log(err));
  }

//////////// search elements////////////////
  // to search for an employee by first name 

  // get the value and name of the input which triggered the change
  // ref activity 17
  handleSearchChange = event => {
    const name = event.target.name;
    //convert search value string to lowercase
    const value = event.target.value.toLowerCase();
    this.setState({ [name]: value });
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
    // save results to a new array before manipulating
    const newResults = [...this.state.results];
    // use react filter to search for matching first names as they are changed to lowercase
    const foundEmployees = newResults.filter(employee => employee.name.first.toLowerCase() === query);
    // update results
    this.setState({ results: foundEmployees})
  };

/////////////// sort elements //////////////
  // to sort employees by ascending or decending order

  // get the value and name of the input which triggered the change
  handleSortChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("sort value set...")
  };

  // when the form is submitted, call the sort employee function passing in `this.state.sort`
  handleSortSubmit = event => {
    event.preventDefault();
    this.sortEmployees(this.state.sort)
  };

  sortEmployees = query => {
    console.log("sorting employees in " + this.state.sort + " order")

    // save results to a new array before manipulating
    const newResults = [...this.state.results];

    // compare first names and sort into ascending order
    // ref https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    newResults.sort(function(a, b){
      if(a.name.first < b.name.first) { return -1; }
      if(a.name.first > b.name.first) { return 1; }
      return 0;
    });

    // logic to determine if order should be in decending order
    if (query === "decending") {
      newResults.reverse();
    } 
    // update results
    this.setState({ results: newResults })
  };

  ///////////// reset element ////////////
    // to return results to original array
    handleResetSubmit = event => {
      event.preventDefault();
      this.setState({
        results: this.state.orgResults,
        search: "",
        sort: ""
      })
      // attempts to clear input field on reset, but not working
      //this.state.search.value = "";
      //this.sort.value= "";
      

    }

  // render the components to app
  render() {
    return (
      <div className="container back-fade mt-3">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h1 className="display-3 text-dark pt-2 pl-2">Employee Directory</h1>
            </div>
            <SearchForm
              value={this.state.value}
              handleSearchSubmit={this.handleSearchSubmit}
              handleSearchChange={this.handleSearchChange}
              handleResetSubmit={this.handleResetSubmit}
            />
            <SortForm
              value={this.state.value}
              handleSortSubmit={this.handleSortSubmit}
              handleSortChange={this.handleSortChange}
              handleResetSubmit={this.handleResetSubmit}
            />
          </div>
          <div className="col-md-8">
            <ResultCards results={this.state.results}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;