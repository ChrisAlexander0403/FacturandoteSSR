import React from 'react';
import PaymentComponent from '../components/PaymentComponent/PaymentComponent';
import { useParams } from 'react-router';
import { head } from 'lodash';
import { Helmet } from 'react-helmet';

const Payment = () =>{
    const { id } = useParams();

    head = () => {
        return(
            <Helmet>
                <title>Pago</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <PaymentComponent id={id}/>
        </>
    );
}

export default Payment;