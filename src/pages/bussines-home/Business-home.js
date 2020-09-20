import React from 'react';
import Details from '../../components/details';
import BankInformation from '../../components/bank-information';
import BusinessProfile from '../../components/business-profile';
import Customers from '../../components/customers/Customers'
import DealDetails from './../../components/details/deal-details'
import './Business-home.css';

const BusinessHome = () => {
    return (
            <div className=" col-xl-11 mx-auto">
                <div className="row">
                    <div className="col-xl-6  mb-4">
                    <Customers />
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

                    {/*<DealDetails/>*/}
                </div>
            </div>
    )
}

export default BusinessHome;