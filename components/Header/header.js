import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'



const Header = () => {
    const navBars = () => (
            <div className='bars'>
                <FontAwesome name="bars" style={{color:'#dfdfdf'}}/>
            </div>           
    )

    

    const logo = () => (
   
            <Link to = "/" className='logo'>
                <img alt='NBA logo' src='/images/nba_logo.png' />
            </ Link>
    )

    return (

        <header className='header'>
            <div className='headerOpt'>
                { navBars() }
                { logo() }
            </div>
        </header>
    )
}

export default Header;