import Product from "./Product";

const AllProducts = ({ UserId, products }) => {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.attributes.slug}
          product={product}
          UserId={UserId}
        />
      ))}
    </>
  );
};

export default AllProducts;
