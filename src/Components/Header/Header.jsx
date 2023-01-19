import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = ()=>{
    return(
        <div className='Header'>
            <div className='Header_left container'>
                <Link to='/'><img className='Header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB-LOGO" /></Link>
                <Link to='/movies/popular' style={{textDecoration:'none'}}><span>Popular</span></Link>
                <Link to='/movies/top_rated' style={{textDecoration:'none'}}><span>Top rated</span></Link>
                <Link to='/movies/upcoming' style={{textDecoration:'none'}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;