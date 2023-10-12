import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import Agenda from '../components/proyecto/Agenda'
import Association from '../components/proyecto/Association'
import Objectives from '../components/proyecto/Objectives'
import Purpose from '../components/proyecto/Purpose'
import Casebook from '../components/proyecto/Casebook'

const ProjectScreen = () => {
    return (
        <>
            <Purpose />
            <Objectives />
            <Row className='d-flex flex-column flex-md-row bg-info m-0 p-0'>
                <Association />
                <Agenda />
            </Row>
            <Casebook />
           
        </>
    )
}

export default ProjectScreen
