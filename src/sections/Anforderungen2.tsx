import { List, Slide, Text, Title } from "../components/Slide/Slide";

export function Anforderungen2() {
  return (
    <Slide>
      <Title>Neue Anforderungen</Title>
      <List>
        <li>Einzelne Abschnitte des Accordions sind sehr lang.</li>
        <li>
          Damit der Nutzer nicht von so viel Text überwältigt wird soll immer
          nur ein Abschnitt gleichzeitig geöffnet sein.
        </li>
        <li>
          Klickt der Nutzer auf einen neuen Abschnitt dann sollen sich alle
          anderen schließen.
        </li>
      </List>
    </Slide>
  );
}
