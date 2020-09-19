import React, {useState} from 'react';
import {Table, DropdownButton, Button} from 'react-bootstrap';
import PaginationCustom from './../../pagination'
import  FormComponent from './../../form-component';
import  BlockHeader from './../../block-header';

import './Deal-details.css';

const DealDetails = () => {
    const [edit, setEdit] = useState(true);
    const [page, setPage] = useState(false);
    const data = {
        dealName: 'Largest Summer Cyber Monday Sale',
        servicePicture: 'profil_image.png',
        originalPrice: '$500.00',
        discountedPrice: '$300.00',
        dealStartDate: '06/13/2020',
        dealEndDate: '06/13/2020',
        dealPublishDate: '06/13/2020',
        dealDescription: 'Cheaper Than Black Friday iMac + Free 2 Day Shipping'
    }
    return (
        <div className="col-12">
            <div className="d-flex flex-wrap bg-white deal-details overflow-hidden w-100">
                <div className="w-100">
                    <BlockHeader  title="Largest Summer Cyber Monday Sale" buttonText="Share deal" buttonIcon="icon-share-square"/>
                </div>
                <section className="col-md-6 p-0">
                    <div className="deal-details__header">
                        <BlockHeader title="Deal details" buttonText="Edit deal" buttonIcon="icon-pen"/>
                    </div>
                    <FormComponent edit={edit} data={data} page={page}/>
                    <div className="deal-details__header">
                        <BlockHeader title="Sales Summary"/>
                    </div>
                    <div className="total-container">
                        <div className="total-block">
                            <p className="total-block__title m-0">Total sales</p>
                            <h2 className="total-block__count m-0">30</h2>
                        </div>
                        <div className="total-block">
                            <p className="total-block__title m-0">Total revenue</p>
                            <h2 className="total-block__count m-0">$15,000</h2>
                        </div>

                        <div className="total-block">
                            <p className="total-block__title m-0">Invites Sent</p>
                            <h2 className="total-block__count m-0">2,400</h2>
                        </div>
                        <div className="total-block">
                            <p className="total-block__title m-0">Views</p>
                            <h2 className="total-block__count m-0">5,043</h2>
                        </div>
                    </div>
                </section>
                <section className="table-block col-md-6 p-0 d-flex flex-column">
                    <div className="deal-details__header">
                        <BlockHeader title="Customers that purchased this deal"/>
                    </div>
                    <div className="flex-grow-1 deal-table-container h-100">
                        <Table responsive className='deal-table border-0 m-0'>
                            <thead>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="align-middle text-truncate ">07/08/2020 05:20 PM</td>
                                <td className="align-middle ">
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
                                             {'Steve Rogers'}
                                         </span>
                                    </a></td>
                                <td className="align-middle text-truncate">+1 800 1234 567</td>
                                <td className="align-middle text-truncate">sample@sample.com</td>
                            </tr>
                            <tr>
                                <td className="align-middle text-truncate">07/08/2020 05:20 PM</td>
                                <td className="align-middle ">
                                    <a href=""
                                       className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                        <figure
                                            className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                            {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                            {/*alt="user pic"*/}
                                            {/*/>*/}
                                            <i className="icon-user"/>
                                        </figure>
                                        <span className="user__name text-truncate">
                                             {'Steve Rogers'}
                                         </span>
                                    </a></td>
                                <td className="align-middle text-truncate">+1 800 1234 567</td>
                                <td className="align-middle text-truncate">sample@sample.com</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="deal-details__footer d-flex justify-content-end">
                        <PaginationCustom/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DealDetails