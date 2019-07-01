import React from "react";
import "./Business.css";

export class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div class="Business">
        <div className="image-container">
          <img src={business.img_url} alt={business.title} />
        </div>
        <p class="title">{business.title}</p>
        <div class="content">
          <div class="businessAddress">
            <p class="address">{business.address}</p>
          </div>
          <div class="businessReview">
            <h3 class="rating">{business.rating}</h3>
            <p class="review_count">{business.review_count} reviews</p>
            <h3 class="categories">{business.categories}</h3>
          </div>
        </div>
      </div>
    );
  }
}
