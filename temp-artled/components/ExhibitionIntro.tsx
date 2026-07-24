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
        <div className="exhibition-intro-content">

          <p className="section-label">
            EXHIBITION
          </p>

          <h1>{title}</h1>

          <p className="intro-subtitle">
            {subtitle}
          </p>

          <div className="intro-divider" />

          <p className="intro-statement">
            {statement}
          </p>

          <Button href={buttonHref}>
            {buttonText}
          </Button>

        </div>
      </Container>
    </section>
  );
}