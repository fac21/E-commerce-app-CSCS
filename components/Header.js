import styles from "./index.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.topnav}>
        <section className={styles.topnav__section}>
          <img src="" alt="LOGO" />

          <form>
            <label
              className="search-label"
              for="search"
              aria-labelledby="searchTitle"
            >
              <img src="" alt="Magnifier" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by flavour, brand..."
            />
            <input className="button" type="button" value="Search" />
          </form>

          <ul className="topnav__list">
            <li>LOG IN</li>
            <li>SIGN UP </li>
          </ul>
          <img src="" alt="BASKET" />
        </section>
      </header>
    </>
  );
}
