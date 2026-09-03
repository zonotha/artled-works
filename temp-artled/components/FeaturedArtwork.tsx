import Link from "next/link";
import Container from "./Container";

export default function FeaturedArtwork() {
  return (
    <section className="featured">
      <Container>
        <p className="section-label">FEATURED ARTWORK</p>

        <h2>The Awakening</h2>

        <p className="featured-tag">
          Transformation begins in the unseen.
        </p>

        <p className="featured-description">
          Becoming is rarely sudden. It unfolds quietly through movement, choice
          and alignment. This piece captures the space between who we have been
          and who we are becoming.
        </p>

        <Link href="/awakening" className="featured-story-link">
          <span>Read the Story</span>
          <span className="featured-story-arrow">→</span>
        </Link>
      </Container>
    </section>
  );
}
