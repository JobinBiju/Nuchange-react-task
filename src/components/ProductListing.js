import React from 'react';
// import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../index.css';

function ProductListing(props) {
  var jsonText =
    '[{ "name":"Potato", "id":1, "price":30, "available":1, "vendor":"Himachal Pvt Ltd", "category":"Vegetables" }, { "name":"Banana", "id":2, "price":50, "available":1,"category": "Fruits","vendor": "Organic farms"}, { "name":"Drumsticks", "id":3, "price":20, "available":0, "category":"Vegetables", "vendor":"Mallikarjuna farms"}, { "name":"Orange", "id":4, "price":25, "available":1, "vendor":"Nagpur farms", "category":"Fruits"}]';
  var products = JSON.parse(jsonText);
  const item = products.map((product) => (
    <ProductCard
      title={product.name.toString()}
      price={product.price}
      availability={product.available === 1 ? true : false}
      vendor={product.vendor}
    />
  ));

  return <div className="product-list">{item}</div>;
}

ProductListing.propTypes = {};

export default ProductListing;
