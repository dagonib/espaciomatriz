import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/offer/introduction.styles.scss'

const Introduction = () => {
    return (
        <Row className='introduction py-5 mx-0'>
            <Container className='d-flex flex-column-reverse flex-md-row'>
                <Col className='introduction_textbox align-self-md-end flex-end bg-info text-white mr-md-3 px-3 py-5 p-sm-5'>
                    <Row className='d-flex mb-4 m-0'>
                        <Col className='botton-line-white d-flex flex-fill p-0' style={{ width: '0%' }}>
                            <TitleDeco className='text-center' text={'Adiós incomprensión'}></TitleDeco> 
                        </Col>
                    </Row>
                    <p className="main-text text-white m-0">Te acompaño para que puedas reconocer en tu propio cuerpo las cuatro grandes fases del ciclo menstrual, sus diferencias, sus cambios, sus potencialidades.
                    Te ofrezco recursos y eventos que puedan aportar bienestar físico, mental y espiritual al comprenderte. Si eres de las que ya transitan el climaterio y menopausia, bienvenida a tu “Segunda primavera”, vamos juntas a hacer el viaje hacia la madurez saludable y gozosa.
                    </p>
                </Col>
                <Col className='imgbox text-white ml-md-3 px-0'>
                </Col>
            </Container>
        </Row>
    )
}



export default Introduction
