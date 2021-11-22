import { FirstReactAccordion } from "../CodeExamples/FirstReactAccordion";
import { Notes } from "../components/Notes/Notes";
import { Heading, List, Slide } from "../components/Slide/Slide";

export function FirstReactAccordionSlide() {
  return (
    <Slide style={{ height: "100%" }}>
      <FirstReactAccordion />
      <Notes>
        <Heading>Anforderungen</Heading>
        <List>
          <li>Einzelne Abschnitte des Akkordions sind sehr lang.</li>
          <li>
            Damit der Nutzer nicht von so viel Text überwältigt wird soll immer
            nur ein Abschnitt gleichzeitig geöffnet sein.
          </li>
          <li>
            Klickt der Nutzer auf einen neuen Abschnitt dann sollen sich alle
            anderen schließen.
          </li>
        </List>
        <Heading>Umsetzung</Heading>
        <List>
          <li>
            Indem wir den State aktiv kontrollieren können wir die
            Funktionalität leicht hinzufügen.
          </li>
          <li>
            Da das Akkordion den open state kontrolliert senden wir die
            einzelnen Abschnitte als items prop. Die css class die wir vorher
            direkt in die summary elemente geschrieben haben wird nun als
            itemClassName prop über das Akkordion an die Abschnitte
            weitergegeben.
          </li>
        </List>
      </Notes>
    </Slide>
  );
}
