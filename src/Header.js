import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

    return (
          <div className="Home"> 
            <h1>
                <Link to='/home'>MyReactApp</Link>
            </h1>
            <div className="Header">
                    
                    <div className="NavLinks"><Link to='/learn'>Learn</Link></div>
                    <div className="NavLinks"><Link to='/teach'>Teach</Link></div> 
                    <div className="NavLinks"><Link to='/contact-us'>Contact Us</Link></div>
                
                <button>
                    <Link to='/login'>Login</Link>
                </button>
                <button>
                    <Link to='/sign-up'>SignUp</Link>
                </button>
            </div>
          </div>
    );
}

export default Header;