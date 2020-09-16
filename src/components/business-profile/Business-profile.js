import React from 'react';
import BlockHeader from '../../components/block-header'
import {Dropdown} from 'react-bootstrap';
import DefaultImage from '../../assets/images/default.png';
import './Business-profile.css';


const BusinessProfile = () => {
    return (
        <div>
            <BlockHeader title="Business profile" buttonText="Edit profile" buttonIcon="icon-pen"/>
            <div className="business-profile-page col-12">
                <div className="d-flex justify-content-between align-items-start border-bottom py-3 mb-2">
                    <div className="d-flex">
                        <a href="" className="business-profile-image rounded-circle d-block overflow-hidden shadow">
                            <img src={DefaultImage} alt="" className="w-100 h-100 img-fluid"/>
                        </a>
                        <div className="d-flex flex-column">
                            <a href="" className="business-profile-name text-decoration-none">Joe Flowers</a>
                            <a href="" className="business-profile-url text-decoration-none">joe@flowers.com</a>
                        </div>
                    </div>
                    <a href="" className="settings text-decoration-none">Settings</a>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <p className="d-flex"><i className="icon-address-card business-profile-icon"/> Joe Flowers is leading online and offline store that offers
                        various species of flowers</p>
                    <button type="buttn" className="btn bg-transparent border-0 shadow-none p-0">
                        <i className="icon-share-square"/>
                    </button>
                </div>
                <div className="d-flex">
                    <div className="d-flex col-3 px-0">
                        <i className="icon-phone business-profile-icon"/>
                        <a href="tel:+3096843154" className="text-decoration-none tel">3096843154</a>
                    </div>
                    <div className="d-flex col-3">
                        <i className="icon-user business-profile-icon"/>
                        <p>Tarun</p>
                    </div>
                    <div className="col-6 px-0">
                        <a href="" className="text-decoration-none d-flex address">
                            <i className="icon-map-marker-alt business-profile-icon"/>
                            <address>
                                7820 Poplar Ave, Germantown, TN 38138, USA
                            </address>
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <i className="icon-globe  business-profile-icon"/>
                        <a href="business.momnpophub.com" className="orange-link">business.momnpophub.com</a>
                    </div>

                    <Dropdown className="dropdown-container">
                        <Dropdown.Toggle id="dropdown-basic" className="bg-transparent border-0 p-0 shadow-none">
                            <span className="orange-link">& 3 more locations available</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"  className="address d-flex">
                                    <i className="icon-map-marker-alt business-profile-icon"/>
                                    <address className="m-0">
                                        7820 Poplar Ave, Germantown, TN 38138, USA
                                    </address>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2"  className="address d-flex">
                                    <i className="icon-map-marker-alt business-profile-icon"/>
                                    <address className="m-0">
                                        7820 Poplar Ave, Germantown, TN 38138, USA
                                    </address>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className="address d-flex">
                                    <i className="icon-map-marker-alt business-profile-icon"/>
                                    <address className="m-0">
                                        7820 Poplar Ave, Germantown, TN 38138, USA
                                    </address>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
};

export default BusinessProfile;