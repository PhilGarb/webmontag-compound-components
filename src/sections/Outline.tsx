import {
  Heading,
  LargeText,
  List,
  Slide,
  Title,
} from "../components/Slide/Slide";

export function Outline() {
  return (
    <Slide>
      <Title>Vorgehen</Title>
      <LargeText>
        Wir simulieren wachsende Anforderungen an ein Akkordion. Am Ende steht
        eine wiederverwendbare Komponente.
      </LargeText>
      <Heading style={{ marginTop: "50px" }}>Ziele / Anforderungen</Heading>
      <List>
        <li>Konfigurabilität</li>
        <li>Lesbarkeit</li>
        <li>"Selbsterklärende API"</li>
      </List>
    </Slide>
  );
}
