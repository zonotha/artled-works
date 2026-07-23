import Container from "./Container";
import Button from "./Button";

type Props = {
  title: string;
  subtitle: string;
  statement: string;
  buttonText: string;
  buttonHref: string;
};

export default function ExhibitionIntro({
  title,
  subtitle,
  statement,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <section className="exhibition-intro">

      <Container>

        <p className="section-label">
          EXHIBITION
        </p>

        <h1>{title}</h1>

        <p className="intro-subtitle">
          {subtitle}
        </p>

        <p className="intro-statement">
          {statement}
        </p>

        <Button href={buttonHref}>
          {buttonText}
        </Button>

      </Container>

    </section>
  );
}
