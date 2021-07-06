import { head } from 'lodash';
import React from 'react';
import AboutContainer from '../components/aboutComponent/AboutComponent';
import { Helmet } from 'react-helmet';

const About = () =>{

    head = () => {
        return(
            <Helmet>
                <title>¿Quienes Somos?</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <AboutContainer/>
        </>
    );
}

export default About;