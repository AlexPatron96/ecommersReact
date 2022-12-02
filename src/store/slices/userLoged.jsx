import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const userLogedSlice = createSlice({
    name: 'userLoged',
    initialState: [],
    reducers: {
        setUserLoged: (state, action) => {
            return action.payload
        }

    }
})


export const { setUserLoged } = userLogedSlice.actions;

export default userLogedSlice.reducer;
