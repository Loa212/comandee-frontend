import Image from "next/image";
import Link from "next/link";
import { fromImageToUrl } from "../../utils/fromImageToUrl";

const Product = ({ product, UserId }) => {
  return (
    <div className="my-4">
      <Link
        href={`/products/${product.attributes.slug}?UserId=${UserId}`}
        passHref
      >
        <a>
          <div className="grid grid-cols-3 gap-x-2">
            <div className="col-span-1  ">
              <Image
                className="rounded-sm shadow-sm"
                src={fromImageToUrl(product.attributes.image)}
                alt="product image"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-5 items-center gap-1">
                <p className="col-span-4 text-sm capitalize">
                  {product.attributes.name}
                </p>
                <p className="text-xxs col-span-1 capitalize">
                  € {product.attributes.price.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-xxs col-span-5 font-light italic opacity-80">
                  {product.attributes.content}
                </p>
                {product.attributes.allergeni && (
                  <p className="text-xxs col-span-5 h-min ">
                    allergeni: {product.attributes.allergeni}
                  </p>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Product;
