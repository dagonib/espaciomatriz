import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Iconos
import { FaWeixin, FaAt, FaTelegram, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

import '../../styles/screens/homescreen/subscribe-form.styles.scss'

const ContactData = () => {
    return (
        <Row className="subscribe bg-info py-5 m-0">
            <Container className='d-flex flex-column align-items-center'>
                <Row className='d-flex flex-column flex-md-row align-items-center text-white mb-4 m-0'>
                    <FaAt className='icon' /> 
                    <p className='main-text text-white ml-2 m-0'>
                        carolina.culturamenstrual@gmail.com
                    </p>
                </Row>
                <Row className='d-flex flex-column flex-md-row align-items-center text-white mb-4 m-0'>
                    <FaPhoneSquareAlt className='icon' /> 
                    <p className='main-text text-white ml-2 m-0'>
                        640 10 61 30
                    </p>
                </Row>
                <Row className='d-flex flex-column flex-md-row align-items-center text-white mb-4 m-0'>
                    <FaWeixin className='icon' /> 
                    <p className='main-text text-white ml-2 m-0'>
                        @espaciomatriz / @mujersinreglas
                    </p>
                </Row>
                <Row className='d-flex flex-column flex-md-row align-items-center text-white mb-4 m-0'>
                    <FaTelegram className='icon' /> 
                    <Col className='d-flex flex-column flex-sm-row m-o p-0'>
                        <p className='main-text text-white ml-2 m-0'>
                            Mujeres en climaterio: 
                        </p>
                        <p className='main-text text-white ml-2 m-0'>
                            t.me/mujersinreglas
                        </p>
                    </Col>
                </Row>
                <Row className='d-flex flex-column flex-md-row align-items-center text-white mb-4 m-0'>
                    <FaMapMarkerAlt className='icon' /> 
                    <p className='main-text text-white ml-2 m-0'>
                        Castelldefels, Barcelona, España
                    </p>
                </Row>
            </Container>
        </Row>
    )
}

export default ContactData
