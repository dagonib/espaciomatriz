import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import RRSS from './RRSS'
import { useLocation } from 'react-router'
import logo from '../images/logo-lg.png'

import '../styles/components/navigation.styles.scss'

const Navigation = () => {
    const location = useLocation()

    return (
        <Navbar expand="md" bg="dark" variant="dark" collapseOnSelect>
            <Container className='mb-3 mb-md-0'>
                {/*<!-- Navbar: Brand -->*/}
                <LinkContainer to='/inicio' activeClassName='no-class'>
                    <Navbar.Brand className="d-md-none">
                        <Image 
                            fluid
                            className="d-inline-block"
                            alt="logo"
                            src={logo}
                            width="150px"
                        />
                    </Navbar.Brand>
                </LinkContainer>

                {/*<!-- Navbar: Toggler -->*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler border-0"/>

                {/*<!-- Navbar: Collapse -->*/}
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/*<!-- Navbar: Navigation Left -->*/} 
                    <Nav className="mr-auto" activeKey={location.pathname} defaultActiveKey='/'>
                        <LinkContainer to='/inicio' className='mt-3 mt-md-0'>
                            <Nav.Link className='navegation-text'>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/el-proyecto' className='mt-3 mt-md-0'>
                            <Nav.Link className='navegation-text'>El Proyecto</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/ofrezco' className='d-none mt-3 mt-md-0'>
                            <Nav.Link className='navegation-text'>Ofrezco</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/*<!-- Navbar: Brand-->*/} 
                    <LinkContainer to='/inicio' activeClassName='no-class'>
                        <Navbar.Brand className="d-none d-md-flex">
                            <Image 
                                fluid
                                className="d-inline-block"
                                alt="logo"
                                src={logo}
                                width="150px"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    {/*<!-- Navbar: Navigation Left -->*/} 
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <LinkContainer to='/carolina' className='mt-3 mt-md-0'>
                            <Nav.Link className='navegation-text' >Carolina A.</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/hablamos' className='mt-3 mt-md-0'>
                            <Nav.Link className='navegation-text'>Hablemos</Nav.Link>
                        </LinkContainer>
                        <RRSS align='d-flex justify-content-left align-items-center m-0 pl-md-2 mt-3 mt-md-0' size='17'/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation