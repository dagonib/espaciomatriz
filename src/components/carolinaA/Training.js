import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import logo_anthemon from '../../images/training/anthemon.png'
import logo_casaluna from '../../images/training/casaluna.png'
import logo_cooperacio from '../../images/training/cooperacio.png'
import logo_gremi from '../../images/training/gremi.png'
import logo_hsk from '../../images/training/hsk.png'

const Training = () => {
    return (
        <div className='training bg-secondary py-5 mx-0'>
            <Container>
                <Row className='d-flex justify-content-center mb-2 m-0'>
                    <TitleDeco className='text-center' text={'Formación'}></TitleDeco>
                </Row>
                <Row xs={2} md={3} className='d-flex flex-column flex-sm-row align-items-center justify-content-sm-center'>
                    
                    <Col className='logo_box d-flex flex-column justify-content-center align-items-center p-3'> 
                        <Image 
                            className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                            style={{ width: "260px" }}
                            src={logo_gremi}
                        />
                        <p className="main-text text-center mt-2 m-0">Herbodietética</p>
                    </Col>

                    <Col className='logo_box d-flex flex-column justify-content-center align-items-center p-3'> 
                        <Image
                            className='img_logo mt-3 mt-sm-0 my-2 my-sm-0 mx-sm-3'
                            src={logo_hsk}
                        />
                        <p className="main-text text-center mt-2 m-0">Curso introductorio a la Medicina Tradicional China y el Ciclo Menstrual</p>
                    </Col>
                    <Col className='logo_box d-flex flex-column justify-content-center align-items-center p-3'> 
                        <Image 
                            className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                            src={logo_cooperacio}
                        />
                        <p className="main-text text-center mt-2 m-0">Escola Popular d'Econonmia Feminista</p>
                    </Col>
                    
                    <Col className='logo_box d-flex flex-column justify-content-center align-items-center p-3'> 
                        <Image 
                            className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                            src={logo_anthemon}
                        />
                        <p className="main-text text-center mt-2 m-0">Viaje a la Mujer Consciente</p>
                    </Col>
                    
                    <Col className='logo_box d-flex flex-column justify-content-center align-items-center p-3'> 
                        <Image 
                            className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                            style={{ width: "240px" }}
                            src={logo_casaluna}
                        />
                        <p className="main-text text-center mt-2 m-0">Terapeuta Menstrual</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Training
