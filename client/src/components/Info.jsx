import React from 'react';

const Info = ({
  product, selectedStyle, sku, reviews,
}) => {
  const reviewCount = reviews.results.length;
  let sum = 0;
  for (let i = 0; i < reviewCount; i++) {
    sum += reviews.results[i].rating;
  }
  const avgRating = sum / reviewCount;

  return (
    <div className="componentContainer">
      {reviewCount
        ? (
          <div id="rating">
            <div className="Stars" style={{ '--rating': `${avgRating}` }} />
            <div id="allReviews">
              <a href="">
                Read&nbsp;
                {reviewCount}
              &nbsp;reviews
              </a>
            </div>
          </div>
        )
        : null}
      <div id="category">{product.category.toUpperCase()}</div>
      <div id="name">{product.name}</div>

      <div id="PriceSocial">
        <div id="price">
          {selectedStyle === null
            ? `$${product.default_price}`
            : Number(selectedStyle.sale_price) > 0
              ? (
                <span>
                  <span id="salePrice">
                    $
                    {Number(selectedStyle.sale_price)}
                  </span>
                  &nbsp;
                  <span id="origPrice">
                    $
                    {Number(selectedStyle.original_price)}
                  </span>
                </span>
              )
              : `$${Number(selectedStyle.original_price)}`}
        </div>
        <div id="social">

          <div className="fb-share-button" data-href="https://placeholderURL.com" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2FplaceholderURL.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
&nbsp;&nbsp;

          <a
            className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Hello%20world"
          >
            Tweet
          </a>
        </div>

      </div>

    </div>
  );
};
export default Info;
