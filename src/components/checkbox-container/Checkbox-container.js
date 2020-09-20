import React from 'react';

import './Checkbox-container.css';


const CheckboxContainer = ({labetText}) => {
    return (
        <label className="checkbox-label d-flex">
            <div className="position-relative">
                <input type="checkbox" className="position-absolute"/>
                <span className="d-flex align-items-center justify-content-center custom-checkbox">
                            </span>
            </div> {labetText}</label>
    )
};

export default CheckboxContainer;
