import styles from "../styles/contact.module.css";
import { FaRegPaperPlane } from "react-icons/fa";

export function Contact() {
  return (
    <>
      <section className={styles.ContactMain} id="Contact">
        <h1 className="Title">Contáctame</h1>
        <div className={styles.UnderlineTitle}></div>
        <form action="" method="post">
          <div className={styles.FormElement}>
            <div className={styles.FormName}>
              {/* <label>Nombre: </label> */}
              <input type="Text" placeholder="Nombre" />
            </div>
            <div className={styles.FormMail}>
              {/* <label>Correo electrónico: </label> */}
              <input type="Text" placeholder="Correo Electrónico" />
            </div>
            <div className={styles.FormMessage}>
              {/* <label>Descripción: </label> */}
              <textarea rows="6" wrap="soft" placeholder="Mensaje"></textarea>
            </div>
            <button type="submit" className={styles.FormBotton}>
              Enviar <FaRegPaperPlane className={styles.IconBotton}/>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
