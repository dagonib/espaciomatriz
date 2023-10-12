import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/project/agenda.styles.scss'


import logo_msr from '../../images/logos/msr-blanco.png'

const Agenda = () => {
    return (
        <Col className='agenda text-white p-5 p-0'>
               <Row className='d-flex flex-column text-center align-items-center mb-4 m-0 p-0'>
                    <Image
                        className='img_logo mt-3 mt-sm-0 my-2 my-sm-0 mx-sm-3'
                        style={{ width: '100px'}}
                        src={logo_msr}
                    />
               </Row>
               <Row className='d-flex flex-column align-items-center m-0 p-0'>
                    <h2 className="subtitle-text text-uppercase text-center d-inline-block botton-line-white pb-2 mb-4">Agenda anual "Mujer Sin Reglas"</h2>
                    <p className='main-text text-white mb-0'>He creado un recurso para la mujer que se encuentra en la etapa del climaterio, es decir, la perimenopausia, menopausia y postmenopausia. Se trata de una agenda anual que he llamado “Mujer Sin Reglas. Diario íntimo de tu metAMORfosis hacia la madurez”. ¡Mucho más que una agenda al uso! Es también un material divulgativo y una invitación al autoconocimiento.</p>
                    <p className='main-text text-white mb-0'>“Gracias por la destilación que nos ofreces de tus mujeres sabias de cabecera, por las propuestas de registro, los preciosos dibujos, los Relatos de luna y la bibliografía” Núria Beitia Hernández, madrina de la agenda. ¿Te sumas a este movimiento de mujeres climatéricas registrando y generando conocimiento desde la propia experiencia? Te invito a curiosear todos los aspectos de la agenda y a sumarte desde la web a la “Tribu Mujer Sin Reglas”.</p>
                    <Button 
                        variant='primary' 
                        type='submit' 
                        className='main-text rounded-0 text-uppercase mt-3'
                        href='https://www.mujersinreglas.info/' 
                        target="_blank"
                    >
                        Ver Web
                    </Button>   
               </Row>
        </Col>
    )
}

export default Agenda
