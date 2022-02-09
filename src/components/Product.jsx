import Image from "next/image";
import Link from "next/link";
import { fromImageToUrl } from "../../utils/fromImageToUrl";

const Product = ({ product, UserId }) => {
  return (
    <div className="my-2">
      <Link
        href={`/products/${product.attributes.slug}?UserId=${UserId}`}
        passHref
      >
        <a>
          <div className="flex justify-between space-x-2">
            <div className="flexg flex flex-col justify-center space-y-2">
              <p className="capitalize">{product.attributes.name}</p>
              <p className="text-xs opacity-80">{product.attributes.content}</p>
              {product.attributes.allergeni && (
                <p className="text-xs opacity-60">
                  allergeni: {product.attributes.allergeni}
                </p>
              )}
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
  );
};

export default Product;
