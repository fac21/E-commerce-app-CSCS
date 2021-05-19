
export default function Donuts({ data }) {
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
