import React, { Component } from 'react';
import '../App.css';
import Search from './Search';

class Header extends Component{

  render() {
    // fetch('https://www.reddit.com/r/SBU/comments/7xuyxp/how_are_nonstem_programs_at_sbu.json')
    // .then(response => response.json()).then(data => console.log(data));
    return (

        <bdiv className="Header">
            <nav class="navbar bg-info text-white navbar-static-top">
              <a class="navbar-brand text-white" href="/">Daily Reddit</a>
            </nav>
            <div class="container">
              <Search {...this.props}/>
            </div>
        </bdiv>

    );
  }
}

export default Header;
