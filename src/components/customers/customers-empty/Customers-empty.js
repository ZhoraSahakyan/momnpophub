import React from 'react';
import {Button} from 'react-bootstrap'
import './Customers-empty.css';
import customersImage from './../../../assets/images/illustration.svg'
import AlertBlock from '../../alert-block'
const CustomersEmpty = () => {
    return (
        <div className="customers-details-container position-relative overflow-hidden">
            <div className="position-relative customers-details">
                <div className="customers-item bg-white align-items-center">
                    <div className="customers-item__number">1.</div>
                    <div className="customers-item__icon-orange">
                        <i className="icon-user rounded-circle overflow-hidden d-flex align-items-center justify-content-center"/></div>
                    <div className="customers-item__name text-truncate">Mom&Pop</div>
                    <div className="customers-item__price text-truncate">contact@momnpophub.com</div>
                    <div>
                        <Button variant='link' className='customers-item__edit text-decoration-none shadow-none'>
                            <i className="icon-pen"/>
                        </Button>
                    </div>
                </div>
                <div className="customers-item bg-white align-items-center">
                    <div className="customers-item__number">1.</div>
                    <div className="customers-item__icon-green">
                        <i className="icon-user rounded-circle overflow-hidden d-flex align-items-center justify-content-center"/></div>
                    <div className="customers-item__name text-truncate">John Doe</div>
                    <div className="customers-item__price text-truncate">john@example.com</div>
                    <div>
                        <Button variant='link' className='customers-item__edit text-decoration-none shadow-none'>
                            <i className="icon-pen"/>
                        </Button>
                    </div>
                </div>
                <div className="customers-item bg-white align-items-center">
                    <div className="customers-item__number">1.</div>
                    <div className="customers-item__icon-purple">
                        <i className="icon-user rounded-circle overflow-hidden d-flex align-items-center justify-content-center"/></div>
                    <div className="customers-item__name text-truncate">Elizabeth</div>
                    <div className="customers-item__price text-truncate">lizzy@customer.com</div>
                    <div>
                        <Button variant='link' className='customers-item__edit text-decoration-none shadow-none'>
                            <i className="icon-pen"/>
                        </Button>
                    </div>
                </div>
                <firgure className="d-flex justify-content-center customers-details__image">
                    <img src={customersImage} className="w-50" alt=""/>
                </firgure>

            </div>
            <p className="customers-details__description text-center">
                When someone purchases your deal, you’ll see the customer added here.
                Meanwhile, you can import your customer data from <a href="" className="orange-link">Excel</a> or <a href="" className="orange-link">HubSpot</a></p>
     <AlertBlock/>
        </div>
    )
}

export default CustomersEmpty