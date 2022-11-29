import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProduct: (state, action) => {
            return action.payload
        }

    }
})

export const getProductsThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then(res => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)))
}

export const getfilterThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterHeadLineThunk = (search) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then((res) => {
            const filtered = res.data.data?.products.filter((prod) =>
                prod.title.toLowerCase().includes(search.toLowerCase()))

            console.log(res.data);
            console.log(search);
            console.log(filtered);
            dispatch(setProduct(filtered))
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProduct } = productsSlice.actions;

export default productsSlice.reducer;
