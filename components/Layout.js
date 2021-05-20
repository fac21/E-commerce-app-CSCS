import Head from "next/head";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Designer Donuts</title>
        <meta
          name="description"
          content="Buy designer donuts here and stuff your greedy face"
        />
        <script
          src="https://kit.fontawesome.com/1c7f57191b.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
    </>
  );
}
