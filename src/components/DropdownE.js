import React, { useState } from 'react';
import { EventData } from './EventData';
import './DropdownE.css';
import { Link } from 'react-router-dom';
function DropdownE() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdownE-menu clicked' : 'dropdownE-menu'}
        >
          {EventData.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  export default DropdownE;