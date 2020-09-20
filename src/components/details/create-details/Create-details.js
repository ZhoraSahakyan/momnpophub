import React from 'react';
import {Button} from 'react-bootstrap';

import FormComponent from './../../form-component'

import './Create-details.css';


const CreateDetails = () => {
    return (
        <div className="create-details-container">
            <header className="create-details-container__header d-flex align-content-center justify-content-between">
                <h2 className="create-details-container__header__title m-0 d-flex align-items-center">Create your first
                    deal</h2>
                <Button variant="link" className="shadow-none text-decoration-none p-0">
                    <i className="icon-close close-btn"/>
                </Button>
            </header>
            <FormComponent/>
        </div>
    )
};

export default CreateDetails;
