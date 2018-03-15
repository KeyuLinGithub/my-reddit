import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'react-loading-animation';
import { connect } from 'react-redux';
import Header from './Header';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.cutText=this.cutText.bind(this);

  }
  cutText(text){
    if(text.length>100){
      return text.substring(0,100)+'...';
    }
    return text;
  }
  render() {
    if(this.props.loadingStatus===true){
      return(<div class="container col-sm-12 pt-5"><div class="container"><Header /></div><Loading /></div>)
    }
    return (
      <div>
        <Header />
        <div id="grid"  ref='grid' class="col-sm-12 pt-5">
          {
            this.props.arr.map(item =>
              <Link to={'/post/'+item.id}>
                <div class="container col-sm-4 bg-light">
                  <img class="img-thumbnail" src={item.preview ? item.preview.images[0].source.url.replace("&amp;","&") : 'https://source.unsplash.com/weekly?water'} alt="phto is not loading"/>
                  <h4 class="card-title">{this.cutText(item.title)}</h4>
                  <hr />
                </div>
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    arr: state.arr,
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(Grid);
