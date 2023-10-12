import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import img_presentation from '../../images/motif/motif_11.jpg'

const Wetalk = () => {
    return (
        <Row className='wetalk bg-secondary m-0'>
            <Container fluid>
                <Row className='d-flex flex-column flex-md-row-reverse py-5 m-0'>
                    <Col className='imgbox d-flex align-self-end p-0 ml-md-5 pb-lg-0 ml-lg-5'>                  
                        <Image
                            src={img_presentation}
                        />
                    </Col>
                    <Col className='d-flex flex-column align-items-baseline justify-content-end mt-5 mt-md-0 p-0'>
                        <TitleDeco text={'¿Necesitas información?'}></TitleDeco>
                        <h2 className="subtitle-text main-text text-uppercase botton-line d-inline-block pb-2 mb-4">Hablemos</h2>
                        <p className="main-text font-italic font-weight-bold m-0">
                            Si eres una persona cíclica o transitando el climaterio...
                        </p>
                        <p className="main-text mt-3 m-0">
                            Te invito a enviarme un email para solicitar cualquier información que necesites. Por ejemplo, ¿dudas de si ponerle la vacuna contra el VPH a tu hija?, ¿quieres ritualizar la llegada de tu menopausia?, ¿buscas información sobre algún regulador hormonal natural?.
                        </p>
                        <p className="main-text mt-3 m-0">
                            Soy investigadora, divulgadora y tallerista. Nada me apasiona más que poder ofrecerte información o recursos que yo tenga a disposición para ti, para nosotras.
                        </p>   
                        
                        <p className="main-text font-italic font-weight-bold mt-3 m-0">
                            Si eres una entidad, medio de comunicación, proyecto sociocultural...
                        </p> 
                        <p className="main-text mt-3 m-0">
                            Soy fundadora de la Asociación de Cultura menstrual "La Vida en Rojo", tanto desde mi proyecto Espacio Matriz, como desde la Asociación, estoy y estamos a entera disposición y escucha de cualquier propuesta relacionada con la salud, la equidad y la educación cíclica y climatérica.
                        </p>   
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Wetalk
