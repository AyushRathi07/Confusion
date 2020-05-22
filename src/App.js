import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter} from 'react-router-dom';
import {Provider } from 'react-redux';
import './App.css';
import {configureStore} from './redux/configureStore';

const store = configureStore();

class App extends Component { //or function App()
  render(){                   //we do not need render in case of function App()
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
