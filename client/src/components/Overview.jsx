import React from 'react';

const Overview = ({ product }) => (
  <div>
    <p id="slogan">{product.slogan}</p>
    <p id="description">{product.description}</p>
  </div>
);

export default Overview;
