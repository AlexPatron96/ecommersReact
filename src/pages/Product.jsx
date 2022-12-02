import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Placeholder from 'react-bootstrap/Placeholder';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*imagenes de prueba*/
import svgSello from '../img/sello.svg'
import tarjetas from '../img/sellos_ec_1.webp'
import { addProductCartThunk } from '../store/slices/cartShop.slice';





const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [ inputProdCuant , setInputProdCuant] = useState('')
    const productList = useSelector(state => state.products)

    const productFound = productList?.find(prodItem => prodItem.id === Number(id))
    console.log(productFound);

    const suggestions = productList?.filter(sugges => sugges.category.id === productFound?.category.id)

    const suggestionsListReset = suggestions?.filter(sugges => sugges.title !== productFound?.title)
    // console.log(suggestionsListReset);

    const [productCarrousel, setProductCarrousel] = useState([...suggestionsListReset].splice(0, 4));

    console.log(suggestionsListReset);
    console.log(productCarrousel);

    useEffect(() => {
        console.log('se vuelve a ejecutar el useEffect');
        if (productFound === undefined) {
            navigate("/")
            console.log(productFound);
        } else {
            dispatch(getProductsThunk())
        }
    }, [])


    const setProduct = () => {
        alert(' seteando la pag Product')
    }


    const addProductCartButton = () => {

        const newProd = {
            "id":productFound.id,
            "quantity": inputProdCuant
        }

        dispatch(addProductCartThunk(newProd))
    }


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        const firstIndex = selectedIndex * 2
        console.log('selectedindex 57: ' + selectedIndex);
        console.log('el firdindex 58: ' + firstIndex);
        setProductCarrousel([...suggestionsListReset].splice(firstIndex, 4))
    };



    const carrouselPage = []
    for (let i = 1; i <= Math.ceil(suggestionsListReset.length / 4); i++) {
        carrouselPage.push(i)
    }
    const partFilteredProducts = productCarrousel.map(suggCarrusel => {
        return (
            <Card key={suggCarrusel.id} className="card-sugges">
                <div className='contLink'>
                    <h2>s</h2>
                    <Link to={`/product/${suggCarrusel.id}`} className='linkCard-suggCarrusel' onClick={setProduct}>
                        <Card.Img variant="top" src={suggCarrusel.productImgs[0]} />
                        <Card.Body className='text-card-sugges'>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{suggCarrusel?.title}</Tooltip>}>
                                <span className="d-inline-block">
                                    <Card.Title className="text-secondary " style={{ pointerEvents: 'none' }}>
                                        {
                                            (suggCarrusel?.title).slice(0, (suggCarrusel?.title).length >= 20 ? 20 : (suggCarrusel?.title).length)
                                        }{'...'}
                                    </Card.Title>
                                </span>
                            </OverlayTrigger>
                        </Card.Body>
                    </Link>
                </div>
                <ListGroup.Item>{suggCarrusel.category.name}</ListGroup.Item>
                <ListGroup.Item>{ }</ListGroup.Item>

                <ListGroup.Item>$ {suggCarrusel.price}</ListGroup.Item>
                <ListGroup className="list-group-flush blackFriday">
                    BLACK-FRIDAY
                </ListGroup>
            </Card>
        )
    })


    // console.log(Math.ceil(suggestions.length / 2));
    const allCarrouselPage = carrouselPage.map(page => {
        return (
            <div className='carrousel-suggesProduct' key={page}>
                {
                    partFilteredProducts
                }
            </div>
        )
    })




    return (
        <div>
            <small>Product/{productFound?.title}</small>
            <br />
            <small>NOMBRE DEL USUARIO</small>


            <div className='cont-Body-producto'>

                <Row className="justify-content-md-center">

                    <Col xs lg="4">
                        <div className='col-Product imgAcordion'>
                            <Carousel interval={2000} variant="dark">

                                {
                                    productFound?.productImgs.map(img => (
                                        <Carousel.Item key={img}>
                                            <div className='cont-img'>
                                                <img className="d-block img-100" src={img} alt="" />
                                            </div>
                                        </Carousel.Item>
                                    ))
                                }

                            </Carousel>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className='col-Product descriptionPro'>
                            <h4 className='product-h4'>{productFound?.title}</h4>
                            <p>{productFound?.description}</p>
                            <div>
                                <h5 className='product-h5'>
                                    Availability: <span>{productFound?.status}</span>
                                    {productFound?.status === "active"
                                        ? <div className='status Green'></div> :
                                        <div className='status'></div>}
                                </h5>
                                <h5 className='product-h5'>
                                    Category: {" "}
                                    <span>
                                        {productFound?.category.name}
                                    </span>
                                </h5>
                                <h5 className='product-h5'>
                                    Brand:{' '}
                                    <span>
                                        {productFound?.title.slice(0, productFound?.title.indexOf(" "))
                                        }
                                    </span>
                                </h5>
                                <div className='status'></div>
                            </div>
                        </div>
                    </Col>

                    <Col xs lg="4">
                        <div className='col-Product shopFast'>
                            <div className='shop'>
                                <h4 className='shop-h4 price'>Price: $ {productFound?.price}</h4>
                                <h4 className='shop-h4 save'>You save: $ {productFound?.price}</h4>
                                <div>
                                    <div className='sello'>
                                        <img src={svgSello} alt="" />
                                        <h5 className='shop-h5'>This product has a delivery guarantee.</h5>
                                    </div>
                                    <div>
                                        <div>
                                            <h5 className='shop-h5'><i className='bx bxs-truck'></i> Delivery to your home.</h5>
                                        </div>
                                        <div>
                                            <h5 className='shop-h5'><i className='bx bxs-plane-alt'></i>Receive this product in 1 to 3 business days.</h5>
                                        </div>

                                        <div className='contShopAction'>
                                            <div className='cant-productShop'>
                                                <div>
                                                    <h5 className='shop-h5'>Cantidad:</h5>
                                                    <input className='inputCant' type="number" name="" id="" onChange={e => setInputProdCuant(e.target.value)} value={inputProdCuant}/>
                                                </div>
                                                <div className='cads-productShop'>
                                                    <img className='imgcads-productShop' src={tarjetas} alt="" />
                                                </div>
                                            </div>
                                            <div className='button-productShop'>
                                                <Button variant='danger' onClick={() => addProductCartButton()}>Comprar <i className='bx bx-shopping-bag' ></i></Button>
                                                <Button variant='outline-danger'>Agregar al carrito</Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </Col>

                </Row>
                <div className='row-Product'>







                </div>
            </div>

            <div className='cont-Carrousel'>
                <div className='title-carrousel'>
                    OTHER CUSTOMERS ALSO CARRIED
                </div>
                {
                    allCarrouselPage
                }
                <Button variant="danger" className='carrousel-btPrev'><i className='bx bxs-left-arrow'></i></Button>
                <Button variant="danger" className='carrousel-btNext'><i className='bx bxs-right-arrow'></i></Button>
            </div>
            <div>
            </div>
        </div >
    );
};

export default Product;



