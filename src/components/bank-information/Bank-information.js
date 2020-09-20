import React from 'react';
import BlockHeader from '../../components/block-header'
import CompletedSetup from './completed-setup/Completed-setup';
import CompletedSteper from './completed-steper/Completed-steper';


import './Bank-information.css';


const BankInformation = () => {
    return (
        <div>
            <BlockHeader title="Bank information" buttonText="Edit payment information" buttonIcon="icon-pen"/>
            {/*<CompletedSetup/>*/}
            <CompletedSteper/>
        </div>
    )
};

export default BankInformation;
