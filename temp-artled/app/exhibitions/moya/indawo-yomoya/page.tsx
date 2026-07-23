import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import MotionSection from "@/components/MotionSection";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";

export default function IndawoYomoya() {
    const artwork = artworks.indawoYomoya;
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

            <p className="transition-label">
              Reflection
            </p>

            <h2>
              The Quiet Within
            </h2>

            <p className="transition-text">

              When colour disappears,
              presence remains.

              The veil no longer speaks through
              movement, but through silence.

              What remains is not absence—
              but essence.

            </p>

          </div>

        </section>

      </MotionSection>

      <Reflection title="Reflection">

        <p>

          Every journey eventually returns to where it first began.

          Some beginnings announce themselves.

          Others wait patiently until we are ready to recognise them.
          
          Perhaps the place of spirit was never somewhere to find— only somewhere to remember

        </p>

      </Reflection>

    </main>
  );
}
