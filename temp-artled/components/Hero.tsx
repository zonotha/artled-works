import Navbar from "./Navbar";
import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <Container>
          <div className="hero-content">
            <p className="eyebrow">ART BY ZONOTHA ZWANE</p>

            <h1>
              ARTLED
              <br />
              WORKS
            </h1>

            <p className="tagline">
              Portraits that invite you
              <br />
              to look beyond the visible.
            </p>

            <Button href="/exhibitions">
             Enter Gallery
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
