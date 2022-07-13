import styles from "../styles/footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className={styles.FooterPorfolio}>
        <div className={styles.SocialFooter}>
          <a href="">
            <div className={styles.BoxIconFooter}>
              <FaFacebookF className={styles.Icon} />
            </div>
          </a>
          <a href="">
            <div className={styles.BoxIconFooter}>
              <FaLinkedinIn className={styles.Icon} />
            </div>
          </a>
          <a href="">
            <div className={styles.BoxIconFooter}>
              <FaInstagram className={styles.Icon} />
            </div>
          </a>
          <a href="">
            <div className={styles.BoxIconFooter}>
              <FaGithub className={styles.Icon} />
            </div>
          </a>
        </div>
        <div className={styles.SignFooter}>
          <h4>Josué Evangelista</h4>
          <span>© 2022</span>
        </div>
      </footer>
    </>
  );
}
