import React from "react";

export default function Donuts({ data }) {
  const basket = {};
  function addDonut(event) {
    let donutName = event.target.className;
    basket[donutName] ? basket[donutName]++ : (basket[donutName] = 1);
    console.log(basket);
  }

  const donutArray = data.map((donut) => {
    return (
      <div key={donut.id}>
        <h1 className="donut__name">{donut.name}</h1>
        <img
          className="donut__image"
          src={donut.image}
          alt={"picture of " + donut.name + " donut"}
        />
        <p className="donut__description">{donut.description}</p>
        <p className="donut__price">£{donut.price.toFixed(2)}</p>
        <button className={donut.name} onClick={addDonut}>
          Gimme a Donut
        </button>
      </div>
    );
  });
  return <>{donutArray}</>;
}
