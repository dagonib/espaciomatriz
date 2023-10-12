import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

const EspacioMatriz = () => {
    return (
        <div className='espacio-matriz bg-secondary py-5 m-0'>
           <Container>
               <Row className='d-flex flex-column align-items-center '>
                    <TitleDeco className='text-center' text={'Cuando una mujer despierta al saber, despertamos todas'}></TitleDeco>
                    <h2 className="subtitle-text text-uppercase botton-line d-inline-block pb-4 mb-4">Espacio Matriz</h2>
               </Row>
               <Row className='d-flex flex-column flex-md-row'>
                   <Col className='mr-md-2'>
                        <p>Desde el proyecto Espacio Matriz comparto información sobre las etapas sexuales que comprenden la menarquía, la etapa cíclica y el climaterio/menopausia con la intención de ofrecer conocimientos, saberes y recursos a personas, colectivos y entidades.</p>

                        <p>Lo que ofrezco, lo hago bajo mi previa reflexión ecofeminista crítica, necesaria para entender el porqué de tanto tabú, sesgo de género y desinformación sobre el ciclo sexual femenino y salud ginecológica.</p>
                        <p>Apoyo y difundo el trabajo de otras compañeras y proyectos. Comparto eventos o campañas que estén en sintonía con los valores antipatriarcales, anticapitalistas, anticolonialistas y antirracistas. </p>
                   </Col>
                   <Col className='ml-md-2'>
                        <p>Trabajo en red y relación con educadoras, talleristas, pensadoras, escritoras, terapeutas y personal sanitario, entre otras.</p>

                        <p>Espacio Matriz es tu espacio y un espacio colectivo en constante evolución y adaptación. Despierto yo, despiertas tú, y como onda expansiva, despierta toda la sociedad por una nueva Cultura Menstrual y Cultura del Climaterio, positiva, digna, inclusiva e integral.
                        </p>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default EspacioMatriz
