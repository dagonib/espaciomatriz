import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'

const Copyright = () => {
    return (
        <Container className="bg-dark mw-100 text-white p-0 m-0">
            <Row className="d-flex align-items-center justify-content-center bg-success py-3 p-0 m-0">
                <p className='m-0 p-0'>@ESPACIOMATRIZ.2021 | Todos los derechos reservados | </p>
                <LinkContainer to='/politicaprivacidad' className='d-flex align-items-center pt-1 p-0 m-0'>
                    <Nav.Link className='navegation-text ml-1 p-0 m-0'>Privacy Policy</Nav.Link>
                </LinkContainer>
            </Row>
        </Container>
    )
}

export default Copyright
