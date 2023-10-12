import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Iconos
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import '../../styles/screens/homescreen/notequote.styles.scss'

const NoteQuote = () => { 
    return (
        <Row className='notequote bg-info py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column'>
                    <Col className='d-flex flex-row px-3'>
                        <FaQuoteLeft className='icon-left text-white align-self-start' /> 
                        <p className='main-text text-white font-italic font-weight-light text-center px-4 mb-0'>
                            Seamos nosotras quienes construyamos los relatos sobre cómo habitamos el cuerpo cíclico y cómo queremos que esta experiencia sea vivida con salud y equidad para todas las mujeres y personas que menstrúan.
                        </p>
                        <FaQuoteRight className='icon-right text-white align-self-end ml-auto' /> 
                    </Col>
                    <Col className='mt-4 px-3'>
                        <p className='main-text text_authory text-white text-center mb-0'>
                            Carolina Ackermann, fragmento del discurso inaugural del 1er Encuentro de Cultura Menstrual, Barcelona 2019.
                        </p>
                    </Col>
                    <Col className='d-flex justify-content-center mt-4 px-3'>
                        <Button 
                            variant='primary' 
                            type='submit' 
                            className='main-text rounded-0 text-uppercase ml-3 ml-md-0'
                            href='http://www.encuentroculturamenstrual.es/encume2019' 
                            target="_blank"
                        >
                            Evento
                        </Button>   
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

const iconStyle = {
    fontSize: '4.5rem'
}

export default NoteQuote

