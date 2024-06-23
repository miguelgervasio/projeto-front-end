import React, { useState } from 'react';

import logoImg from '../../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';
import { faBars, faComment, faGamepad, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

const Navbar = () => {

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header>
      <nav id="navbar">

        <div className='barsMenu'>
          <FontAwesomeIcon icon={faBars} className='navIcon' onClick={() => setOpenProfile((prev) => !prev)} />
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
            <a href="/">
              <FontAwesomeIcon icon={faHouse} className='navIcon' />
              Home</a>
          </li>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.pvgames.store" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGamepad} className='navIcon' />
              Jogar</a>
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
        openProfile && <DropDownMenu />
      }
    </header>
  )
}

export default Navbar;