import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Loading = require('react-loading-animation');

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
      return(<div class="container col-sm-12 pt-5"><Loading /></div>)
    }
    return (
      <div id="grid"  ref='grid' class="col-sm-12 pt-5">
        {
          this.props.arr.map(item =>
            <Link >
              <div class="container col-sm-4 bg-light">
                <img class="img-thumbnail" src={item.preview ? item.preview.images[0].source.url.replace("&amp;","&") : 'https://source.unsplash.com/weekly?water'} alt="phto is not loading"/>
                <h4 class="card-title">{this.cutText(item.title)}</h4>
                <hr />
              </div>
            </Link>
          )
        }
      </div>
    );
  }
}
export default Grid;
