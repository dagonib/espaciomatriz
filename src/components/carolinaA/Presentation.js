import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'
import img_presentation from '../../images/motif/motif_6.jpg'

const Presentation = () => {
    return (
        <Row className='presentation bg-info py-5 mx-0'>
            <Container className='d-flex flex-column-reverse flex-md-row'>
                <Col className='align-self-md-end flex-end text-white mt-5 mt-md-0 mr-md-3 px-0'>
                    <TitleDeco text={'Carolina Ackermann'}></TitleDeco>
                    <h1 className="subtitle-text text-uppercase botton-line-white d-inline-block pb-2 mb-4">Sobre mí</h1>
                    <p className="main-text text-white m-0">Soy mujer, nacida en Uruguay en 1972, en matrimonio desde los 19 años, madre de dos hijas. Desde el año 2001 vivo en Castelldefels, Barcelona, España. Tras un accidente laboral en 2013 que derivó en dos operaciones de columna, me sobrevino el dolor crónico. Debí abandonar mi profesión como jardinera para pasar a cultivar el autoconocimiento de mi propio cuerpo-jardín.</p>
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

export default Presentation
