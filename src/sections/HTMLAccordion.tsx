import { HTMLAccordion } from "../CodeExamples/HTMLAccordion";
import { Notes } from "../components/Notes/Notes";
import { Heading, List, Slide } from "../components/Slide/Slide";

export function HTMLAccordionSlide() {
  return (
    <>
      <Slide>
        <HTMLAccordion />
      </Slide>
      <Notes>
        <Heading>Vorteile</Heading>
        <List>
          <li>Code ist einfach zu verstehen</li>
          <li>
            Der Text des jeweiligen Elements steht innerhalb der Componente.
          </li>
          <li>Props lassen sich an der geeigneten Stelle vergeben</li>
          <li>Schnelle Implementation</li>
        </List>
        <Heading>Nachteile</Heading>
        <List>
          <li>Begrenzte Funktionalität</li>
          <li>Keine Verbindung zwischen den einzelnen Elementen</li>
        </List>
      </Notes>
    </>
  );
}
