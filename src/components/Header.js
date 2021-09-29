import React from 'react';
import '../index.css'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'E - Commerce Web',
};

export default Header;
