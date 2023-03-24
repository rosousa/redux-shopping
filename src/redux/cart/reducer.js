import cartActionTypes from "./actionTypes";

const initialState = {
  products: [],
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartActionTypes.ADD_PRODUCT:
      return {
        ...initialState, 
        products: [...state.products, action.payload] 
      };
    default:
      return state;
  }
};

export default cartReducer;