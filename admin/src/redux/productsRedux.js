import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL PRODUCTS
    getProductStart: state => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE A PRODUCT
    deleteProductStart: state => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.slice(
        state.prodcuts.findIndex(item => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
