export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
};