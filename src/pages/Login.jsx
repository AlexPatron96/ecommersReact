import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        alert('hola mundo' + data)
        console.log(data);
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
            .then(res => {
                console.log(res.data.data.token);
                navigate('/')
                localStorage.setItem('token', res.data.data.token)

            })
            .catch(err => {
                if (err.response?.status === 404) {
                    alert('error en la contrasenia')
                } else {
                    console.log(err.respose?.data);
                }
            })
    }
    return (
        <div className='compenents-login'>

            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    1 of 3
                    Login
                    <div className='prueba'>
                        alex
                    </div>
                </Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="4">
                    3 of 3
                    <h3 className='title-h3 login'>LOGIN</h3>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register('email')} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register('password')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;