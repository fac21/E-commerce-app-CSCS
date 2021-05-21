import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [basket, addToBasket] = React.useState({
    "Burberry Muffin": 0,
    "Dolce and Banana": 0,
    "Choco Chanel": 0,
    "Donutella Versace": 0,
    "Giorgio Almondi": 0,
    "Chewy Vuitton": 0,
  });
  return <Component basket={basket} addToBasket={addToBasket} {...pageProps} />;
}

export default MyApp;
