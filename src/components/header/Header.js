import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import './Header.css';
import Logo from '../../assets/images/logo/momnpophub-logo.svg';
import DefaultImage from '../../assets/images/default.png';

import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    list: {
        width: 350,
    },
    fullList: {
        width: 'auto',
    },
});

const Header = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({right: false});
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const listItems = ['Action', 'Another action', 'Something', 'Separated link'].map((actionName, index) =>
        <React.Fragment key={index + actionName}>
            <Divider/>
            <ListItem button className={classes.nested}>
                {actionName}
            </ListItem>
        </React.Fragment>
    );

    const navigationLinks = ['About Us', 'Add Your Business & Deals For FREE', 'Customer & Business App'].map((link, index) =>
        <React.Fragment key={index + link}>
            <Divider/>
            <ListItem button className="justify-content-center">
                {link}
            </ListItem>
        </React.Fragment>
    );

    const list = () => (
        <div role="presentation">
            <List>
                <ListItem button onClick={handleClick} className="justify-content-center">
                    <div className="d-flex align-items-center menu-user">
                                         <span className="menu-user__name text-dark">
                                             {'Joe Flowers'}
                                         </span>
                        <figure className="rounded-circle overflow-hidden m-0 menu-user__image bg-white">
                            <img className="thumbnail-image img-fluid w-100 h-100"
                                 src={DefaultImage}
                                 alt="user pic"
                            />
                        </figure>
                    </div>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {listItems}
                    </List>
                </Collapse>

                {navigationLinks}
            </List>
        </div>
    );

    return (
        <div className="logout-header">
            <React.Fragment>
                <Navbar className="header-menu col-xl-11 mx-auto d-flex align-content-center justify-content-between"
                        expand="xl">
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"
                                   onClick={toggleDrawer('right', true)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="header-menu__item d-flex align-items-center p-0 active">About
                                Us</Nav.Link>
                            <Nav.Link href="#link" className="header-menu__item d-flex align-items-center p-0">Add Your
                                Business & Deals For <span className="ml-2"> FREE</span></Nav.Link>
                            <Nav.Link href="#link" className="header-menu__item d-flex align-items-center p-0">Customer
                                &
                                Business App</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <NavDropdown id="basic-nav-dropdown" className="header-menu__item header-dropdown"
                                 title={
                                     <div className="d-flex align-items-center menu-user">
                                         <span className="menu-user__name">
                                             {'Joe Flowers'}
                                         </span>
                                         <figure
                                             className="rounded-circle overflow-hidden m-0 menu-user__image bg-white">
                                             <img className="thumbnail-image img-fluid w-100 h-100"
                                                  src={DefaultImage}
                                                  alt="user pic"
                                             />
                                         </figure>
                                     </div>
                                 }>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                </Navbar>

                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >

                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    )
};

export default Header;
