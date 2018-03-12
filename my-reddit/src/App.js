import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Grid from './components/Grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

const bdiv=styled.div`
  background-image: url("https://unsplash.com/photos/kO1G3neRA2o");

`;

class App extends Component {

  render() {
    fetch('https://www.reddit.com/r/SBU/comments/7xuyxp/how_are_nonstem_programs_at_sbu.json')
    .then(response => response.json()).then(data => console.log(data));
    return (

        <bdiv className="App">
            <nav class="navbar bg-info text-white navbar-static-top">
              <a class="navbar-brand text-white" href="/">Daily Reddit</a>
            </nav>
            <div class="container">
              <Search {...this.props}/>
              <Grid  {...this.props}/>

            </div>
        </bdiv>

    );
  }
}

function mapStateToProps(state) {
  return {
    arr: state.arr,
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(App);
