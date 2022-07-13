import { AboutMe } from "./AboutMeMain";
import { Contact } from "./ContactMain";
import { Greating } from "./GreetingMain";
import { Projects } from "./ProjectsMain";
import { Technologies } from "./TechnologiesMain";


export function Main() {
  return (
    <>
      <main>
        <Greating />
        <AboutMe/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}
