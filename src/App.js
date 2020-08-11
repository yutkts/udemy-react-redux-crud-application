import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </React.Fragment>
    );
  }
}

const Cat = () => {
  return <React.Fragment>Meow!</React.Fragment>
}

export default App;
