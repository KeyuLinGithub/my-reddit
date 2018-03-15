import React, { Component } from 'react';
import '../App.css';
import Search from './Search';
import { Link } from 'react-router-dom';

class Header extends Component{

  render() {

    return (

        <bdiv className="Header">
            <nav class="navbar bg-primary text-white navbar-static-top">
              <Link class="navbar-brand text-white" to="/" style={{color: "white"}}>Daily Reddit</Link>
            </nav>
            <div class="container col-sm-7">
              <Search class="pull-center " {...this.props}/>
            </div>
        </bdiv>

    );
  }
}

export default Header;
