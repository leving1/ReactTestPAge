import React, { useState} from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Levin Gorgs
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={refreshPage}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Projects'
                className='nav-links'
                onClick={refreshPage}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Fahrtkostenrechner'
                className='nav-links'
                onClick={refreshPage}
              >
                Fahrtkostenrechner
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutMe'
                className='nav-links'
                onClick={refreshPage}
              >
                About Me
              </Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;