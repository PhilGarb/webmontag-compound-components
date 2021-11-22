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
        <Heading>Vorteile</Heading>
        <List>
          <li>
            Die einzelnen Components erhalten jeweils die für sie relevanten
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
          <li>Die Implementation des Accordions wird komplexer.</li>
        </List>
      </Notes>
    </Slide>
  );
}
