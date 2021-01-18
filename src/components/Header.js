import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-menu">
          <Menu />
        </div>
      </header>
    );
  };
}
export default Header;
