import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faComment, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';

export class DropDownMenu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <ul className='list'>
                    <li><a href="https://play.google.com/store/apps/details?id=com.pvgames.store" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDownload} className='navIcon' />
                        Jogar</a></li>
                    <li><a href="/" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCartShopping} className='navIcon' />
                        Loja</a></li>
                    <li>
                        <a href="https://wa.me/5527988994294" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPhone} className='navIcon' />
                            Suporte</a></li>
                    <li>
                        <a href="https://discord.gg/bpvred" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faComment} className='navIcon' />
                            Discord</a></li>
                </ul>
            </div>
        )
    }
}