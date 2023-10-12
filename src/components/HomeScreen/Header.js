import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/homescreen/header.styles.scss'
import img_1 from '../../images/motif/motif_3.jpg'

const Header = () => {
    return (
        <Row className='header-backgound-image d-flex justify-content-center p-3 m-0'>
            <Container className='header-secondary-background-image position-relative d-flex align-items-center m-0 p-0'>
                <Col xs={12} sm={10} md={6} lg={4} className='header-text-box bg-info text-white p-4 p-sm-5'>  
                    <TitleDeco text={'Ponte cómoda, vas a conocerte'}></TitleDeco>  
                    <h2 className="subtitle-text text-uppercase botton-line-white d-inline-block pb-2 mb-4">Te doy la llave</h2>
                    <p className="main-text text-white m-0">
                    La información es la llave de la autonomía personal para la salud y el bienestar que buscamos.
                    </p>
                    <p className="main-text text-white m-0">
                    Te doy la llave para que abras todas tus puertas a vivirte en gozo y plenitud. 
                    </p>
                    <p className="main-text text-white m-0">
                    En ti está toda la medicina que necesitas.
                    </p>
                    <p className="main-text text-white m-0">
                    Bienvenida.
                    </p>             
                </Col>

                <Col className='header-decorative-image-box d-none d-md-flex justify-content-end p-0' sm={4} md={6} lg={8}>   
                    <Image 
                        className='header-decorative-image'
                        src={img_1}
                    />
                </Col>  
            </Container>
        </Row> 
    )
}

export default Header