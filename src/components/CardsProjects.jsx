import styles from "../styles/card.module.css";

export function Card({ image, title, content }) {
  return (
    <>
      <div className={styles.CardContainer}>
        <div className={styles.CardHeader}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.CardBody}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
