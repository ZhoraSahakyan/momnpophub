import React from 'react';
import {Table, DropdownButton, Button} from 'react-bootstrap';
import PaginationCustom from '../../components/pagination'
import MassInvitation from '../../components/mass-invitation';
import Details from '../../components/details';
import BankInformation from '../../components/bank-information';
import BusinessProfile from '../../components/business-profile';

import './Business-home.css';

const BusinessHome = () => {
    return (
        <div className=" col-xl-11 mx-auto">
            <div className="row">
                <div className="col-xl-6  mb-4">
                    <div className="bg-white secttion-container w-100 h-100 d-flex flex-column justify-content-between">
                        <div className="flex-grow-1  d-flex flex-column">
                            <header
                                className="d-flex justify-content-between justify-content-center secttion-container__header">
                                <h2 className="title m-0">Customers</h2>
                                <div className="d-flex">
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0">
                                        <i className="icon-deals"/>
                                    </Button>
                                    <Button type="button"
                                            className="btn btn-icon border-0 bg-transparent shadow-none p-0 d-flex align-items-center">
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
                            <div className="table-container flex-grow-1">
                                <Table className='business-table border-0 m-0'>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="align-middle bold-text text-center">1.</td>
                                        <td className="align-middle text-center">
                                            <a href=""
                                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                                <figure
                                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                                    {/*alt="user pic"*/}
                                                    {/*/>*/}
                                                    <i className="icon-user"/>
                                                </figure>
                                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                                            </a></td>
                                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                                        <td className="align-middle text-center dropdown-container">
                                            <DropdownButton id="dropdown-basic-button"
                                                            className="btn  border-0 bg-transparent shadow-none p-0 table-icon-btn"
                                                            title={
                                                                <i className="icon-add-user"/>
                                                            }>
                                                <Button type="button"
                                                        className="btn bg-transparent border-left-0 border-right-0 border-top-0 shadow-none d-block w-100 rounded-0">
                                                    Invite via Email
                                                </Button>
                                                <Button type="button"
                                                        className="btn bg-transparent border-0 shadow-none d-block w-100 rounded-0">
                                                    Invite via SMS
                                                </Button>
                                            </DropdownButton>
                                        </td>
                                        <td className="align-middle text-center">
                                            <button type="button"
                                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                                <i className="icon-pen"/>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle bold-text text-center">1.</td>
                                        <td className="align-middle text-center">
                                            <a href=""
                                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                                <figure
                                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                                    {/*alt="user pic"*/}
                                                    {/*/>*/}
                                                    <i className="icon-user"/>
                                                </figure>
                                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                                            </a></td>
                                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                                        <td className="align-middle text-center dropdown-containe">
                                            <button type="button"
                                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                                <i className="icon-user-check"/>
                                            </button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <button type="button"
                                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                                <i className="icon-pen"/>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle bold-text text-center">1.</td>
                                        <td className="align-middle text-center">
                                            <a href=""
                                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                                <figure
                                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                                    {/*alt="user pic"*/}
                                                    {/*/>*/}
                                                    <i className="icon-user"/>
                                                </figure>
                                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                                            </a></td>
                                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                                        <td className="align-middle text-center dropdown-container">
                                            <DropdownButton id="dropdown-basic-button"
                                                            className="btn  border-0 bg-transparent shadow-none p-0 table-icon-btn"
                                                            title={
                                                                <i className="icon-add-user"/>
                                                            }>
                                                <Button type="button"
                                                        className="btn bg-transparent border-left-0 border-right-0 border-top-0 shadow-none d-block w-100 rounded-0">
                                                    Invite via Email
                                                </Button>
                                                <Button type="button"
                                                        className="btn bg-transparent border-0 shadow-none d-block w-100 rounded-0">
                                                    Invite via SMS
                                                </Button>
                                            </DropdownButton>
                                        </td>
                                        <td className="align-middle text-center">
                                            <button type="button"
                                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                                <i className="icon-pen"/>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <footer className="d-flex flex-wrap justify-content-between align-items-center table-container__footer">
                            <MassInvitation/>
                            <PaginationCustom/>
                        </footer>
                    </div>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="bg-white secttion-container w-100 h-100 d-flex flex-column justify-content-between">
                        <Details/>
                    </div>
                </div>
                <div className="col-xl-6  mb-4">
                    <div className="bg-white secttion-container w-100 h-100">
                        <BankInformation/>
                    </div>
                </div>
                <div className="col-xl-6  mb-4">
                    <div className="bg-white secttion-container w-100 h-100">
                        <BusinessProfile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessHome;