import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutShopThunk, getProdCartShopThunk } from '../store/slices/cartShop.slice';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';



const SidebarCarShop = ({ show, handleClose }) => {

    const cartShop = useSelector(state => state.cartShop)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProdCartShopThunk())
    }, [])



    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart Shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ol" numbered>
                        {
                            cartShop.products?.map(prodToBuy => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    key={prodToBuy.id}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{prodToBuy.brand}</div>
                                        {prodToBuy.title}
                                    </div>
                                    <Badge bg="primary" pill>
                                        {prodToBuy.productsInCart.quantity}
                                    </Badge>
                                </ListGroup.Item>
                            ))
                        }

                    </ListGroup>
                    
                </Offcanvas.Body>
                <Button variant="danger" onClick={() => dispatch(checkoutShopThunk())}>CHECKOUT</Button>{' '}
            </Offcanvas>
        </div>
    );
};

export default SidebarCarShop;