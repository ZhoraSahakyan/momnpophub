import React, {useState} from 'react';
import {Button, Table} from 'react-bootstrap'
import './Signup-success.css'
import LoginModal from './../../components/login-modal';
import SuccessMessage from '../../components/success-message';
import SearchBlock from '../../components/search-block';

import Logo from '../../assets/images/logo/momnpophub-logo.svg'
import hubspotLogo from '../../assets/images/logo/hubspot-logo.svg'


const SignupSuccess = () => {
    const [show, setShow] = useState(false);
    const [add, addCustomer] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const success = {
        title: 'Congrats!',
        desc: 'Your account has  been created!'
    }

    const connected = disabled ? `d-flex button-block d-flex align-items-center active selected` : `d-flex button-block d-flex align-items-center`;
    return (
        <div className="col-xl-11 mx-auto">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 col-xl-5 mx-auto">
                    <div className="d-flex flex-wrap congratulation-block">
                        <SuccessMessage success={success}/>
                    </div>
                    <div className="d-flex button-block d-flex align-items-center active selected">
                        <div
                            className="circle-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                            <i className="icon-user-plus"/>
                        </div>
                        <p className="m-0">You are ready to invite your customers
                            to Mom n Pop Hub mobile app. </p>
                        <img className="button-block__logo flex-shrink-0" src={Logo} alt=""/>
                    </div>
                    <div className={connected}>
                        <div
                            className="circle-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                            <i className="icon-link"/>
                        </div>
                        <p className="m-0 button-block__text">You are ready to invite your customers
                            to Mom n Pop Hub mobile app. </p>
                    </div>
                    <div className="d-flex flex-column button-block">
                        <LoginModal show={show} disabled={disabled} handleClose={handleClose} handleShow={handleShow}
                                    setDisabled={setDisabled}/>
                        <Button variant="link"
                                className="connect-btn text-decoration-none shadow-none d-flex align-items-center justify-content-center">
                            <i className="icon-connect-list"/> Create your own customer list
                        </Button>
                    </div>
                    <div className="text-center">
                        <Button variant="link" className='skip text-decoration-none'>
                            Skip for now
                        </Button>
                    </div>
                </div>
                {disabled && <div className="col-xl-6 offset-xl-1 h-480 p-0 connect-block bg-white">
                    <div className="d-flex flex-column connect-block__content">
                        <header
                            className="d-flex justify-content-between justify-content-between secttion-container__header position-relative">
                            <div className="d-flex align-items-center">
                                <h2 className="title m-0 d-flex align-items-center">
                                    <i className="icon-connect-list connect-icon"/>
                                    Customer List</h2>
                                <img className="connect-image" src={hubspotLogo} alt=""/>

                            </div>
                            <div className="d-flex">
                                <Button type="button"
                                        onClick={() => addCustomer(!add)}
                                        className="btn btn-icon border-0 bg-transparent shadow-none p-0 settings-icon active">
                                    <i className="icon-user-plus d-flex"/>
                                </Button>
                            </div>
                            {add && <SearchBlock/>}
                        </header>
                        <div className="table-container flex-grow-1 border-0 p-0">
                            <Table responsive className='table-container customer-list-table border-0 m-0'>
                                <thead>
                                <tr>
                                    <td className="align-middle border-0 font-weight-bold">#</td>
                                    <td className="align-middle border-0 font-weight-bold">First name</td>
                                    <td className="align-middle border-0 font-weight-bold">Last name</td>
                                    <td className="align-middle border-0 font-weight-bold">Email</td>
                                    <td className="align-middle border-0 font-weight-bold">Phone</td>

                                    <td className="align-middle border-0 font-weight-bold">
                                        Actions
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="align-middle border-0">1.</td>
                                    <td className="align-middle border-0">Sergey</td>
                                    <td className="align-middle border-0">Golovashkin</td>
                                    <td className="align-middle border-0">sergey@toplev.io</td>
                                    <td className="align-middle border-0">+1 800 1234 567</td>

                                    <td className="align-middle border-0">
                                        <button type="button"
                                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                            <i className="icon-pen"/>
                                        </button>
                                        <button type="button"
                                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                            <i className="icon-trash table-icon-delete "/>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end connect-block__footer">
                        <Button variant="link" className="text-decoration-none shadow-none green-btn" type="submit">
                            Complete
                        </Button>
                    </div>
                </div>}

            </div>
        </div>
    )
}
export default SignupSuccess