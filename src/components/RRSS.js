import React from 'react'
import { Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

import '../styles/components/rrss.styles.scss'

// Iconos
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const RRSS = ({size, align}) => {
    return (
        <Row className={align}>
            <Nav.Link 
                href='https://www.facebook.com/culturamenstrual' 
                target="_blank"
                className='p-0 mr-2'
            >
                <FaFacebook size={size} />
            </Nav.Link>
            <Nav.Link 
                href='https://www.instagram.com/espaciomatriz/' 
                target="_blank"
                className='p-0 mr-2'
            >
                <FaInstagramSquare size={size} />
            </Nav.Link>
            <Nav.Link 
                href='https://t.me/mujersinreglas' 
                target="_blank"
                className='p-0 mr-2'
            >
                <FaTelegram size={size} />
            </Nav.Link>       
        </Row>
    )
}

export default RRSS