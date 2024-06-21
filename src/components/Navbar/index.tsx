import  { useState, useCallback, ReactElement, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { LuAtom } from 'react-icons/lu';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import PAGES from '../pages/pages';
import Button from '../Button';

import './Navbar.css';

function Navbar(): ReactElement {
  const [menuClosed, setMenu] = useState<boolean>(true);
  const [displayButton, setDisplayButton] = useState<boolean>(true);

  const handleClick = useCallback(() => {
    setMenu(prev => !prev);
  }, []);
  const closeNavMenu = useCallback(() => {
    setMenu(true);
  }, [])
  const showButton = useCallback(() => {
    if(window.innerWidth <= 960) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [])

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeNavMenu}>
            Fake Inc <LuAtom className="icon"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            { menuClosed ?
              <FaBars/> :
              <FaXmark/>
            }
          </div>
          <NavMenu menuClosed={menuClosed} closeNavMenu={closeNavMenu}/>
          { 
            displayButton &&
            <Button
              buttonStyle="btn--outline"
            >Sign Up</Button>
          }
        </div>
      </nav>
    </>
  )
}

function NavMenu(
  { menuClosed, closeNavMenu } : { menuClosed: boolean, closeNavMenu: () => void }
): ReactElement {
  
  return (
    <ul className={menuClosed ? 'nav-menu' : 'nav-menu active'}>
      {PAGES.map(({ url, name }, index) => (
        <li className="nav-item" key={index}>
          <Link to={url} className="nav-links" onClick={closeNavMenu}>
            {name}
          </Link>
        </li>
      ))}
      <li className="nav-item menu-bar-only">
        {/* <Link 
          to="/sign-up" 
          className="nav-links-mobile"
          onClick={closeNavMenu}
        > */}
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--outline"
            onClick={closeNavMenu}
            style={{
              width: "80%",
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: "1.3rem"
            }}
          >
            Sign Up
          </Button>
        {/* </Link> */}
      </li>
    </ul>
  )
}

export default Navbar;