import React from 'react';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <h1 className='mdc-typography mdc-typography--headline1'>
        Choose a Number
      </h1>
      <NumberChooser />
    );
  }
}

export default App;