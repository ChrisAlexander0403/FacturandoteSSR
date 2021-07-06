import React from 'react';
import ServicesInfoComponent from './../components/servicesInfo/ServicesInfoComponent';
import { head } from 'lodash';
import { Helmet } from 'react-helmet';

const Services = () =>{

    head = () => {
        return(
            <Helmet>
                <title>Servicios</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <ServicesInfoComponent/>
        </>
    );
}

export default Services;