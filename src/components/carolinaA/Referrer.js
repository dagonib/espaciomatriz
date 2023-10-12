import React from 'react'
import { Container, Row, Image, Card, CardGroup } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/carolina-a/referrer.styles.scss'

import img_yayoherrero from '../../images/referentes/yayo.herrero.jpg'
import img_carmevalls from '../../images/referentes/carme.valls.jpg'
import img_coralherrera from '../../images/referentes/coral.herrera.jpg'
import img_enriquetabarranco from '../../images/referentes/enriqueta.barranco.jpg'
import img_lorena from '../../images/referentes/lorena.jpg' 
import img_marinagarces from '../../images/referentes/marina.garces.jpg'
import img_pastorafiligrana from '../../images/referentes/pastora.filigrana.jpg'
import img_giocondabelli from '../../images/referentes/gioconda.belli.jpg'

const Referrer = () => {
    return (
        <Row className='referrer bg-secondary py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column align-items-center mb-4 m-0'>
                    <TitleDeco className='text-center' text={'Mis referentes'}></TitleDeco>
                    <p className='main-text mt-2'>Te presento a algunas de mis referentes, mujeres inteligentes y sabias que estimulan mi pensamiento crítico.</p>
                </Row>
                <CardGroup xs={2} md={4} className='referrer-content m-0'>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_yayoherrero}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Yayo Herrero</p>
                            <p className='referrer-topic m-0'>Ecofeminista</p>
                            <p className='referrer-desc m-0 font-italic'>Economía y cuidados de la vida</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_giocondabelli}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Gioconda Belli</p>
                            <p className='referrer-topic m-0'>Poeta y novelista nicaragüense</p>
                            <p className='referrer-desc m-0 font-italic'>Seducción e inspiración femenina y feminista</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_carmevalls}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Carme Valls-Llobet</p>
                            <p className='referrer-topic m-0'>Dra. endocrinóloga</p>
                            <p className='referrer-desc m-0 font-italic'>La ciencia de la diferencia</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_coralherrera}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Coral Herrera</p>
                            <p className='referrer-topic m-0'>Comunicadora</p>
                            <p className='referrer-desc m-0 font-italic'>Desmontando el amor romántico</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_enriquetabarranco}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Enriqueta Barranco Castillo</p>
                            <p className='referrer-topic m-0'>Profesora e investigadora</p>
                            <p className='referrer-desc m-0 font-italic'>Salud sexual y reproductiva.</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_lorena}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Lorena Cabdal</p>
                            <p className='referrer-topic m-0'>Sanadora ancestral</p>
                            <p className='referrer-desc m-0 font-italic'>Feminismo comunitario territorial</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_marinagarces}
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Marina Garcés</p>
                            <p className='referrer-topic m-0'>Filósofa</p>
                            <p className='referrer-desc m-0 font-italic'>Lo común, análisis de la realidad</p>
                        </Row>
                    </Card>
                    <Card className='referrer-item imgbox p-0'>
                        <Image 
                            src={img_pastorafiligrana}
                            className='referrer-img'
                        />
                        <Row className='referrer-textbox d-flex flex-column w-100 p-3 mx-0'>
                            <p className='referrer-name text-center text-uppercase font-weight-bold mb-2 m-0'>Pastora Filigrana</p>
                            <p className='referrer-topic m-0'>Abogada</p>
                            <p className='referrer-desc m-0 font-italic'>Anticapitalismo y anticolonialismo</p>
                        </Row>
                    </Card>
                </CardGroup>
            </Container>
        </Row>
    )
}

export default Referrer
