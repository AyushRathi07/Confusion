import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component { //or function App()
  render(){                   //we do not need render in case of function App()
  return (
    <div>
      <Main />
    </div>
  );
  }
}

export default App;
