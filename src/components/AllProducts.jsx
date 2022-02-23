import Product from "./Product";

const AllProducts = ({ UserId, products }) => {
  return (
    // <div className="divide-y-2 divide-slate-700 divide-opacity-20">
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
