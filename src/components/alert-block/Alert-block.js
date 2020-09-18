import React from 'react';
import {Button} from 'react-bootstrap';
import image from '../../assets/images/img_allert.svg';
import './Alert-block.css';

const AlertBlock = () => {
    return (
        <div className="position-absolute  d-flex align-items-center alert-block bg-white mx-auto">
            <figure className="flex-shrink-0 alert-block__img mb-0">
                <img src={image} className="w-100 h-100" alt=""/>
            </figure>
            <div>
                <h4 className="alert-block__title">Success!</h4>
                <p className="alert-block__description m-0">
                    Email invitations to your customers has been sent!</p>
            </div>
            <Button variant='link' className='position-absolute alert-block__close shadow-none p-0'>
                <i className="icon-close"/>
            </Button>
        </div>
    )
}

export default AlertBlock