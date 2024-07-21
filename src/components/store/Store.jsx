import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCoins, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles.css'
import '../../breakpoints/responsive.css'

export class Store extends React.Component {
    render() {
        return (

            <body className='bodyStore'>

                <section className='titleStore'>
                    <h1>
                        {this.props.titleStore}
                    </h1>

                    <p className='classP'>
                        {this.props.phraseTitle}
                    </p>
                </section>

                <section className='buttonBuy'>

                    <div class="actions">
                        <a href="/">{this.props.button}</a>
                    </div>

                </section>

                <section className='sectionCards'>

                    <div className='centerCards'>
                        <div className='cards'>
                            <div className='cardOne'>
                                <h3 className='titleCard'>
                                    <FontAwesomeIcon icon={faCoins} className='iconCard' />
                                    {this.props.title}</h3>

                                <p className='textCard'>{this.props.articleCard}</p>
                            </div>

                            <div className='cardTwo'>
                                <h3 className='titleCard'>
                                    <FontAwesomeIcon icon={faUser} className='iconCard' />
                                    {this.props.title2}</h3>

                                <p className='textCard'>{this.props.articleCard2}</p>
                            </div>


                            <div className='cardThree'>
                                <h3 className='titleCard'>
                                    <FontAwesomeIcon icon={faCar} className='iconCard' />
                                    {this.props.title3}</h3>

                                <p className='textCard'>{this.props.articleCard3}</p>
                            </div>
                        </div>
                    </div>

                </section>

            </body>
        )
    }
}