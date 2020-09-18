import React from 'react';
import {Button} from 'react-bootstrap';

import './Block-header.css';


const BlockHeader = ({title, buttonText, buttonIcon}) => {
   let icon= buttonIcon ?  `${buttonIcon} orange-btn edit-btn`: null;

    return (
        <header
            className="d-flex justify-content-between justify-content-center secttion-container__header">
            <h2 className="title m-0  d-flex align-items-center">{title}</h2>
             <div className="d-flex">
                <Button type="button" className="btn border-0 bg-transparent shadow-none p-0">
                    <i className={icon}/>
                    <span className="orange-btn">{buttonText}</span>
                </Button>
            </div>
        </header>
    )
};

export default BlockHeader;
