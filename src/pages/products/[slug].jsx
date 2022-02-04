import { fromImageToUrl, API_URL } from "../../utils/urls";
import Head from "next/head";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";

const Product = ({ product }) => {
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
      <main className="max-w-sm mx-auto px-4 pt-8 space-y-4">
        <Link href={`/`} passHref>
          <a className="flex items-center">
            <MdArrowBack className="text-xl mr-1" /> indietro
          </a>
        </Link>

        <h3 className="text-4xl text-green-700">{product.attributes.name}</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="w-[300px] min-w-[300px]">
          <Image
            src={fromImageToUrl(product.attributes.image)}
            alt="product image"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        {product.attributes.price && (
          <p className="text-lg">
            € {product.attributes.price.toFixed(2).replace(".", ",")}
          </p>
        )}
        <article className="prose">{product.attributes.content}</article>
      </main>
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
    alert(error);
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
    alert(error);
    return null;
  }
}

export default Product;
