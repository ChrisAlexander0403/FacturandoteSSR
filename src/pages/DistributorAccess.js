import React from 'react';
import DistributorAccessComponent from '../components/distributorsAccess/DistributorAccessComponent';
import { head } from 'lodash';
import { Helmet } from 'react-helmet';

const DistributorAccess = () => {

    head = () => {
        return(
            <Helmet>
                <title>Conviértete en Distribuidor</title>
            </Helmet>
        );
    }

    return(
        <>
            {head()}
            <DistributorAccessComponent/>
        </>
    );
}

export default DistributorAccess;