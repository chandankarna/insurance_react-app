import React from 'react'
import LifeInsuranceForm from './Life-Insurance-Form'
import { Helmet } from 'react-helmet';
import Reason from '../../Home/Reasons/Reason'


function LifeInsurance() {
    return (
        <>
            <div className='insurance-page'>
                <Helmet>
                    <title>
                        Life Insurance ~ Policy India
                    </title>
                </Helmet>
                <LifeInsuranceForm />
                <Reason />
            </div>        
        </>
    )
}

export default LifeInsurance