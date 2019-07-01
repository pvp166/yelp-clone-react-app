const apiKey =
  "GJuSGrePpRtM0gzxBEtL_MmU5_gaMWQSz2mtbc3hsRXofzk7EkLw1dVlQn4qB5Jb7MTn3dhhM05akhtsuvcYIj1LxkelagsOQRQVOWJSNPZc9kfb2TgWS_bgDd_FXHYx";

export const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        // Checks to see if jsonResponse has a businesses key
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              img_url: business.image_url,
              title: business.name,
              address: `${business.location.display_address[0]}, ${
                business.location.display_address[1]
              }`,
              categories: business.categories[0].title,
              rating: business.rating,
              review_count: business.review_count
            };
          });
        }
      });
  }
};
