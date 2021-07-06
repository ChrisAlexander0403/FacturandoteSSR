import React from 'react';
import TutorialsComponent from '../components/tutorials/TutorialsComponent';
import { head } from 'lodash';
import { Helmet } from 'react-helmet';

const Tutorials = () =>{

    head = () => {
        return(
            <Helmet>
                <title>Manuales y Vídeos Tutoriales</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <TutorialsComponent />
        </>
    );
}

export default Tutorials;