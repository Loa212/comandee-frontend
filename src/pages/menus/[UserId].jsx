import Head from "next/head";
import React from "react";
import { API_URL } from "../../../utils/urls";
import AllProducts from "../../components/AllProducts";

export default function UserId({ Menus }) {
  const menus = Menus.data[0].attributes.menus.data;
  const cenaCategories = menus[1].attributes.categories.data;
  return (
    <div className="hoverflow-behavior-contain">
      <Head>
        <title>Comandee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-center pt-4 text-green-700 font-bold text-4xl">
          Menu {menus[1].attributes.name}:
        </h1>

        <div className="pt-12 pb-9 max-w-xs mx-auto text-lg space-y-6">
          {cenaCategories.map((category) => (
            <div key={category.attributes.slug}>
              <h3 className="text-center text-xl font-medium text-rose-700">
                {category.attributes.name}
              </h3>
              <AllProducts products={category.attributes.products.data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    //retrieve all the possible paths
    const users_res = await fetch(`${API_URL}/api/user-ids`);
    const users = await users_res.json();
    //return them to NextJs app
    return {
      paths: users.data.map((user) => ({
        params: { UserId: String(user.attributes.uid) },
      })),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getStaticProps({ params: { UserId } }) {
  //fetch products
  // const products_res = await fetch(`${API_URL}/api/products?populate=image`)
  //const products = await products_res.json()
  const Menus_res = await fetch(
    `${API_URL}/api/user-ids?populate[menus][populate][categories][populate][products][populate]=image&filters[uid][$eq]=${UserId}&filters[menus][id][$eq]=2`
  );
  const Menus = await Menus_res.json();


  return {
    props: {
      Menus,
    },
    revalidate: 60,
  };
}