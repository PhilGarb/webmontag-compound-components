import { HTMLAccordion } from "../CodeExamples/HTMLAccordion";
import { Notes } from "../components/Notes/Notes";
import { Heading, List, Slide, Text } from "../components/Slide/Slide";
import "../styles/HTMLAccordion.css";

export function HTMLAccordionSlide() {
  return (
    <>
      <Slide>
        <HTMLAccordion />
      </Slide>
      <Notes>
        <Heading>Anforderungen</Heading>
        <Text>Einfaches Verstecken und Offenlegen von Informationen.</Text>
        <Heading>Vorteile</Heading>
        <List>
          <li>Code ist einfach zu verstehen</li>
          <li>
            Der Children Inhalt des jeweiligen Elements steht innerhalb der
            Klammern
          </li>
          <li>Props lassen sich an der geeigneten Stelle vergeben</li>
          <li>Schnelle Implementation</li>
          <li>Einheitliches Interaktionspattern</li>
        </List>
        <Heading>Nachteile</Heading>
        <List>
          <li>Begrenzte Funktionalität</li>
          <li>Keine Verbindung zwischen den einzelnen Elementen</li>
          <li>
            Nicht direkt erweiterbares Interaktionspattern
            <a
              style={{ display: "block" }}
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction"
            >
              ARIA Spezifikation
            </a>
          </li>
        </List>
      </Notes>
    </>
  );
}
