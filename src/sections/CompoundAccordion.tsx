import {
  Accordion,
  CompoundAccordion,
  Item,
} from "../CodeExamples/CompoundAccordion";
import { Notes } from "../components/Notes/Notes";
import { Heading, List, Slide } from "../components/Slide/Slide";
import { body } from "./shared";

export function CompoundAccordionSlide() {
  return (
    <Slide style={{ height: "100%" }}>
      <CompoundAccordion />
      <Notes>
        <Heading>Anforderungen</Heading>
        <List>
          <li>
            Nach einiger Zeit soll die erste Section prominienter gestaltet
            werden, da sie die wichtigsten Informationen enthält.
          </li>
          <li>
            Unsere bisherige Implementation hat keine Möglichkeit nur dem ersten
            Abschnitt props mitzugeben.
          </li>
          <li>Es macht daher Sinn das Akkordion aufzusplitten.</li>
        </List>
        <Heading>Vorteile</Heading>
        <List>
          <li>
            Die einzelnen Komponenten erhalten jeweils die für sie relevanten
            props.
          </li>
          <li>
            Da wir die items nicht mehr in einem separaten Objekt lagern müssen
            verbessert sich die Lesbarkeit des Markups.
          </li>
          <li>
            Die Implementation des Item könnte vom Nutzer ersetzt werden, da man
            Zugriff auf die State Informationen hat.
          </li>
        </List>
        <Heading>Nachteile</Heading>
        <List>
          <li>Die Implementation des Akkordions wird komplexer.</li>
        </List>
      </Notes>
    </Slide>
  );
}
