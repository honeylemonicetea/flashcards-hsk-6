import React from "react";
import './Navbar.css'
import {NavLink} from 'react-router-dom'


function Navbar(){
    return (
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="nb-left">
            <NavLink to='/'>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1864/1864648.png"
                alt=""
                className="logo"
              />

            </NavLink>
            
            <NavLink to="/">Add a New Card</NavLink>
            <NavLink to="/">Create Set</NavLink>
            <NavLink to="/">My Sets</NavLink>
            <NavLink to="/">Browse All</NavLink>

            {/* add cards, create own sets, train */}
          </div>
          <div className="nb-right">
            {/* create a login are. If logged in, there will be a drop down... DJANGO FOR AUTH??? */}
            <NavLink to="/">Sign Up</NavLink>
            <NavLink to="/">Log In</NavLink>
          </div>
        </div>
      </div>
    );
}


export default Navbar
