import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig'

export const purchesesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: { 
        setPurchasesSlice: (state , action) => {
            return action.payload
        }

    }
})

export const getPurchesesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases/', getConfig())
        .then((res) => dispatch(setPurchasesSlice(res.data.data.purchases)))
        .catch(err => console.log(err.response?.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchasesSlice } = purchesesSlice.actions;

export default purchesesSlice.reducer;
