import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import styled from 'styled-components';
import { connect } from 'react-redux';

const bdiv=styled.div`
  background-image: url("https://unsplash.com/photos/kO1G3neRA2o");

`;



class App extends Component {
  constructor(props) {
    super(props);
    this.updateContents=this.updateContents.bind(this);
    this.cutText=this.cutText.bind(this);
    this.getImgSrc=this.getImgSrc.bind(this);
  }
  componentDidMount(){

  }
  updateContents(){
    var arr=this.props.arr;
    var grid='<div>';
    arr.forEach(item =>{
      var imgsrc=item.preview ? item.preview.images[0].source.url : 'https://source.unsplash.com/weekly?water';
      grid+=`
        <div class="container col-sm-4 bg-light">
          <img class="img-thumbnail" src=${imgsrc} ">
          <h4 class="card-title">${this.cutText(item.title)}</h4>
          <hr />
        </div>`;
    });
    grid+='</div>';
    this.refs.grid.innerHTML=grid;
  }
  cutText(text){
    if(text.length>100){
      return text.substring(0,100)+'...';
    }
    return text;
  }
  getImgSrc(item){

    console.log(item);
    return  'https://source.unsplash.com/weekly?water';
  }
  render() {

    return (
        <bdiv className="App">
            <nav class="navbar bg-info text-white navbar-static-top">
              <a class="navbar-brand text-white" href="/">Daily Reddit</a>
            </nav>
            <div class="container">
              <Search />
              <div id="grid"  ref='grid' class="col-sm-12 pt-5">
                {
                  this.props.arr.map(item =>
                      <div class="container col-sm-4 bg-light">
                        <img class="img-thumbnail" src={item.preview ? item.preview.images[0].source.url.replace("&amp;","&") : 'https://source.unsplash.com/weekly?water'} />
                        <h4 class="card-title">{this.cutText(item.title)}</h4>
                        <hr />
                      </div>
                  )
                }
              </div>
            </div>
        </bdiv>

    );
  }
}

function mapStateToProps(state) {
  return {
    arr: state.arr
  }
}

export default connect(mapStateToProps)(App);
