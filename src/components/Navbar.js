import React, { useState, useEffect } from 'react'
import { Link } from  'react-router-dom'
import { GiBallerinaShoes } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <GiBallerinaShoes className='navbar-icon' />
                    Ballerina's Notebook
                </Link>
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-btn'>
                        {button ? (
                           <Link to='/log-in' className='btn-link'>
                               <Button buttonStyle='btn--outline'>LOG IN</
                               Button>
                           </Link> 
                        ): (
                            <Link to='/log-in' className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>
                                LOG IN
                            </Button>
                            </Link>
                        )
                        }
                    </li>

                </ul>
            </div>  
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
