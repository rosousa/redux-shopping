import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

const Products = () => {
  return (
    <div className="md:grid flex flex-col grid-cols-4 justify-items-start py-10 pl-10 gap-x-5">
      {products.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
