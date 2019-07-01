import React from "react";
import "./Searchbar.css";

// const sortBy = {
//   best_match: "Best Match",
//   most_viewed: "Most Viewed",
//   highest_rated: "Highest Rated"
// }

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleSortChange(e) {
    let sortBy = e.target.value;
    this.props.onSortChange(sortBy);
  }

  handleTermChange(e) {
    const term = e.target.value;
    this.props.onTermChange(term);
  }

  handleLocationChange(e) {
    const location = e.target.value;
    this.props.onLocationChange(location);
  }

  render() {
    return (
      <div class="Searchbar">
        <h1 id="slogan" className="text-center">
          Exploring New Restaurants
        </h1>
        <div className="searchForm">
          <div class="textField">
            <input
              onChange={this.handleTermChange}
              placeholder="Pizza, Starbuck, etc."
              type="text"
              id="termTextbox"
            />
            <input
              onChange={this.handleLocationChange}
              placeholder="New York, Seatle, etc."
              type="text"
              id="locationTextbox"
            />
          </div>
          <select onChange={this.handleSortChange} id="sortBy">
            <option value="best_match">Best Match</option>
            <option value="rating">Highest Rated</option>
            <option value="review_count">Most Viewed</option>
          </select>
          <button
            onClick={this.props.onClick}
            type="button"
            className="btn btn-danger"
            id="searchButton"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
