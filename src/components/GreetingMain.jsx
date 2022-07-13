import styles from "../styles/greeting.module.css";

export function Greating() {
  return (
    <section className={styles.GreetingMain} id="Greeting">
      <div className={styles.Greeting}>
        <div className={styles.ColumGreeting}>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur.</h2>
        </div>
        {/* <div className={styles.ColumPhoto}>
          <img src={Gato} alt="" className={styles.Photo} /> 
        </div> */}
      </div>
    </section>
  );
}
