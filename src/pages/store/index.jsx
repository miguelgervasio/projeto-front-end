import React from 'react';
import './styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../../components/Navbar/Navbar';
import { Store } from '../../components/store/Store';

export class StorePage extends React.Component {
    render() {
        return (
            <>

                <Navbar />

                <Store
                    titleStore="PlayVício Global"
                    phraseTitle="Conecte-se a qualquer servidor GTA SAMP de forma rápida e intuitiva. Descubra novas aventuras, faça amigos e explore um vasto mundo de possibilidades, tudo ao seu alcance com apenas alguns cliques."

                    button="Adquirir itens"

                    title="Coins"
                    articleCard="Amplie suas possibilidades no jogo com Coins! Obtenha vantagens incríveis e melhore sua experiência com acesso a itens e upgrades únicos"

                    title2="Sócios"
                    articleCard2="Experimente o jogo de uma maneira única ao se tornar um Sócio VIP! Desfrute de benefícios exclusivos, suporte prioritário e diversos outros. Eleve seu status e aproveite todas as vantagens reservadas aos VIPs"

                    title3="Veículos"
                    articleCard3="Explore o jogo com estilo e eficiência utilizando veículos de inventário! Disponíveis em várias opções, melhore seu transporte e acelere seu progresso no jogo"
                />

            </>
        )
    }
}