export default function Basket({ basket, data }) {
  console.log("basket page", basket);
  const basketArray = [];
  let sum = 0;

  for (const donut in basket) {
    if (basket[donut] > 0) {
      sum += basket[donut];

      basketArray.push(
        <div>
          <p>
            {donut} <span>{basket[donut]}</span>
          </p>
        </div>
      );
    }
  }
  return (
    <>
      {basketArray} <h3>Total items {sum} </h3>
    </>
  );
}
