import Image from "next/image";
// import styles from "../components/index.module.css";
import db from "../database/connection";
import Donuts from "../components/Donuts";
import Layout from "../components/Layout";

export default function Index({ data }) {
  const basket = {};

  return (
    <>
      <Layout />
      <div className="test_name">
        <Donuts data={data} basket={basket} />
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
