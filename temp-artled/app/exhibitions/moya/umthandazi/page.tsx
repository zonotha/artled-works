import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import MotionSection from "@/components/MotionSection";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function Umthandazi() {
  const artwork = artworks.umthandazi;

  return (
    <main>
      <ArtworkHero
        image={artwork.image}
        title={artwork.title}
        medium={artwork.medium}
        year={artwork.year}
      />

      <WallLabel
        title={artwork.title}
        medium={artwork.medium}
        year={artwork.year}
        dimensions={artwork.dimensions}
        tag={artwork.tag}
      />

      <Description>{artwork.description}</Description>

      <MotionSection>
        <section className="transition-room">
          <div className="transition-content">
            <p className="transition-label">Reflection</p>

            <h2>The Quiet Within</h2>

            <p className="transition-text">
              This portrait moves between stillness and prayer.
              It traces breath as a gesture of resilience,
              inviting a gentle, sustained attention.
            </p>
          </div>
        </section>
      </MotionSection>

      <Reflection title="Reflection">
        <p>
          Some prayers are never heard aloud.
          
          They are carried in the quiet devotion of those who came before us.

          Umthandazi honours the unseen labour of faith—where love, sacrifice and prayer become an inheritance passed gently from one generation to the next.
          
          Some spirits shape us long before we understand their gifts.
        </p>
      </Reflection>

      <NextRoom href="/exhibitions/moya/indawo-yomoya" />
    </main>
  );
}
