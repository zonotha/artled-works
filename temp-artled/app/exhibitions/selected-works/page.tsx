import Link from "next/link";
import MagazineSpread from "@/components/MagazineSpread";
import { selectedWorks } from "@/data/artworks";

export default function SelectedWorksPage() {
  return (
    <main>

      {/* HERO */}

<section
  className="exhibition-intro"
  style={{
    background: "#1B1B1A",
    minHeight: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "40px 8% 35px",
  }}
>
  <div
    className="exhibition-intro-content"
    style={{
      maxWidth: "1100px",
      width: "100%",
    }}
  >
    <p
      className="section-label"
      style={{
        color: "#A8A6A1",
        letterSpacing: "0.3em",
        fontSize: "0.66rem",
        textTransform: "uppercase",
        marginBottom: "22px",
      }}
    >
      EXHIBITION II
    </p>

    <h1
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(3.1rem, 6vw, 5.5rem)",
        fontWeight: 400,
        lineHeight: 1.05,
        letterSpacing: "-0.025em",
        color: "#F3F0EB",
        margin: 0,
      }}
    >
      Portraits of Presence
    </h1>

    <p
      className="intro-subtitle"
      style={{
        maxWidth: "600px",
        margin: "24px auto 0",
        fontSize: "0.96rem",
        lineHeight: 1.8,
        color: "#B8B6B1",
      }}
    >
      A curated collection exploring identity,
      presence, memory and beauty.
    </p>
  </div>
</section>


{/* STATEMENT */}

<section
  className="exhibition-statement"
  style={{
    background:
      "linear-gradient(to bottom, #1B1B1A 0%, #292927 25%, #5A5956 52%, #BDBAB5 75%, #F8F5F2 100%)",
    padding: "42px 8% 68px",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "1050px",
      margin: "0 auto",
    }}
  >
    <p
      className="statement-label"
      style={{
        color: "#C2BFBA",
        letterSpacing: "0.25em",
        fontSize: "0.66rem",
        textTransform: "uppercase",
        marginBottom: "24px",
      }}
    >
      CURATORIAL STATEMENT
    </p>

    <h2
      className="statement-subtitle"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(1.9rem, 3.6vw, 3.1rem)",
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#F2EFEB",
        margin: "0 auto 34px",
        maxWidth: "1000px",
      }}
    >
      Some portraits belong to a single story.
      <br />
      Others continue speaking long after the exhibition ends.
    </h2>

    <div
      className="statement-text"
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        color: "#2A2927",
        fontSize: "0.98rem",
        lineHeight: 1.85,
      }}
    >
      <p style={{ margin: 0 }}>
        These works celebrate African presence through portraiture,
        exploring elegance, resilience and humanity as individual
        expressions rather than a single narrative.
      </p>
    </div>
  </div>
</section>

      {/* MAGAZINE */}

      <section>
        {selectedWorks.map((artwork, index) => (
          <MagazineSpread
            key={artwork.title}
            title={artwork.title}
            medium={artwork.medium}
            year={artwork.year}
            image={artwork.image}
            background={artwork.backgrounds.hero}
            reverse={index % 2 !== 0}
            imageScale={artwork.title === "Shades of Cleopatra" ? 1.12 : 1}
>

            <p>{artwork.tag}</p>

            <br />

            <p style={{ whiteSpace: "pre-line" }}>
  {artwork.description}
</p>
          </MagazineSpread>
        ))}
      </section>

      {/* BACK TO EXHIBITIONS */}

  <section
    style={{
      background: "#F8F5F2",
      textAlign: "center",
      padding: "85px 0 100px",
    }}
  >
  <Link
    href="/exhibitions"
    className="next-room-button"
    style={{
      color: "#2A2927",
      borderColor: "#2A2927",
    }}
  >
    Back to Exhibitions
  </Link>
</section>

    </main>
  );
}