import React from 'react';
import { Link } from "react-router-dom";
import './navigation.css';

function Navigation(){
    return(
        <div className='nav'>
            <div className='center'>
                <Link to='/homepage'>
                    DEV@Deakin
                </Link>
            </div>
            <div className="center">
                <input type="text" id="search-bar" placeholder='Search...'></input>
            </div>
            <div className='center'>
                <h3>Post</h3>
            </div>
            <div className='center'>
                <Link to='/login'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navigation;