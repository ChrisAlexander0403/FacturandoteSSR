import React from 'react';
import ContactComponent from './../components/contactForm/ContactComponent';
import { Helmet } from 'react-helmet';
import { head } from 'lodash';


const Contact = () => {

    head = () => {
        return(
            <Helmet>
                <title>Contacto</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <ContactComponent/>
        </>
    );
}

export default Contact;