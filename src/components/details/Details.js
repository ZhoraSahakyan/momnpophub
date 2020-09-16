import React from 'react';
import {Table} from 'react-bootstrap';
import PaginationCustom from '../../components/pagination';
import BlockHeader from '../../components/block-header'

import './Details.css';


const Details = () => {
    return (
        <div className=" d-flex flex-column h-100">
            <div className="flex-grow-1  d-flex flex-column">
                <BlockHeader title="Deals" buttonText="+ Create new deal"/>
                <div className="table-container flex-grow-1">
                    <Table className='details-table border-0 m-0'>
                        <thead>
                        <tr>
                            <th className="align-middle border-0">Deal name</th>
                            <th className="align-middle border-0">Sales</th>
                            <th className="align-middle border-0">Start Date</th>
                            <th className="align-middle border-0">End Date</th>
                            <th className="align-middle border-0">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="align-middle bold-text">Friday - $30.00</td>
                            <td className="align-middle bold-text">924</td>
                            <td className="align-middle bold-text">6/24/2020</td>
                            <td className="align-middle bold-text">12/24/2020</td>

                            <td className="align-middle">
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
                        <tr>
                            <td className="align-middle bold-text">Friday - $30.00</td>
                            <td className="align-middle bold-text">924</td>
                            <td className="align-middle bold-text">6/24/2020</td>
                            <td className="align-middle bold-text">12/24/2020</td>

                            <td className="align-middle">
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
            <footer className="d-flex flex-wrap justify-content-end align-items-center  table-container__footer">
                <PaginationCustom/>
            </footer>
        </div>
    )
};

export default Details;
