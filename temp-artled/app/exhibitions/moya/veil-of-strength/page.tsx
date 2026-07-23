import Description from "@/components/Description";
import NextRoom from "@/components/NextRoom";
import { artworks } from "@/data/artworks";
import WallLabel from "@/components/WallLabel";
import ArtworkHero from "@/components/EntranceWall.tsx";
import MotionSection from "@/components/MotionSection";
import Reflection from "@/components/Reflection";
export default function VeilOfStrength() {
    const artwork = artworks.veilOfStrength;
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#F8F5F2",
      }}
    >
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
            Exhibition Statement
        </p>

        <h2>
            MOYA
        </h2>

        <p className="transition-text">

            MOYA is an exploration of spirit,
            memory and becoming.

            It invites the viewer into a quiet
            conversation where portraiture
            becomes more than representation—
            it becomes presence.

            Each work carries a fragment of
            an inward journey.

        </p>

    </div>

 </section>

</MotionSection>

<Reflection title="Reflection">

  Veil of Strength is the opening work of MOYA.
  It introduces the quiet tension between
  concealment and revelation, asking what is
  hidden, what is protected, and what chooses
  to be seen.

</Reflection>

    <NextRoom

      href="/exhibitions/moya/veil-of-strength-monochrome"

    />

    </main>
  );
}

