import React from 'react'
import { Container, Row, Col, Nav, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import logo_mys from '../../images/logos/mys.png'
import logo_onada from '../../images/logos/onada-feminista.png'
import logo_radiostboi from '../../images/logos/radio-sant-boi.png'
import logo_radio4 from '../../images/logos/radio4.png'
import logo_vilaweb from '../../images/logos/vilaweb.png'
import logo_directa from '../../images/logos/directa.png'
import logo_diario16 from '../../images/logos/diario16.png'

const Media = () => {
    return (
        <div className='media bg-secondary py-5 mx-0'>
            <Container fluid>
                <Row className='d-flex mb-4 m-0'>
                    <Col xs="auto" className='d-flex flex-fill justify-content-center text-center p-0' style={{ width: '0%' }}>
                        <TitleDeco className='text-center' text={'Mi presencia en los medios'}></TitleDeco> 
                    </Col>
                </Row>
                <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-sm-center'>
                    {/**MyS */}
                    <Nav.Link 
                            sm={4}
                            href='https://matriz.net/mys4849/img/mys49-especial-covid.pdf' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                        >
                        <Image
                            className='img_logo'
                            src={logo_mys}
                        />
                    </Nav.Link>
                    {/**Onada Feminista */}
                    <Nav.Link 
                            sm={4}
                            href='https://www.onadafeminista.cat/mujer-sin-reglas-una-agenda-especifica-per-al-registre-de-la-menopausa/' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                        >
                        <Image 
                            className='img_logo'
                            src={logo_onada}
                        />
                    </Nav.Link>
                    {/**Radio Sant Boi*/}
                    <Nav.Link 
                            sm={4}
                            href='https://www.ivoox.com/espai-ciencia-dimecres-30-juny-audios-mp3_rf_72166584_1.html' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                    >
                        <Image 
                            className='img_logo'
                            src={logo_radiostboi}
                        />
                    </Nav.Link>
                    {/**Radio 4*/}
                    <Nav.Link 
                            sm={4}
                            href='' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                    >
                        <Image 
                            className='img_logo'
                            src={logo_radio4}
                        />
                    </Nav.Link>      
                    {/**Vilaweb*/}
                    <Nav.Link 
                            sm={4}
                            href='https://www.vilaweb.cat/noticies/per-que-el-confinament-pot-haver-alterat-el-cicle-menstrual/' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                    >
                        <Image 
                            className='img_logo'
                            src={logo_vilaweb}
                        />
                    </Nav.Link>
                    {/**LaDirecta*/}
                    <Nav.Link 
                            sm={4}
                            href='https://directa.cat/visibilitzar-el-climateri/' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                    >
                        <Image 
                            className='img_logo'
                            src={logo_directa}
                        />
                    </Nav.Link>
                    {/**Diario 16*/}
                    <Nav.Link 
                            sm={4}
                            href='https://diario16.com/estudio-sobre-atencion-sanitaria-en-menopausia-y-climaterio/?fbclid=IwAR0I0H1e1CNePQD2MNQlPQkBZwk0a2es5LhlkWojS8nKIHiO6Dj3FsUBrkE' 
                            target="_blank"
                            className='w-auto py-3 px-3 p-0'
                    >
                        <Image 
                            className='img_logo'
                            src={logo_diario16}
                        />
                    </Nav.Link>
                </Row>
            </Container>
        </div>
    )
}

export default Media
