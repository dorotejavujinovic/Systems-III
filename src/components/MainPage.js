import React, { useState, useEffect } from 'react'
import { Link } from  'react-router-dom'
import { GiBallerinaShoes } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './MainPage.css';
import { IconContext } from 'react-icons/lib';
import Dropdown from './Dropdown';
import DropdownE from './DropdownE';
function MainPage() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownE, setDropdownE] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    };
    const onMouseEnterE = () => {
        if(window.innerWidth < 960) {
            setDropdownE(false)
        } else {
            setDropdownE(true);
        }
    };
    const onMouseLeaveE = () => {
        if(window.innerWidth < 960) {
            setDropdownE(false)
        } else {
            setDropdownE(false);
        }
    };
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
        <div className='mainpage'>
            <div className='mainpage-container container'>
                <Link to='/mainpage' className='mainpage-logo' onClick={closeMobileMenu}>
                    <GiBallerinaShoes className='mainpage-icon' />
                    Ballerina's Notebook
                </Link>
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                
                

                
                <ul className={click ? 'main-menu active' : 'main-menu'}>
                <li className="main-item">
                    <input type="text" placeholder="Type here"/>
                    <Button buttonStyle='btn--outline'>Search</Button>
                    </li>
                   <li className="main-item">
                        <Link to='/mainpage/profile' className='main-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                     </li> 
                     <li className="main-item" onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                        <Link to='/mainpage/dance-type' className='main-links' onClick={closeMobileMenu}>
                            Dance type
                        </Link>
                        {dropdown && <Dropdown/>}
                     </li>
                     <li className="main-item">
                        <Link to='/mainpage/groups' className='main-links' onClick={closeMobileMenu}>
                            Groups
                        </Link>
                     </li> 
                     <li className="main-item" onMouseEnter={onMouseEnterE}
                     onMouseLeave={onMouseLeaveE}>
                        <Link to='/mainpage/event' className='main-links' onClick={closeMobileMenu}>
                            Event
                        </Link>
                        {dropdownE && <DropdownE/>}
                     </li>
                     <li className='main-btn'>
                        {button ? (
                           <Link to='/' className='btn-link'>
                               <Button buttonStyle='btn--outline'>LOG OUT</
                               Button>
                           </Link> 
                        ): (
                            <Link to='/' className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>
                                LOG OUT
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

export default MainPage