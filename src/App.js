import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const profiles = [
      { name: "Taro", age: 10},
      { name: "Hanako", age: 5 },
      { name: 19, age: 12},
    ]
    return (
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    )
  }
}

const User = (props) => {
  return <div>Hi! I am {props.name} and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
