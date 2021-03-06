import {
  Heading,
  LargeText,
  Slide,
  Text,
  Title,
} from "../components/Slide/Slide";

export function Result() {
  return (
    <Slide>
      <Title>Ergebnis</Title>
      <Text>
        Das Compound Component Pattern bedeutet die Einzelteile eines komplexen
        Components separat bereitzustellen.
      </Text>
      <Text>
        Durch das implizite Teilen des States der Components untereinander
        vermeiden wir kompliziertes Markup.
      </Text>
      <Text>
        Gleichzeitig verbessern wir die Verständlichkeit der API, da props
        direkt an die jeweils verantwortlichen Components gegeben werden können.
      </Text>
      <Heading>Trade-Off</Heading>
      <Text>
        Die Implementation als Compound Component ist etwas komplexer.
      </Text>
    </Slide>
  );
}
