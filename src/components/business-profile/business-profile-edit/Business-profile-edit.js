import React, {useState} from 'react';
import DefaultImage from "../../../assets/images/default.png";
import {Button, Form} from "react-bootstrap";

import './Business-profile-edit.css';

const BusinessProfileEdit = () => {
    const [edit, setEdit] = useState(true);
    const data = {
        name: 'Joe',
        surname: 'Flowers',
        email: 'joe@flowers.com',
        desc: 'Joe Flowers is leading online and offline store that offers various species of flowers',
        discountedPrice: '$300.00',
        dealStartDate: '06/13/2020',
        dealEndDate: '06/13/2020',
        dealPublishDate: '06/13/2020',
        dealDescription: 'Cheaper Than Black Friday iMac + Free 2 Day Shipping'
    }
    return (
        <div className="business-profile-page col-12">
            <div className="d-flex flex-wrap flex-column justify-content-between align-items-start mb-2">
                <div className="col-12 d-flex flex-column align-items-center p-0">
                    <Form className="create-details-form-container">
                        <div className="row">
                            <div className="col-sm-12 d-flex flex-row align-items-center border-bottom px-0 py-3 mb-2">
                                <a href=""
                                   className="business-profile-image rounded-circle d-block overflow-hidden shadow">
                                    <img src={DefaultImage} alt="" className="w-100 h-100 img-fluid"/>
                                </a>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none font-weight-bold"
                                                  placeholder="Deal Name"
                                                  value={data.name} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none font-weight-bold mx-2"
                                                  placeholder="Deal Name"
                                                  value={data.surname} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none mx-3 px-1"
                                                  placeholder="Deal Name"
                                                  value={data.email} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 d-flex align-items-center p-0">
                                <Form.Group controlId="formBasicEmail" className='w-100'>
                                    <Form.Control type="text" className="input shadow-none"
                                                  placeholder="Deal Name"
                                                  value={data.desc} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>


                            <div className="col-sm-12 d-flex flex-row align-items-center justify-content-center p-0">
                                <div className="row w-100">
                                    <div className="col-sm-6 d-flex justify-content-between p-0">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" className="input shadow-none"
                                                          placeholder="Deal Name"
                                                          value={data.name} disabled={(edit) ? '' : 'disabled'}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail" className="ml-1">
                                            <Form.Control type="text" className="input shadow-none"
                                                          placeholder="Deal Name"
                                                          value={data.surname} disabled={(edit) ? '' : 'disabled'}
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className="col-sm-6 p-0 pl-1">
                                        <Form.Group controlId="formBasicEmail">
                                            <u className="orange-btn">
                                                <Form.Control type="text"
                                                              className="input shadow-none mx-0 px-1 orange-btn"
                                                              placeholder="Deal Name"
                                                              value={data.email} disabled={(edit) ? '' : 'disabled'}
                                                />
                                            </u>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 d-flex align-items-center p-0">
                                <Form.Group controlId="formBasicEmail" className='w-100'>
                                    <Form.Control type="text" className="input shadow-none"
                                                  placeholder="Deal Name"
                                                  value={data.desc} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 d-flex align-items-center p-0">
                                <Form.Group controlId="formBasicEmail" className='w-100'>
                                    <Form.Control type="text" className="input shadow-none"
                                                  placeholder="Deal Name"
                                                  value={data.desc} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 d-flex align-items-center justify-content-between p-0">
                                <Form.Group controlId="formBasicEmail" className='w-75 m-0'>
                                    <Form.Control type="text" className="input shadow-none"
                                                  placeholder="Deal Name"
                                                  value={data.desc} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>

                                <Button variant="link" className="text-decoration-none shadow-none grey-btn ml-1 w-25"
                                        type="submit">
                                    Add New Location
                                </Button>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>

        </div>
    )
};

export default BusinessProfileEdit