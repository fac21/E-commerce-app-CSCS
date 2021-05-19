
import Image from "next/image";
import styles from "../styles/Home.module.css";
import db from "../database/connection";
import Donuts from "../components/Donuts"
import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Index({ data }) {
  return (
    <>
    <Layout />
    <Header />
    <Donuts data={data}/>
    </>
  )
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
