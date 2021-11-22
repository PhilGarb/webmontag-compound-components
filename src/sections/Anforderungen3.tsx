import { List, Slide, Title } from "../components/Slide/Slide";

export function Anforderungen3() {
  return (
    <Slide>
      <Title>Neue Anforderungen</Title>
      <List>
        <li>
          Nach einiger Zeit soll die erste Section prominienter gestaltet
          werden, da sie die wichtigsten Informationen enthält.
        </li>
        <li>
          Unsere bisherige Implementation hat keine Möglichkeit nur dem ersten
          Abschnitt props mitzugeben.
        </li>
      </List>
    </Slide>
  );
}
