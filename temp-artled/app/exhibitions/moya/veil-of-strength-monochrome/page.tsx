import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import MotionSection from "@/components/MotionSection";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function VeilOfStrengthMonochrome() {
    const artwork = artworks.veilOfStrengthMonochrome;
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

          The monochrome version of
          <em> Veil of Strength </em>
          invites the viewer beyond appearance.

          Without colour, the work asks us
          to encounter emotion in its
          purest form.

        </p>

      </Reflection>

    <NextRoom
       href="/exhibitions/moya/thula-moya"
    />

    </main>
  );
}

