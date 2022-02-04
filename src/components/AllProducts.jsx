import Image from "next/image";
import Link from "next/link";
import { fromImageToUrl } from "../../utils/urls";

const AllProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          className="my-4 border border-slate-700 border-opacity-20 rounded-md py-1 px-2"
          key={product.attributes.slug}
        >
          <Link href={`/products/${product.attributes.slug}`} passHref>
            <a>
              <div className="flex justify-between space-x-2">
            
                <div className="">
                  <p>{product.attributes.name}</p>
                  <p>{product.attributes.name}</p>
                 
                </div>


                <div className="grow-0 w-[120px] min-w-[120px]">
                  <Image
                    src={fromImageToUrl(product.attributes.image)}
                    alt="product image"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default AllProducts;
