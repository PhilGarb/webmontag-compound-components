import {
  Heading,
  LargeText,
  List,
  Slide,
  Title,
} from "../components/Slide/Slide";

export function Reflection() {
  return (
    <Slide>
      <Title>Reflektion</Title>
      <List>
        <li>
          Wir konnten die neuen Anforderungen ohne große Schwierigkeiten
          umsetzen.
        </li>
        <li>
          Indem wir die Abschnitte des Accordions in eine Componente abstrahiert
          haben, ist es nun schwieriger mit diesen zu interagieren. Das war in
          der HTML Variante besser gelöst.
        </li>
        <li>
          Ein Beispiel dafür ist die itemClassName prop des Akkordions. Obwohl
          diese für das Accordion irrelevant ist müssen wir sie über diese an
          die Abschnitte weitergeben.
        </li>
      </List>
      <Heading>Neues Ziel</Heading>
      <LargeText>
        Wir wollen stattdessen erreichen, die aktive Kontrolle des Accordion mit
        dem Nesting der Components, wie bei der HTML Implementation, zu
        kombinieren.
      </LargeText>
    </Slide>
  );
}
