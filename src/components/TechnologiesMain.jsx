import styles from "../styles/technologies.module.css";
import image from "../assets/images/Gato.jpg";

export function Technologies() {
  return (
    <>
      <section className={styles.TechnologiesMain} id="Technologies">
        <h1 className="Title">Tecnologías</h1>
        <div className={styles.UnderlineTitle}></div>
        <div className={styles.GridGallery}>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
          <div>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi perferendis maiores dicta facilis deleniti!</p>
          </div>
        </div>
      </section>
    </>
  );
}
