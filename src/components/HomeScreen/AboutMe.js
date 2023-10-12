import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/homescreen/about-me.styles.scss'

const AboutMe = () => {
    return (
        <div className='about-me bg-secondary m-0'>
            <Container>
                <Row className='d-flex flex-column flex-md-row py-5 m-0'>
                    <Col className='aboutme-box-image d-flex align-items-end p-0 ml-md-5 pb-lg-0 ml-lg-5' md={{ order: 'last'}}>                  
                        <div className='d-flex flex-column w-100 w-md-50'>
                            <p className='main-text bg-info text-white font-weight-bold text-uppercase p-3'>divulgar</p>
                            <p className='main-text bg-info text-white font-weight-bold text-uppercase p-3'>coordinar</p>
                            <p className='main-text bg-info text-white font-weight-bold text-uppercase p-3'>investigar</p>
                            <p className='main-text bg-info text-white font-weight-bold text-uppercase p-3'>crear</p>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column align-items-baseline justify-content-end mt-5 mt-md-0 p-0' md={{ order: 'first'}}>
                        <TitleDeco text={'Espacio Matriz'}></TitleDeco>
                        <h2 className="subtitle-text text-uppercase botton-line d-inline-block pb-2 mb-4">Ejes de acción</h2>
                        <p className="main-text text-justify font-weight-bold m-0">
                            Divulgar
                        </p>
                        <p className="main-text mt-1 m-0">
                            Información integral sobre el ciclo menstrual, el climaterio, la anatomía genital, menstruación sostenible y ginecología autogestiva.
                        </p>  
                        <p className="main-text font-weight-bold mt-3 m-0">
                            Coordinar
                        </p>
                        <p className="main-text mt-1 m-0">
                            Eventos, charlas, talleres, encuentros entre mujeres activistas, feministas, divulgadoras.
                        </p>    
                        <p className="main-text font-weight-bold mt-3 m-0">
                            Investigar
                        </p>
                        <p className="main-text mt-1 m-0">
                            Generar alianzas para investigar sobre los diversos aspectos para que tenga lugar el ciclo menstrual o el climaterio de manera saludable.
                        </p>  
                        <p className="main-text font-weight-bold mt-3 m-0">
                            Crear
                        </p>
                        <p className="main-text mt-1 m-0">
                            Textos, artículos y material educativo para las redes, medios de comunicación, mi comunidad o la Asociación La Vida en Rojo.
                        </p>    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
