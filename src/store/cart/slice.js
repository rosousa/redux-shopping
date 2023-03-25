import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: "teste",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // verify if product is on cart
      const productIsSelected = state.products.some(
        (value) => value.id === action.payload.id
      );
      // if product is on cart, increase quantity by 1
      if (productIsSelected) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      // if product isn't on cart, add to cart
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },

    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;