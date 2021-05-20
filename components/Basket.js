export default function Basket({ basket, data }) {
  console.log("basket page", basket);
  const basketArray = []
  for (const donut in basket) {
    if (basket[donut] > 0) {
      basketArray.push((<div><h1>{donut}</h1><p>{basket[donut]}</p></div>))
    }
  }
  return (
    <>
      {basketArray}
    </>
  );
}
