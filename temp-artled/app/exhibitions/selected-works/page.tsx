import Link from "next/link";
import MagazineSpread from "@/components/MagazineSpread";
import { artworks } from "@/data/artworks";

export default function SelectedWorksPage() {
  return (
    <main>

      {/* HERO */}

      <section className="exhibition-intro">
        <div className="exhibition-intro-content">

          <p className="section-label">
            EXHIBITION II
          </p>

          <h1>Portraits of Presence</h1>

          <p className="intro-subtitle">
            A curated collection exploring identity,
            presence, memory and beauty.
          </p>

        </div>
      </section>

      {/* STATEMENT */}

      <section className="exhibition-statement">

        <p className="statement-label">
          CURATORIAL STATEMENT
        </p>

        <h2 className="statement-subtitle">
          Some portraits belong to a single story.
          <br />
          Others continue speaking long after the exhibition ends.
        </h2>

        <div className="statement-text">

          <p>
            Beauty is never singular.
          </p>

          <br />

          <p>
            Identity is never fixed.
          </p>

          <br />

          <p>
            Strength often reveals itself quietly.
          </p>

          <br />

          <p>
            These works celebrate African presence through portraiture,
            exploring elegance, resilience and humanity as individual
            expressions rather than a single narrative.
          </p>

        </div>

      </section>

      {/* MAGAZINE START */}

      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F8F5F2",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 400,
            letterSpacing: ".08em",
          }}
        >
          Shades of Cleopatra
        </h2>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "120px 0",
        }}
      >
        <Link
          href="/exhibitions"
          className="next-room-button"
        >
          Back to Exhibitions
        </Link>
      </section>

    </main>
  );
}