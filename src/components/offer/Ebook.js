import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

const Ebook = () => {
    return (
        <Row className='ebook bg-info py-5 px-3 mx-0'>
            <Container className='p-0'>
                <Row className='d-flex flex-column flex-sm-row align-items-start align-items-sm-end text-white px-3'>
                    <Col className='p-0'>
                        <TitleDeco text={'Ebook ¿Qué dice tu vulva?'}></TitleDeco>
                        <p className='main-text text-white mb-0'>Me apetece mucho compartirte de manera gratuita, el Ebook que he creado: “¿Qué dice tu vulva?”. Un material divulgativo con información positiva sobre la vulva. "Te invito a mirar lo que nos han enseñado a tapar". ¡Que vivan tu vulva y la mía!</p>
                        <p className='main-text text-white mb-0 mt-2'>Solicita tu ebook gratuito al email: </p>
                        <p className='main-text main-text-sm text-white mb-0 mt-0'>carolina.culturamenstrual@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Ebook
