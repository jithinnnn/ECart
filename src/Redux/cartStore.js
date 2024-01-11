import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./wishlist";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlist,
        cartReducer:cartSlice
    }
})

export default cartStore