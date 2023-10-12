import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import img_presentation from '../../images/motif/motif_8.jpg'

const Ciclica = () => {
    return (
        <Row className='ciclica bg-secondary m-0'>
            <Container>
                <Row className='d-flex flex-column flex-md-row py-5 m-0'>
                    <Col className='imgbox d-flex align-items-end align-items-md-center p-0 mr-md-5 pb-lg-0 mr-lg-5'>                  
                        <Image
                            src={img_presentation}
                        />
                    </Col>
                    <Col className='d-flex flex-column align-items-lg-baseline justify-content-lg-end mt-5 mt-md-0 p-0'>
                        <TitleDeco text={'Conócete'}></TitleDeco>
                        <h2 className="subtitle-text text-uppercase botton-line d-inline-block pb-2 mb-4">Etapa Cíclica</h2>
                        <p className="main-text m-0">
                            La propuesta al estudio y reflexión sobre tu ser cíclica está contextualizada en una cultura y sociedad que aún a día de hoy considera un tabú el hablar abiertamente y sin sexismo sobre ovulación, menstruación, fertilidad natural, salud ginecológica.
                        </p>
                        <p className="main-text mt-3 m-0">
                            ¡Bienvenida a la re(vuelta) a tu propio cuerpo cíclico y a la revuelta cultural de la educación menstrual!
                        </p>    
                        <Button 
                            variant='primary' 
                            type='submit' 
                            href='http://cursovirtual.espaciomatriz.com/' 
                            target="_blank"
                            className='main-text rounded-0 text-uppercase mt-3'
                        >
                            Curso Virtual
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Ciclica
