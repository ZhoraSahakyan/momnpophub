import React from 'react';

import manImg from '../../assets/images/man.png';
import {Button} from "react-bootstrap";
import './Home.css';

const Home = () => {
	return (
		<div className="col-xl-9 mx-auto">
			<div className="row">
				<div className="col-xl-12  mb-4">
					<div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
						<img src={manImg} alt="man" style={{position: "absolute", right: "0"}}/>

						<div className="col-xl-9 aboutus-container">
							<h1 className="aboutus-container__title text-white">WE ADVERTISE YOUR SMALL BUSINESS & DEALS
								FOR FREE</h1>

							<Button className="mt-4 w-25 p-3 aboutus-container__button">
								<span className="aboutus-container__button-text text-white">
                                    Signup for FREE
								</span>
							</Button>
						</div>
					</div>
				</div>

				<div className="col-xl-12 bg-danger" style={{marginTop: "397px"}}>
                    dsa
				</div>
			</div>
		</div>
	);
};

export default Home;
