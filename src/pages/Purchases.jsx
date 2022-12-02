import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchesesThunk } from '../store/slices/purchases.slice';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';



const Purchases = () => {
    const dispatch = useDispatch()
    const purchasesUser = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchesesThunk())
    }, [])

    console.log(purchasesUser);

    const DateFuntion = (date) => {
        const event = new Date(date);
        const options = {  year: 'numeric', month: 'long', day: 'numeric' };
        return event.toLocaleDateString(undefined, options)
    }

    const listShopPurchases = purchasesUser.map(shop => {

        return (
            <ListGroup style={{ margin: '2rem' }}  key={shop.id}>

                <ListGroup.Item>
                    <h2>
                        Shop <Badge bg="danger">{DateFuntion(shop.createdAt)}</Badge>
                    </h2>
                    <ListGroup.Item>

                        {
                            shop.cart.products.map(prod => {
                                return (
                                    <ListGroup variant="flush" key={prod.id}>
                                        <ListGroup.Item className='listProd-Purchases'>
                                            <h5 style={{ width: '10%' }}>{prod.id}</h5>
                                            <h5 style={{ width: '60%' }}>{prod.title}</h5>
                                            <h5 style={{ width: '10%' }}>{prod.price}</h5>
                                            <h5 style={{ width: '5%' }}>{prod.productsInCart.quantity}</h5>
                                        </ListGroup.Item>
                                    </ListGroup>
                                )
                            })
                        }
                    </ListGroup.Item>
                    <h6>total</h6>
                </ListGroup.Item>
            </ListGroup>
        )
    })
    return (
        <div>
            Purchases


            {
                listShopPurchases
            }


        </div>
    );
};

export default Purchases;