import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import logo_acm from '../../images/logos/acm.png'

const Association = () => {
    return (
        <Col className='association text-white p-5 m-0 p-0'>
               <Row className='d-flex flex-column text-center align-items-center mb-4 m-0 p-0'>
                    <Image
                        className='img_logo mt-3 mt-sm-0 my-2 my-sm-0 mx-sm-3'
                        style={{ width: '200px'}}
                        src={logo_acm}
                    />
               </Row>
               <Row className='d-flex flex-column align-items-center m-0 p-0'>
                    <h2 className="subtitle-text text-uppercase text-center d-inline-block botton-line-white pb-2 mb-4">Asociación de Cultura Menstrual</h2>
                    <p className='main-text text-white mb-0 m-0 p-0'>Mi proyecto se suma al movimiento histórico contemporáneo por una nueva cultura menstrual y cultura del climaterio integral, inclusiva, sostenible y feminista. Con este fin, en el año 2021 junto a Ma. Victoria López Benito y Ana Luisa Meza, fundamos la primera Asociación de Cultura menstrual en Cataluña, “La vida en Rojo”.</p>
                    <p className='main-text text-white mb-0 m-0 p-0'>Desde la asociación creamos material divulgativo sobre salud y educación menstrual. Convocamos y participamos de activismos y campañas por la dignidad menstrual. Coordinamos proyectos de investigación y tejemos redes entre profesionales dedicadas a la cultural menstrual, tanto en el ámbito estatal, como en el Latinoamericano. La Asociación cuenta con un evento anual: Los “Encuentros de Cultura Menstrual” (EnCuMe).</p>
                    <Button 
                        variant='primary' 
                        type='submit' 
                        className='main-text rounded-0 text-uppercase mt-3'
                        href='http://www.lavidaenrojo.org/' 
                        target="_blank"
                    >
                        Visitar
                    </Button>   
               </Row>
        </Col>
    )
}

export default Association
