import styles from "./index.module.css";

export default function Header() {
  return (
    <>
      <header>
        <section className="main__header">
          <img className="logo" src="logo.png" alt="LOGO" />
          <form>
            <label
              className="search-label"
              for="search"
              aria-labelledby="searchTitle"
            >
              {/* <img src="" alt="" /> */}
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by flavour, brand..."
            />
            <input className="button" type="button" value="Search" />
          </form>

          <div className="topnav__list">
            <div>LOG IN / SIGN UP</div>
          </div>
          <img src="" alt="BASKET" />
        </section>
        <section className="search__bar">
            <div>Vegan</div>
            <div>Min Price</div>
            <div>Max Price</div>
          <hr></hr>
        </section>
      </header>
    </>
  );
}
