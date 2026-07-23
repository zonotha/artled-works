import Link from "next/link";
import Container from "./Container";

export default function ExhibitionList() {
  return (
    <section className="exhibitions-list">

      <Container>

        <p className="section-label">
          EXHIBITIONS
        </p>

        <h2>
          Three exhibitions.
          <br />
          Three conversations.
        </h2>

        <div className="exhibition-item">

          <div>

            <h3>MOYA</h3>

            <p>
              Spirit, a force of life.
            </p>

          </div>

          <Link href="/exhibitions/moya">
            Continue →
          </Link>

        </div>

        <div className="divider"></div>

        <div className="exhibition-item">

          <div>

            <h3>SELECTED WORKS</h3>

            <p>
              Portrait studies celebrating African beauty,
              identity and feminine presence.
            </p>

          </div>

          <Link href="#">
            Continue →
          </Link>

        </div>

        <div className="divider"></div>

        <div className="exhibition-item">

          <div>

            <h3>TALES</h3>

            <p>
              Stories carried through portraiture.
            </p>

          </div>

          <Link href="#">
            Continue →
          </Link>

        </div>

      </Container>

    </section>
  );
}
