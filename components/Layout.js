import Head from "next/head";
import Header from "./Header";

export default function Layout({ basket, addToBasket }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Designer Donuts</title>
        <meta
          name="description"
          content="Buy designer donuts here and stuff your greedy face"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500;700&display=swap');
        </style>
        <script
          src="https://kit.fontawesome.com/1c7f57191b.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header basket={basket} addToBasket={addToBasket} />
    </>
  );
}
