import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'
import img_presentation from '../../images/motif/motif_5.jpg'

const Purpose = () => {
    return (
        <Row className='purpose bg-info py-5 mx-0'>
            <Container className='d-flex flex-column-reverse flex-md-row align-items-end'>
                <Col className='align-self-md-end flex-end text-white mr-md-3 mt-5 mt-md-0 px-0'>
                    <TitleDeco text={'Dispersando semillas de conocimientos'}></TitleDeco>
                    <h2 className="subtitle-text text-uppercase botton-line-white d-inline-block pb-2 mb-4">El Proyecto</h2>
                    <p className="main-text text-white m-0">Mi trabajo, propósito y misión desde el proyecto de Espacio Matriz se centra en divulgar información sin sesgos sexistas ni tabúes sobre el proceso fisiológico de menstruar o dejar de hacerlo cuando llega la menopausia, con el fin de remover de nuestra cultura occidental los miedos, estereotipos y creencias limitantes sobre la experiencia cíclica y la experiencia climatérica.</p>
                </Col>
                <Col className='imgbox text-white ml-md-3 px-0'>
                    <Image
                        src={img_presentation}
                    >

                    </Image>
                </Col>
            </Container>
        </Row>
    )
}

export default Purpose
