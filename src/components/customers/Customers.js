import React from 'react';
import { Button} from 'react-bootstrap';
import PaginationCustom from '../../components/pagination'
import MassInvitation from '../../components/mass-invitation';
import CustomersData from './customers-data/Customers-data';
import CustomersSettings from './customers-settings/Customers-settings';
import CustomersEmpty from './customers-empty';
import AlertBlock from './../alert-block';


import './Customers.css';

const Customers = () => {
    return (
                    <div className="bg-white secttion-container w-100 h-100 d-flex flex-column justify-content-between">
                        <div className="flex-grow-1  d-flex flex-column position-relative">
                            <header
                                className="d-flex justify-content-between justify-content-center secttion-container__header position-relative">
                                <h2 className="title m-0 d-flex align-items-center">Customers</h2>
                                <div className="d-flex">
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0 settings-icon active">
                                        <i className="icon-deals d-flex"/>
                                    </Button>
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0 d-flex align-items-center excel-icon">
                                        <i className="icon-excel-icon-hover dropdown"/>
                                        <i className="icon-excel-icon"/>
                                    </Button>
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0">
                                        <i className="icon-add-user"/>
                                    </Button>
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0">
                                        <i className="icon-deals-resize"/>
                                    </Button>
                                </div>
                            </header>
                            <CustomersData/>
                            {/*<CustomersSettings/>*/}
                            {/*<CustomersEmpty/>*/}
                            <AlertBlock/>

                        </div>
                        <footer className="d-flex flex-wrap justify-content-between align-items-center table-container__footer">
                            <MassInvitation/>
                            <PaginationCustom/>
                        </footer>
                    </div>
    )
}

export default Customers;