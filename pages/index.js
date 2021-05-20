import Image from "next/image";
import React from "react";
// import styles from "../components/index.module.css";
import db from "../database/connection";
import Donuts from "../components/Donuts";
import Layout from "../components/Layout";
import Basket from "../components/Basket";

// const basket = {};

export default function Index({ data }) {

  return (
    <>
      <Layout />
      <Donuts data={data} basket={basket} addToBasket={addToBasket} />
      <Basket basket={basket} />
    </>
  );
}

export async function getServerSideProps() {
  const GET_PRODUCT = "SELECT * FROM products;";
  const data_long = await db.query(GET_PRODUCT);
  const data = data_long.rows;
  return {
    props: {
      data,
    },
  };
}
