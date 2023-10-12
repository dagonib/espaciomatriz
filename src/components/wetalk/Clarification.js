import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Iconos
import { FaExclamationCircle } from "react-icons/fa";
import '../../styles/screens/wetalk/clarification.styles.scss'

const Clarification = () => {
    return (
        <div className='clarification bg-dark py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column flex-sm-row m-0 p-0'>
                    <Col xs={2} className='d-flex align-self-center m-0 p-0'>
                        <FaExclamationCircle className='icon text-white align-self-start' /> 
                    </Col>
                    <Col xs={10} className='align-self-center p-0'>
                        <p className='main-text text-white text-center text-sm-left ml-2 mb-0'>
                            Carolina Ackermann no proporciona asesoramiento médico, diagnóstico o tratamiento. Si tiene cualquier duda sobre su estado de salud, por favor, acuda a su centro médico o especialista.
                        </p>
                        <p className='main-text text-white text-center text-sm-left ml-2 mb-0'>
                            El proyecto Espacio Matriz trabaja para distintas instituciones, y ONG´s para alcanzar su propósito divulgativo. Espacio Matriz no está patrocinado por ninguna empresa.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Clarification
