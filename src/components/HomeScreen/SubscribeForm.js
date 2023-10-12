import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import '../../styles/screens/homescreen/subscribe-form.styles.scss'

const SubscribeForm = () => {
    return (
        <Row className="subscribe-for bg-info py-5 m-0">
            <Container>
                <Form className='d-flex flex-column justify-content-center flex-md-row'>
                    <Col md={4} className='subscribe-main-box mt-0 mt-md-1 p-0'>
                        <Form.Text className='subscribe-main-text text-white mr-3 pt-0 pt-md-1 m-0'>
                            Recibe lo último vía email.
                        </Form.Text>
                    </Col>
                    <Col md={8} className='p-0'>
                        <Row className='d-flex flex-nowrap flex-column flex-md-row justify-content-left m-0'>
                            <Form.Group className='w-100 mr-0 mt-3 mr-md-3 mt-md-0 m-0'>
                                <Form.Control type='text' placeholder='Tu nombre' name='nombre' className='subscribe-form-input rounded-0'></Form.Control>
                            </Form.Group>
                            <Form.Group  className='w-100 mr-0 mt-3 mr-md-3 mt-md-0 m-0'>
                                <Form.Control type='email' placeholder='Tu email' name='nombre' className='subscribe-form-input rounded-0'></Form.Control>
                            </Form.Group>
                            <Form.Group className='w-100 m-0 mt-3 mt-md-0'>
                                <Form.Control as='select' className='subscribe-form-input rounded-0'>
                                    <option value=''>Elige una opción...</option>
                                    <option value='menstruación'>Menstruación</option>
                                    <option value='climaterica'>Climatérica</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row className='d-flex flex-sm-row mt-3 m-0'>    
                            <Button variant='primary' type='submit' className='rounded-0 text-uppercase mr-3'>
                                Me apunto
                            </Button>         
                            <Form.Group className='d-flex flex-row justify-content-center justify-content-md-left align-items-center mt-2 mt-md-0 m-0'>
                                <Form.Check className='' type="checkbox" />
                                <Form.Text className='text-white m-0'>He leído y acepto la política de privacidad.</Form.Text>
                            </Form.Group>
                        </Row>
                    </Col>
                </Form>
            </Container>
        </Row>
    )
}

export default SubscribeForm
