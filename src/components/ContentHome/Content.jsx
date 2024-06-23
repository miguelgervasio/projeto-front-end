import React from 'react';

import './style.css';

import ImageContent from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faVideo, faComputer, faDownload } from '@fortawesome/free-solid-svg-icons';

export class Content extends React.Component {

    render() {
        return (
            <div className='backgroud'>
                <body className='content'>

                    <aside>
                        <img className='imageAside' src={ImageContent} alt="Logo" />
                    </aside>

                    <main>

                        <h1>PlayVício Global</h1>

                        <p>Bem-vindo ao PlayVício Global, a plataforma definitiva para todos os jogadores de roleplay! Se você é um entusiasta de roleplay e está em busca de uma maneira fácil e segura de gerenciar suas coins e aproveitar ao máximo sua experiência de jogo, você veio ao lugar certo.
                        </p>

                        <div className='buttons'>

                            <button className='button'>
                                <a href="https://play.google.com/store/apps/details?id=com.pvgames.store" rel="noopener noreferrer" target='_blank'>BAIXAR AGORA</a>
                                <FontAwesomeIcon icon={faDownload} className='iconImage' />
                            </button>

                            <button className='button'><a href="https://youtube.com/watch?v=t8YsXd3Axo4&t" rel="noopener noreferrer" target='_blank'>CLIPE PROMOCIONAL</a>
                                <FontAwesomeIcon icon={faVideo} className='iconImage' />
                            </button>

                            <div className='displayIcons'>
                                <FontAwesomeIcon icon={faComputer} />
                                <FontAwesomeIcon icon={faMobile} />
                            </div>
                        </div>

                    </main>
                </body>
            </div>

        )
    }
}