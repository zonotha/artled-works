import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function VeilOfStrengthMonochrome() {
  const artwork = artworks.veilOfStrengthMonochrome;

  return (
        <main
          style={{
            minHeight: "100vh",
            background: "#F8F5F2",
          }}
        >
        <ArtworkHero
          image={artwork.image}
          title={artwork.title}
          medium={artwork.medium}
          year={artwork.year}
          orientation="landscape"
/>
    
        <WallLabel
          title={artwork.title}
          medium={artwork.medium}
          year={artwork.year}
          dimensions={artwork.dimensions}
          tag={artwork.tag}
        />

      <Description>{artwork.description}</Description>

      <Reflection title="Reflection">
        <p>
          As a companion to <em>Veil of Strength</em>, this monochrome portrait
          shifts the conversation from colour to presence.
        </p>

        <p>
          Without the symbolism of blue, the gaze carries the work alone,
          inviting a quieter encounter with identity, resilience, and spirit.
        </p>
      </Reflection>

      <NextRoom href="/exhibitions/moya/thula-moya" />
    </main>
  );
}
