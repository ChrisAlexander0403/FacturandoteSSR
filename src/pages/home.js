import React from 'react';
import { head } from 'lodash';
import Slider from '../components/slider/Slider';
import Container from '../components/infoIconsComponent/Container';
import GuideContainer from '../components/guideComponent/GuideContainer';
import { Helmet } from 'react-helmet';

const Home = () => {
    
    head = () => {
        return(
            <Helmet>
                <title>Inicio</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <Slider/>
            <Container/>
            <GuideContainer/>
        </>
    );
}

export default Home;