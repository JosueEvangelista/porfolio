import styles from "../styles/aboutMe.module.css";
import image from "../assets/Gato.jpg";

export function AboutMe() {
  return (
    <>
      <section className={styles.AboutMeMain} id="AboutMe">          
        <div className={styles.AboutMe}>          
          <div className={styles.ColumImage}>
            <img src={image} alt="" />
          </div>
          <div className={styles.ColumAboutMe}>
            <h1>About Me</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ab!
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              sunt deleniti, est quos voluptatem deserunt. Culpa earum natus
              odio dignissimos saepe dolorum, voluptate dicta voluptatem!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
