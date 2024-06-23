import React from 'react';
import { Content } from '../../components/ContentHome/Content';
import Navbar from '../../components/Navbar/Navbar';

export class HomePage extends React.Component {

    render() {
        return (
            <>
                <Navbar/>

                <Content />
            </>
        )
    }
}