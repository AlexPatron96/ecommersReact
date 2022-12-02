import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig'
import { setIsLoading } from './isLoading.slice';



export const mySlice = createSlice({
    name: 'cartShop',
    initialState: [],
    reducers: {
        setCartShop: (state , action) => {
            return action.payload
        }

    }
})

export const getProdCartShopThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart/', getConfig())
        .then((res) => dispatch(setCartShop(res.data.data.cart)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductCartThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', data , getConfig())
        .then((res) => dispatch(getProdCartShopThunk()))
        .catch(err => console.log(err.response?.data))
        .finally(() => dispatch(setIsLoading(false)));
}


export const checkoutShopThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases", {} , getConfig())
        .then(() => dispatch(setCartShop([])))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setCartShop } = mySlice.actions;

export default mySlice.reducer;
