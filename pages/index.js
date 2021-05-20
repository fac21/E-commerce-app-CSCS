import Image from "next/image";
import React from "react";
// import styles from "../components/index.module.css";
import db from "../database/connection";
import Donuts from "../components/Donuts";
import Layout from "../components/Layout";
import Basket from "../components/Basket";

export default function Index({ data }) {
  const [basket, addToBasket] = React.useState({
    "Burberry Muffin": 0,
    "Dolce and Banana": 0,
    "Choco Chanel": 0,
    "Donutella Versace": 0,
    "Giorgio Almondi": 0,
  });
  return (
    <>
      <Layout />


      <div className="basket__container">
        <h2 className="basket__title">Basket </h2>
        <i className="fas fa-shopping-basket"></i>
        <Basket basket={basket} data={data} />
        <button>Check out</button>
      </div>
      <div className="donuts__container">
      < Donuts data={data} basket={basket} addToBasket={addToBasket} />
       </div>
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
