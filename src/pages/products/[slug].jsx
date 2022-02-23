import { API_URL } from "../../../utils/urls";
import { fromImageToUrl } from "../../../utils/fromImageToUrl";
import Head from "next/head";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  console.log(product);
  const router = useRouter();
  return (
    <div>
      <Head>
        {product.attributes.meta_title && (
          <title>{product.attributes.meta_title}</title>
        )}
        {product.attributes.meta_title && (
          <title>{product.attributes.meta_description}</title>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-full  px-4 pt-8">
        <Link href={`/${router.query.UserId}/0`} passHref>
          <a className="flex items-center">
            <MdArrowBack className="mr-1 text-xl" /> indietro
          </a>
        </Link>

        <div className="space-y-4">
          <div className="py-8">
            <Image
              src={fromImageToUrl(product.attributes.image)}
              alt="product image"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-4xl text-slate-700 opacity-80">
            {product.attributes.name}
          </h3>
          {product.attributes.price && (
            <p className="text-xl text-slate-700">
              € {product.attributes.price.toFixed(2).replace(".", ",")}
            </p>
          )}
          <article className="prose text-base italic text-slate-700">
            {product.attributes.content}
          </article>
          {product.attributes.allergeni && (
            <p className="text-sm opacity-80">
              allergeni: {product.attributes.allergeni}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  //fetch product based on available slugs
  //http://localhost:1337/api/products/?filters[slug][$eq]=pasta-al-pesto

  try {
    const products_res = await fetch(
      `${API_URL}/api/products/?filters[slug][$eq]=${slug}&populate=image`
    );
    const found = await products_res.json();

    //return products
    return {
      props: {
        product: found.data[0],
      },
      revalidate: 60,
    };
  } catch (error) {
    return null;
  }
}

export async function getStaticPaths() {
  try {
    //retrieve all the possible paths
    const products_res = await fetch(`${API_URL}/api/products`);
    const products = await products_res.json();
    //return them to NextJs app
    return {
      paths: products.data.map((product) => ({
        params: { slug: String(product.attributes.slug) },
      })),
      fallback: "blocking",
    };
  } catch (error) {
    return null;
  }
}

export default Product;
