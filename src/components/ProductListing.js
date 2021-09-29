import React from 'react';
// import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../index.css';

function ProductListing(props) {
  return (
    <div className="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

ProductListing.propTypes = {};

export default ProductListing;
