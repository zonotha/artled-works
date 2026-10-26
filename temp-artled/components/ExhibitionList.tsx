import "./ExhibitionList.css";
import Link from "next/link";
import Container from "./Container";

export default function ExhibitionList() {
  return (
    <main className="exhibitions-page">

      {/* HERO */}
      <section className="exhibitions-hero">
        <header className="exhibitions-nav">
          <Link href="/" className="exhibitions-brand">
            ARTLED WORKS
          </Link>
        </header>

        <div className="exhibitions-hero-content">
          <p className="section-label">EXHIBITIONS</p>

          <h1>
            Conversations
            <br />
            in form.
          </h1>

          <p className="hero-description">
            Exhibitions are spaces for looking,
            feeling and seeing something differently.
            Each one offers another way into the work.
          </p>

          <div className="hero-rule" />
        </div>
      </section>

      {/* EXHIBITIONS */}
      <section className="exhibitions-body">
        <Container>

          <div className="exhibitions-intro">
            <p className="body-label">THE WORK IN CONTEXT</p>

            <h2>
              Where the work
              <br />
              meets the viewer.
            </h2>

            <p>
              Each exhibition creates its own conversation
              around the work — bringing together portraiture,
              identity, presence and the stories carried within
              them.
            </p>
          </div>

          <div className="exhibition-feature">

            <div className="exhibition-number">
              Exhibition I
            </div>

            <div className="exhibition-copy">
              <p className="body-label">EXHIBITION</p>

              <h3>MOYA</h3>

              <p className="exhibition-tag">
                Spirit, a force of life.
              </p>

              <p className="exhibition-description">
                An exploration of spirit, presence and
                the forces that move through us.
              </p>

              <Link
                href="/exhibitions/moya"
                className="exhibition-link"
              >
                <span>Enter Exhibition</span>
                <span>→</span>
              </Link>
            </div>

          </div>

          <div className="exhibition-divider" />

          <div className="exhibition-feature">

            <div className="exhibition-number">
              Exhibition II
            </div>

            <div className="exhibition-copy">
              <p className="body-label">EXHIBITION</p>

              <h3>SELECTED WORKS</h3>

              <p className="exhibition-tag">
                Portrait, identity and feminine presence.
              </p>

              <p className="exhibition-description">
                A gathering of works celebrating African
                beauty, identity and the many expressions
                of feminine presence.
              </p>

              <Link
                href="/exhibitions/selected-works"
                className="exhibition-link"
              >
                <span>Enter Exhibition</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </Container>
      </section>

      {/* CLOSING */}
      <section className="exhibitions-close">
        <div className="close-content">
          <p className="section-label">ARTLED WORKS</p>

          <h2>
            Every exhibition
            <br />
            opens another way
            <br />
            of seeing.
          </h2>

          <div className="hero-rule" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="exhibitions-footer">
        <Link href="/">ARTLED WORKS</Link>
      </footer>

    </main>
  );
}
