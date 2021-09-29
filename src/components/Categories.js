import React from 'react';
// import PropTypes from 'prop-types';
import '../index.css'

function Categories(props) {
  return (
    <div className="categories">
      <ul>
        <a href="">
          <li>All</li>
        </a>
        <a href="">
          <li>Fruits</li>
        </a>
        <a href="">
          <li>Vegetables</li>
        </a>
      </ul>
    </div>
  );
}

Categories.propTypes = {};

export default Categories;
