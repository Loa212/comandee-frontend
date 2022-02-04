import Head from "next/head";
import Products from "../components/products";
import { API_URL } from "../../utils/urls";


export default function Home({ CaffeRapallo }) {
  // console.log(CaffeRapallo.data[0].attributes.uid)
  const menus = CaffeRapallo.data[0].attributes.menus.data;
  console.log(menus[1].attributes.name)
  const cenaCategories = menus[1].attributes.categories.data;
  return (
    <div className="hoverflow-behavior-contain">
      <Head>
        <title>Comandee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center pt-4 text-green-700 font-bold text-4xl">
          Menu {menus[1].attributes.name}:
        </h1>

        <div className="pt-12 pb-9 max-w-xs mx-auto text-lg space-y-6">
          {cenaCategories.map((category) => (
            <div key={category.attributes.slug}>
              <h3 className="text-center text-xl font-medium text-rose-700">
                {category.attributes.name}
              </h3>
              <Products products={category.attributes.products.data} />
              
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  //fetch products
  // const products_res = await fetch(`${API_URL}/api/products?populate=image`)
  //const products = await products_res.json()
  const CaffeRapallo_res = await fetch(
    `${API_URL}/api/user-ids?populate[menus][populate][categories][populate][products][populate]=image&filters[uid][$eq]=A2PGPJB08CKXNJZSL0BBLHLX&filters[menus][id][$eq]=2`
  );
  const CaffeRapallo = await CaffeRapallo_res.json();

  return {
    props: {
      CaffeRapallo,
    },
    revalidate: 60,
  };
}
