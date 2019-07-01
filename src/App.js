// Author: Duy Trinh

import React from "react";
import "./App.css";
import { BusinessList } from "./components/BusinessList/BusinessList.js";
import { Searchbar } from "./components/Searchbar/Searchbar.js";
import { Yelp } from "./util/Yelp.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "best_match",
      term: "",
      location: "",
      businesses: []
    };

    this.sortChange = this.sortChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.termChange = this.termChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  sortChange(sortBy) {
    this.setState({
      sortBy: sortBy
    });
  }

  locationChange(newLocation) {
    this.setState({
      location: newLocation
    });
  }

  termChange(newTerm) {
    this.setState({
      term: newTerm
    });
  }

  handleSearchClick() {
    Yelp.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    ).then(businesses =>
      this.setState({
        businesses: businesses
      })
    );
  }

  // get_search_info() {
  //   return {
  //     term: this.state.term,
  //     location: this.state.location,
  //     sortBy: this.state.sortBy
  //   };
  // }

  render() {
    // const searchInfo = this.get_search_info();
    console.log(this.state.businesses);
    return (
      <div className="App">
        <Searchbar
          onTermChange={this.termChange}
          onLocationChange={this.locationChange}
          onSortChange={this.sortChange}
          onClick={this.handleSearchClick}
        />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
