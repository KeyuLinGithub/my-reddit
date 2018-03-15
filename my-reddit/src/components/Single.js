import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from 'react-loading-animation';
import { Link } from 'react-router-dom';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {comments:[]};
    this.singleSearch=this.singleSearch.bind(this);
    this.goSingleSearch=this.goSingleSearch.bind(this);
  }
  singleSearch(url){
    this.goSingleSearch(url)
    .then(data => {this.setState({single:data})})
    .catch(err => console.log(err));
  }
  goSingleSearch(url){
    return fetch(url)
    .then(response => response.json()).then(data => {return data.map(data => data);})
    .catch(err => console.log(err));
  }
  render() {
    //console.log(this.props.location.pathname.substring(7));

    const i=this.props.arr.findIndex((arr) => arr.id ===this.props.location.pathname.substring(6));
    const post=this.props.arr[i];
    //console.log(post);
    var post_url=post.url.substring(0,post.url.length-1)+'.json';
    //console.log(post_url);
    console.log(post);
    this.singleSearch(post_url);
    //console.log("Single post:")
    var res=this.state.single;
    console.log(res);
    //console.log("post:");
    console.log("comments:");
    var cc=[];
    if(typeof(res) !== "undefined" && typeof(res[1]) !== "undefined"){
      console.log(res[1].data.children);
      cc=res[1].data.children;
    }

    if(cc.length===0){
      return(
        <div>
          <nav class="navbar bg-primary navbar-static-top">
            <Link class="navbar-brand" to="/" style={{color: "white"}}>Daily Reddit</Link>
          </nav>
          <div class="container">
            <div id="content">
              <h2>{post.title}</h2>
              <h4>Author: {post.author}</h4>
              <img class="img-thumbnail" alt="img" src={post.preview ? post.preview.images[0].source.url.replace("&amp;","&") : 'https://source.unsplash.com/weekly?water'} alt="phto is not loading"/>
              <hr />
            </div>
            <div id="comments">
              <Loading />
            </div>
          </div>
        </div>
      )
    }
    return(
      <div>
        <nav class="navbar bg-info text-white navbar-static-top">
          <a class="navbar-brand text-white" href="/">Daily Reddit</a>
        </nav>
        <div class="container">
          <div id="content">
            <h2>{post.title}</h2>
            <div>
              <h4 class="col-sm-9">Author: {post.author}</h4>
              <div class="col-sm-3">
              <Link to='/' class="pull-right"><button class="btn btn-primary">Back</button></Link>
              </div>
            </div>
            <img class="img-thumbnail" alt="img" src={post.preview ? post.preview.images[0].source.url.replace("&amp;","&") : 'https://source.unsplash.com/weekly?water'} alt="phto is not loading"/>
            <hr />
          </div>
          <div id="comments">
            {

              cc.map((comment,index) =>
                <div class="container">
                  <div class="container">
                    <div class="col-sm-3">
                      <img class="img-thumbnail" alt={'user img '+index} src={'https://source.unsplash.com/400x400/?people,'+index} />
                    </div>
                    <div class="col-sm-9">
                      <h4 >{comment.data.author}:</h4>
                      <p>{comment.data.body}</p>
                    </div>

                  </div>
                  <hr />
                </div>
              )
            }
          </div>
        </div>
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
