import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

const LiveIn = () => {
    return (
        <Row className='live-in bg-info py-5 mx-0'>
            <Container className='d-flex flex-column'>
                <Row className='d-flex justify-content-center text-white mb-4 m-0'>
                    <TitleDeco className='text-center' text={'Habitando mi cuerpo, leyendo mis signos.'}></TitleDeco>
                </Row>
                <Row className='d-flex flex-column flex-md-row text-white'>
                   <Col className='mr-md-2'>
                        <p className='main-text text-white'>Tenía 40 años. La lesión afectó el nervio que llega hasta mi vulva. Ese hecho generó en mí, una voluntad por leer e investigar sobre mis signos y dolores. Una lectura me llevó a otra y no tardé en encontrar información sobre el ciclo menstrual y salud ginecológica desde una perspectiva feminista y ecologista.</p>
                   </Col>
                   <Col className='ml-md-2'>
                        <p className='main-text text-white'>Fue entonces, cuando generé un propósito y una misión para mí: formarme para profundizar en los conocimientos y reconvertirme así en una activista por la soberanía corporal, la salud ginecológica global y la consciencia ecofeminista. El proyecto Espacio Matriz tuvo su nacimiento en el año 2015.</p>
                   </Col>
               </Row>
            </Container>
        </Row>
    )
}

export default LiveIn
