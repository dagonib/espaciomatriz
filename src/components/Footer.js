import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col, Nav, Image } from 'react-bootstrap'
import TitleDeco from './TitleDeco'
import RRSS from './RRSS'

import img1 from '../images/footer/instagram_1.jpg'
import img2 from '../images/footer/instagram_2.jpg'
import img3 from '../images/footer/instagram_3.jpg'
import img4 from '../images/footer/instagram_4.jpg'
import img5 from '../images/footer/instagram_5.jpg'
import img6 from '../images/footer/instagram_6.jpg'
import img7 from '../images/footer/instagram_7.jpg'

const Footer = () => {

    return (
        <footer className="">
            <Row className="bg-dark m-0 y-5">
                <Container className="py-5 px-4 px-sm-0 text-white">
                    {/** Instagram o carteles */}
                    <Row className='m-0'>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img1}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img2}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img3}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img4}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img5}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img7}
                                width="100%"
                            />
                        </Col>
                    </Row>

                    {/** Información adicional */}
                    <Row className='d-flex align-items-center m-0 mt-5'>
                        {/*<!-- Carolina A. -->*/} 
                        <Col md={4} className="text-center p-0 mb-4">
                            <TitleDeco text={'Carolina Ackermann'}></TitleDeco>
                            <p className="main-text  text-white m-0">Divulgadora y activista por el derecho al conocimiento del propio cuerpo, su funcionamiento y los recursos necesarios para vivir en salud.</p>
                        </Col>
                        {/*<!-- RRSS -->*/} 
                        <Col md={4} className="text-center p-0 mb-4">
                            <TitleDeco text={'Socializa'}></TitleDeco>
                            <RRSS align='d-flex justify-content-center text-white m-0' size='25' />
                        </Col>
                        {/*<!-- Navigation -->*/} 
                        <Col md={4} className="text-center p-0">
                            <TitleDeco text={'Navegación'}></TitleDeco>
                            <Nav className="d-flex flex-column">
                                <LinkContainer to='/inicio'>
                                    <Nav.Link className='main-text p-0'>Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/el-proyecto'>
                                    <Nav.Link className='main-text p-0'>El Proyecto</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/ofrezco' className='d-none'>
                                    <Nav.Link className='main-text p-0'>Ofrezco</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/carolina'>
                                    <Nav.Link className='main-text p-0'>Carolina A.</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/hablamos'>
                                    <Nav.Link className='main-text p-0'>Hablemos</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </footer>
    )
}

export default Footer