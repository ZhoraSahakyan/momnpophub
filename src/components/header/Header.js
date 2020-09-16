import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import './Header.css';
import Logo from '../../assets/images/logo/momnpophub-logo.svg';
import DefaultImage from '../../assets/images/default.png';

const Header = () => {
    return (
        <Navbar className="header-menu col-xl-11 mx-auto d-flex align-content-center justify-content-between" expand="xl">
            <Navbar.Brand href="#home">
                <img src={Logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="header-menu__item d-flex align-items-center p-0 active">About Us</Nav.Link>
                    <Nav.Link href="#link"  className="header-menu__item d-flex align-items-center p-0">Add Your Business & Deals For <span className="ml-2"> FREE</span></Nav.Link>
                    <Nav.Link href="#link"  className="header-menu__item d-flex align-items-center p-0">Customer & Business App</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <NavDropdown id="basic-nav-dropdown"  className="header-menu__item"
                         title={
                             <div className="d-flex align-items-center menu-user">
                                         <span className="menu-user__name">
                                             {'Joe Flowers'}
                                         </span>
                                 <figure className="rounded-circle overflow-hidden m-0 menu-user__image bg-white">
                                     <img className="thumbnail-image img-fluid w-100 h-100"
                                          src={DefaultImage}
                                          alt="user pic"
                                     />
                                 </figure>
                             </div>
                         } >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
};

export default Header;
