import React, { useState } from 'react';

import logoImg from '../../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';
import { faBars, faCartShopping, faComment, faGamepad, faHouse, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    setIcon(prevIcon => (prevIcon === faBars ? faXmark : faBars));
  }

  return (
    <header>
      <nav id="navbar">

        <div className='barsMenu'>
          <FontAwesomeIcon icon={icon} className={`navIcon ${openMenu ? 'navIcon-rotate' : ''}`} onClick={toggleMenu} />
        </div>

        <div className="nav-brand">
          <img id='image-logo' src={logoImg} alt="logo" />
          <div className='columnName'>
            <h1>PlayVício Global</h1>
            <h2>© 2024 PlayVicio Games</h2>
          </div>
        </div>

        <ul className="nav-list">
          <li>
            <Link to={'/'} >
              <FontAwesomeIcon icon={faHouse} className='navIcon' />
              Home
            </Link>
          </li>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.pvgames.store" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGamepad} className='navIcon' />
              Jogar</a>
          </li>
          <li>
          <Link to={'/loja'} >
              <FontAwesomeIcon icon={faCartShopping} className='navIcon' />
              Loja
            </Link>
          </li>
          <li>
            <a href="https://wa.me/5527988994294" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} className='navIcon' />
              Suporte</a>
          </li>
          <li>
            <a href="https://discord.gg/bpvred" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faComment} className='navIcon' />
              Discord</a>
          </li>
        </ul>
      </nav>
      {
        openMenu && <DropDownMenu />
      }
    </header>
  )
}

export default Navbar;