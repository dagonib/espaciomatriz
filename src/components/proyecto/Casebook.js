import React from 'react'
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap'
import img_presentation from '../../images/motif/motif_12.png'

const Casebook = () => {
    return (
        <Row className='objectives bg-secondary px-md-5 px-lg-0 py-5 mx-0'>
            <Container className='p-0'>
                <Row className='d-none d-md-flex d-lg-none align-items-center m-0 p-0'>
                    <p className='subtitle-text text-center mb-3 m-0'>ESTUDIO SOBRE ATENCIÓN SANITARIA en menopausia y climaterio</p>
                </Row>
                <Row className='d-flex p-4 p-md-0 m-0 p-0'>
                    <Col className='d-flex flex-column align-items-md-left align-items-lg-center mr-md-5 m-0 p-0'>
                        <p className='d-md-none d-lg-flex subtitle-text text-center mb-3 m-0'>ESTUDIO SOBRE ATENCIÓN SANITARIA en menopausia y climaterio</p>
                        <Image
                            src={img_presentation}
                            className='d-flex d-md-none align-self-center w-25 mb-4'
                        >

                        </Image>
                        <p className='main-text mb-3 m-0'>Desde la Asociación “La Vida en Rojo” y “FemIgual” coordiné en el año 2021 un estudio que llamamos: “Atención sanitaria en menopausia y climaterio”. Dicho estudio tuvo como objetivo recoger información veraz y actualizada sobre cómo perciben las mujeres la atención sanitaria en esta etapa de sus vidas. Con los resultados del mismo, se evidenció que la mayoría de mujeres en edades comprendidas entre los 40 y 65 años, no tienen la información suficiente para saber escuchar e interpretar las señales que les da su cuerpo para poder identificarlas dentro del proceso natural del climaterio o en las propias manifestaciones del envejecimiento.</p>    
                        <Button 
                            variant='primary' 
                            type='submit' 
                            className='main-text rounded-0 text-uppercase w-25'
                            href='https://matriz.net/numero-50/atencion-sanitaria-en-menopausia-climaterio-recogida-de-informacion-testimonios-el-estado-espanol/' 
                            target="_blank"
                        >
                            Leer
                        </Button>  
                    </Col>

                    <Col md={4} lg={3} className='imgbox d-flex align-self-center ml-md-5 p-0'> 
                        <Image
                            src={img_presentation}
                            className='d-none d-md-flex'
                        >

                        </Image>
                   </Col>
                    
                </Row>

            </Container>
        </Row>
    )
}

export default Casebook