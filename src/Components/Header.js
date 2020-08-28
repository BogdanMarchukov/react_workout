import React, { Component } from 'react';
import { Container, Navbar, Nav, Col } from 'react-bootstrap';
import './Header.css';
import HeaderSearch from '../Components/HeaderSearch';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="white" variant="dark">
                    <Container>
                        <Col className="col-4">
                            <Navbar.Brand href="/" className="text-dark logo-text "> Your Logo </Navbar.Brand>
                        </Col>
                        <Navbar.Toggle className="bg-info" aria-controls="responsive-navbar-nav" />
                        <Col className="col-8">
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="d-flex justify-content-around flex-fill align-items-center">
                                    <Nav.Link className="link-text" href="/">Home</Nav.Link>
                                    <Nav.Link className="link-text" href="/">About</Nav.Link>
                                    <Nav.Link className="link-text" href="/">Servicing</Nav.Link>
                                    <Nav.Link className="link-text" href="/">Portfolio</Nav.Link>
                                    <Nav.Link className="link-text" href="/">Blog</Nav.Link>
                                    <Nav.Link className="link-text" href="/">Contact us</Nav.Link>
                                    <HeaderSearch/>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
