import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import db from "../database/connection";

export default function Home({ data }) {
  const donutArray = data.map(donut => {
    return (
      <>
        <h1 className="donut__name">{donut.name}</h1>
        <img className="donut__image" src={donut.image} alt={'picture of ' + donut.name + ' donut'} key={donut.id}/>
        <p className="donut__description">{donut.description}</p>
        <p className="donut__price">£{donut.price.toFixed(2)}</p>
      </> 
    )
  })
  return (
    <>
      {donutArray}
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
