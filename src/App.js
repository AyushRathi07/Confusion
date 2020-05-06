import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';

class App extends Component { //or function App()
  render(){                   //we do not need render in case of function App()
  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/'>Los Pollos Hermanos</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
  }
}

export default App;
