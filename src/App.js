import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component { //or function App()
  render(){                   //we do not need render in case of function App()
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
