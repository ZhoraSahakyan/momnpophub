import React, {useState} from 'react';
import BlockHeader from '../../components/block-header'
import CompletedSetup from './completed-setup/Completed-setup';
import CompletedSteper from './completed-steper/Completed-steper';


import './Bank-information.css';
import {Form} from "react-bootstrap";
import Button from "@material-ui/core/Button/Button";
import MobileStepper from "@material-ui/core/MobileStepper/MobileStepper";


const BankInformation = () => {
    const [isVerifyed, verify] = useState(false);
    const [isEdit, edit] = useState(false);
    return (
        <div>
            <BlockHeader title="Bank information" buttonText="Edit payment information" buttonIcon="icon-pen"
                         handler={() => isVerifyed && edit(true)}/>
            {!isEdit && isVerifyed && <CompletedSetup/>}
            {!isVerifyed && <CompletedSteper verify={verify}/>}

            {isEdit && <div className="stepper-container">
                <p className="stepper-container__title">To start earning, please setup your preferred payment method</p>
                <div>
                    <Form>
                        <Form.Group className="d-flex flex-wrap">
                            <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2">Business Account
                                Name</Form.Label>
                            <Form.Control type="text" className="input shadow-none col-sm-6"
                                          placeholder="Business Account Name"/>
                        </Form.Group>
                        <Form.Group className="d-flex flex-wrap">
                            <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2"> Business ABA/Routing
                                Number</Form.Label>
                            <Form.Control type="text" className="input shadow-none col-sm-6"
                                          placeholder="Business ABA/Routing Number"/>
                        </Form.Group>
                        <Form.Group className="d-flex flex-wrap">
                            <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2"> Business Account
                                Number</Form.Label>
                            <Form.Control type="text" className="input shadow-none col-sm-6"
                                          placeholder=" Business Account Number"/>
                        </Form.Group>
                        <Form.Group className="d-flex flex-wrap">
                            <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2">Business Address
                                associated
                                with the account</Form.Label>
                            <Form.Control type="text" className="input shadow-none col-sm-6"
                                          value="7820 Poplar Ave, Germantown, TN 38138, USA"
                                          placeholder="Business Address associated with the account"/>
                        </Form.Group>
                        <div className="d-flex justify-content-end align-items-center">
                            <Button className='orange-button text-capitalize'
                                    onClick={() => edit(false)}
                            >Verify payment method</Button>

                            <Button className='orange-button text-capitalize ml-1 cancel-btn'
                                    onClick={() => edit(false)}
                            >Cancel</Button>
                        </div>
                    </Form>
                </div>
            </div>}
        </div>
    )
};

export default BankInformation;
