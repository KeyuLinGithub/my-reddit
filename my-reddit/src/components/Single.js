import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from "./Header";

class Single extends Component {

  render() {
    return(
      <div>
        <Header />
        loading....
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    arr: state.arr,
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(Single);
