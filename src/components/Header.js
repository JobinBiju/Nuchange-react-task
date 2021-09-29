import React from 'react';
import '../index.css';
import Categories from './Categories';

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>{props.title}</h1>
      </header>
      <Categories />
    </div>
  );
};

Header.defaultProps = {
  title: 'E - Commerce Web',
};

export default Header;
