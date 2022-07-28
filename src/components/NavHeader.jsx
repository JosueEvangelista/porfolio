import styles from "../styles/nav.module.css";
import { FaBars } from "react-icons/fa";

export function Nav() {

  function showListNav(){
    console.log('evento click');
  }

  return (
    <nav className={styles.NavHeader}>
      <button className={styles.BtnNav} onClick={()=>{showListNav()}}><FaBars className={styles.IconBtn}/></button>
      <ul className={styles.ListNav}>
        <li className={styles.ItemList}>
          <a href="#Greeting">Inicio</a>
        </li>
        <li className={styles.ItemList}>
          <a href="#AboutMe">Sobre mi</a>
        </li>
        <li className={styles.ItemList}>
          <a href="#Technologies">Tecnologías</a>
        </li>
        <li className={styles.ItemList}>
          <a href="#Projets">Proyectos</a>
        </li>
        <li className={styles.ItemList}>
          <a href="#Contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
