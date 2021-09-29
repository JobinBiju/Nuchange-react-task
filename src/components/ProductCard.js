import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

function ProductCard({ title, vendor, price, availability }) {
  return (
    <div className="product-card">
      <div className="product-image-div">
        <img
          className="product-image"
          alt="Bottle"
          src="https://media.wired.com/photos/5ee130fbecb467cf4ea5f560/16:9/w_2399,h_1349,c_limit/Gear-CamelBak---credit-CamelBak.jpg"
        ></img>
      </div>
      <div className="product-content">
        <h4>{title}</h4>
        <h5>{vendor}</h5>

        <h5 className={availability ? 'in-stock' : 'out-of-stock'}>
          {availability ? 'In-stock' : 'Out-of-stock'}
        </h5>
        <h3>${price}</h3>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  vendor: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.bool,
};

ProductCard.defaultProps = {
  title: 'Bottle',
  vendor: 'PET',
  price: 70,
  availability: true,
};

export default ProductCard;
