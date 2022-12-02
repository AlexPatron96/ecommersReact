import { configureStore } from '@reduxjs/toolkit'
import cartShopSlice from './slices/cartShop.slice'
import isLoadingSlice from './slices/isLoading.slice'
import  productsSlice  from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'
import  userLogedSlice  from './slices/userLoged'

export default configureStore({
    reducer: {
        products: productsSlice,
        isLoading: isLoadingSlice,
        purchases:purchasesSlice,
        userLoged : userLogedSlice,
        cartShop: cartShopSlice
    }
})
