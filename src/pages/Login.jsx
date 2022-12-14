import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { setUserLoged } from '../store/slices/userLoged';
import { setIsLoading } from '../store/slices/isLoading.slice';



const Login = () => {

    const { register, handleSubmit } = useForm()
    const userLoged = useSelector(state => state.userLoged)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(userLoged);
    // const submit = (data) => {
    //     alert('hola mundo que tal' + data)
    //     console.log(data);

    //     axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
    //         .then(res => {
    //             console.log(res.data.data);
    //             navigate('/')
    //             localStorage.setItem('token', res.data.data.token)
    //         })
    //         .catch(err => {
    //             if (err.response?.status === 404) {
    //                 alert('error en la contrasenia')
    //             } else {
    //                 console.log(err.respose?.data);
    //             }
    //         })
    // // }.
    // if (userLoged === 400) {
    //     console.log('Dentro en el if');

    // } else {
    //     console.log('todo correcto');
    // }
    // const modalError = () => {
    //     if (userLoged === 400) {
    //         console.log('Dentro en el if');

    //     } else {
    //         console.log('todo correcto');
    //     }
    // }




    const submit = (data) => {
        alert('hice submit' + data)
        console.log(data);
        dispatch(setIsLoading(true))
        axios.post(`https://e-commerce-api.academlo.tech/api/v1/users/login/`, data)
        .then((res) => {
            console.log(res.data.data);
            dispatch(setUserLoged(res.data.data))
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => {
            console.log('error al ingreso');
            if (err.response?.status === 400) {
                // alert('error en la contrasenia')
                console.log('error dentro del if error');
                dispatch(setUserLoged(err.response?.status))
            } else {
                console.log(err);
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
        navigate('/')
    }

    return (
        <div className='compenents-login'>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick='false'>Close</Button>
                </Modal.Footer>
            </Modal>

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