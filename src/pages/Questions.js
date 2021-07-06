import React from 'react';
import QuestionsComponent from '../components/questions/QuestionsComponent';
import { head } from 'lodash';
import { Helmet } from 'react-helmet';

const Questions = () =>{

    head = () => {
        return(
            <Helmet>
                <title>Preguntas Frecuentes</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <QuestionsComponent />
        </>
    );
}

export default Questions;