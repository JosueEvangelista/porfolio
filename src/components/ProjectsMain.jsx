import image from "../assets/Gato 2.jpg";
import { Card } from "./CardsProjects";
import styles from "../styles/projects.module.css";

export function Projects() {
  return (
    <>
      <section className={styles.ProjectsMain} id="Projets">
        <h1 className="Title">Proyectos</h1>
        <div className={styles.UnderlineTitle}></div>
        <div className={styles.CardsProjects}>
          <Card
            //Parametros
            image={image} 
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
          <Card
            //Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
          <Card
            //Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
          <Card
            //Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
        </div>
      </section>
    </>
  );
}