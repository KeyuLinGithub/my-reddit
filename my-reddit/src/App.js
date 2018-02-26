import React, { Component } from 'react';

import './App.css';

import Search from './components/Search';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <a class="navbar-brand" href="/">Daily Reddit</a>
        </nav>
          <Search />

        </div>
      </div>
    );
  }
}

export default App;
