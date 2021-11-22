import { Link, Slide, Text, Title } from "../components/Slide/Slide";

export function Intro() {
  return (
    <Slide style={{ position: "relative" }}>
      <Title
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ textDecoration: "underline" }}>Hallo!</span>{" "}
        <span style={{ fontSize: "1.3em" }}>👋</span>
      </Title>

      <Text>
        Ich bin Philipp Garbowsky. <br /> Frontend Webentwickler aus Göttingen.
      </Text>
      <Text style={{ marginBottom: "5px" }}>
        Ich arbeite für den Open Legal Tech e.V. an Open Decision.
        <Link href="https://open-decision.org">open-decision.org</Link>
        <Link href="https://github.com/open-legal-tech/open-decision">
          github.com/open-legal-tech/open-decision
        </Link>
      </Text>
    </Slide>
  );
}
