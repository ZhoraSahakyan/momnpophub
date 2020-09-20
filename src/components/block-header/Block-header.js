import React from 'react';
import {Button} from 'react-bootstrap';

import './Block-header.css';


const BlockHeader = ({title, buttonText, buttonIcon, handler}) => {
   let icon= buttonIcon ?  `${buttonIcon} orange-btn edit-btn`: null;

    return (
        <header
            className="d-flex flex-wrap justify-content-between align-items-center secttion-container__header">
            <h2 className="title m-0  d-flex align-items-center">{title}</h2>
             <div className="d-flex">
                <Button type="button" className="btn border-0 bg-transparent shadow-none p-0"
                    onClick={handler}
                >
                    <i className={icon}/>
                    <span className="orange-btn">{buttonText}</span>
                </Button>
            </div>
        </header>
    )
};

export default BlockHeader;
