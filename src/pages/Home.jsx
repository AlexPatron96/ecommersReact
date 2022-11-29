import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterHeadLineThunk, getfilterThunk, getProductsThunk } from '../store/slices/products.slice';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import axios from 'axios';

const Home = () => {


    const dispatch = useDispatch()
    const product = useSelector(state => state.products)

    const [categories, setCategories] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))
    }, [])

    const searchProduct = () => {
        dispatch(filterHeadLineThunk(inputSearch))
        alert('click ' + inputSearch)
    }
    // console.log(product);
    return (
        <div className='contHome'>
            {" - "}
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search for the product you need"
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Button onClick={searchProduct} variant="outline-danger" id="button-addon1">
                    <i className='bx bx-search-alt bx-sm'></i>
                </Button>
            </InputGroup>

            <div className='bodyhome'>
                <Container>
                    <Row>

                        <Col xs={"auto"}>
                            <aside>
                                <div>
                                    <Accordion className='acordion' defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header >PRICE </Accordion.Header>
                                            <Accordion.Body>
                                                <h4 className='searchLowPrice product-h5'>
                                                    Low Price{" "}
                                                    <i className='bx bxs-dollar-circle'></i>{" "}
                                                </h4>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder=""
                                                        value={inputSearch}
                                                        onChange={e => setInputSearch(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <h4 className='searchHeightPrice product-h5'>
                                                    Height price{" "}
                                                    <i className='bx bxs-dollar-circle'></i>{" "}
                                                </h4>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder=""
                                                        value={inputSearch}
                                                        onChange={e => setInputSearch(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <Button onClick={searchProduct} variant="outline-danger" id="button-addon1">
                                                    <i className='bx bx-search-alt bx-sm'></i>
                                                </Button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>CATEGORY</Accordion.Header>
                                            <Accordion.Body>
                                                <ListGroup defaultActiveKey="#link1">
                                                    {
                                                        categories?.map(categiesItem => (
                                                            <ListGroup.Item action
                                                                onClick={() => dispatch(getfilterThunk(categiesItem.id))}
                                                                className="colorList"
                                                                key={categiesItem.id}
                                                            >
                                                                {categiesItem.name}
                                                            </ListGroup.Item>
                                                        ))
                                                    }
                                                    <ListGroup.Item action
                                                        onClick={() => dispatch(getProductsThunk())}
                                                        className="colorList"
                                                    >
                                                        All
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </aside>
                        </Col>

                        <Col xs={9}>
                            <div className='contCard-Product'>
                                {product?.map(productItem => (

                                    <Card key={productItem.id} >
                                        <div className='contLink'>
                                            <Link to={`/product/${productItem.id}`} key={productItem.id} className='linkCard-ProductItem'>
                                                <Card.Img variant="top" src={productItem.productImgs[0]} />
                                                <Card.Body>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{productItem?.title}</Tooltip>}>
                                                        <span className="d-inline-block">
                                                            <Card.Title className="text-secondary" style={{ pointerEvents: 'none' }}>
                                                                {
                                                                    (productItem?.title).slice(0, (productItem?.title).length >= 20 ? 20 : (productItem?.title).length)
                                                                }{'...'}
                                                            </Card.Title>
                                                        </span>
                                                    </OverlayTrigger>
                                                </Card.Body>
                                            </Link>
                                        </div>
                                        <ListGroup.Item>{productItem.category.name}</ListGroup.Item>
                                        <ListGroup.Item>{ }</ListGroup.Item>
                                        <Button className='btn-cardShop positionCard' variant='danger'>
                                            <i className='bx bx-cart'></i>
                                        </Button>
                                        <ListGroup.Item>$ {productItem.price}</ListGroup.Item>
                                        <ListGroup className="list-group-flush blackFriday">
                                            BLACK-FRIDAY
                                        </ListGroup>
                                    </Card>
                                ))}
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            Home
        </div>
    );
};

export default Home;