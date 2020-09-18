import React from 'react';
import {Form, Button} from 'react-bootstrap'
import MaterialUIPickers from './../../material-ui-pickers/Material-UI-Pickers'

import './Create-details.css';


const CreateDetails = ({ showList }) => {
    return (
        <div className="create-details-container">
            <header  className="create-details-container__header d-flex align-content-center justify-content-between">
                <h2 className="create-details-container__header__title m-0 d-flex align-items-center">Create your first deal</h2>
                <Button variant="link" className="shadow-none text-decoration-none p-0">
                    <i className="icon-close close-btn"/>
                </Button>
            </header>

            <Form className="create-details-form-container">
                <div className="row">
                    <div className="col-sm-8">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="label">Deal Name</Form.Label>
                            <Form.Control type="text" className="input shadow-none" placeholder="Deal Name"/>
                        </Form.Group>
                        <div className="d-flex flex-wrap">
                            <div className="col-sm-5 p-0">
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="label"> Deal & Service Picture</Form.Label>
                                        <div className="position-relative file-upload-container bg-white d-flex align-content-center justify-content-center overflow-hidden">
                                            <i className="icon-image d-block"/>
                                            <input type="file" className="position-absolute file-upload-container__input w-100 h-100"/>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="col-sm-5 p-0 offset-sm-2">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="label">Original Price</Form.Label>
                                    <Form.Control type="text" className="input shadow-none" placeholder="$0.00"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="label">Discounted Price</Form.Label>
                                    <Form.Control type="text" className="input shadow-none" placeholder="$0.00"/>
                                </Form.Group>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <MaterialUIPickers labelText="Deal Start Date"/>
                        <MaterialUIPickers labelText="Deal End Date"/>
                        <MaterialUIPickers  labelText="Deal Publish Date"/>
                    </div>
                </div>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label">Deal Description</Form.Label>
                    <Form.Control as="textarea" rows="4" className="shadow-none textarea" placeholder="Deal Description"/>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                    <Form.Group controlId="formBasicCheckbox">
                        <label className="checkbox-label d-flex">
                            <div className="position-relative">
                                <input type="checkbox" className="position-absolute"/>
                                <span className="d-block custom-checkbox bg-white">
                            </span>
                            </div>
                            Send Email notification to customers</label>
                        <label className="checkbox-label d-flex">
                            <div className="position-relative">
                                <input type="checkbox" className="position-absolute"/>
                                <span className="d-block custom-checkbox bg-white">
                            </span>
                            </div>
                            Send SMS notification to customers</label>
                    </Form.Group>
                    <Button variant="link" className="text-decoration-none shadow-none green-btn" type="submit" onClick={showList}>
                        Publish deal
                    </Button>
                </div>
            </Form>
        </div>
    )
};

export default CreateDetails;
