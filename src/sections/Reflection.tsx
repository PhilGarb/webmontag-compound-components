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
          Wir haben allerdings etwas verloren.
          <br />
          <span>
            Indem wir die Abschnitte des Akkordions in die Komponente
            abstrahiert haben, ist es nun schwieriger mit diesen Komponenten zu
            interagieren. Das war in der HTML Variante besser gelöst.
          </span>
        </li>
        <li>
          Ein Beispiel dafür ist die itemClassName prop des Akkordions.
          <br />
          <span>
            Obwohl diese für das Akkordion irrelevant ist müssen wir sie über
            das Akkordion an die Abschnitte weitergeben.
          </span>
        </li>
      </List>
      <Heading>Neues Ziel</Heading>
      <LargeText>
        Wir wollen stattdessen erreichen die aktive Kontrolle des Akkordions mit
        dem Nesting der Komponenten wie bei der HTML Implementation zu
        kombinieren.
      </LargeText>
    </Slide>
  );
}
