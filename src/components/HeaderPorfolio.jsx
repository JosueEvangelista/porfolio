import { Nav } from "./NavHeader";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.HeaderPorfolio}>
        <Nav />
      </header>
    </>
  );
}
