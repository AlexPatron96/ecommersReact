import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchesesThunk } from '../store/slices/purchases.slice';



const Purchases = () => {
    const dispatch = useDispatch()
    const purchasesUser = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchesesThunk())
    }, [])

    console.log(purchasesUser);


    const listShopPurchases = purchasesUser.map(shop => {
        return (
            <Card style={{ width: '700px', margin: "0 auto", gap: "1rem" }} key={shop.id}>
                {
                    shop.cart.products.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h5>{prod.id}</h5>
                                <h4>{prod.title}</h4>
                                <h4>{prod.price}</h4>
                                <h4>{prod.quantity}</h4>
                            </div>
                        )

                    })
                }
            </Card>
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