import image from "../assets/images/Gato 2.jpg";
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
            title="App móvil Carrera Informática Administrativa"
            content="Una aplicación que sirve como medio para informar a los estudiantes con noticias relevantes, funciona como medio de comunicación para toda la carrera, se creo como proyecto en algunas clases de la carrera."
          />          
          <Card
            Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
          <Card
            Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
          <Card
            Parametros
            image={image}
            title="Titulo"
            content="sjjdddndn jsdjsdjdsjd jsjsjdhdhdsjs hsjdhjdshdj"
          />
        </div>
      </section>
    </>
  );
}
