import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function WhereTheFlameLives() {
  const artwork = artworks.whereTheFlameLives;

  return (
    <main>
      <ArtworkHero
        image={artwork.image}
        title={artwork.title}
        medium={artwork.medium}
        year={artwork.year}
        scale={1.08}
      />
      <WallLabel title={artwork.title} medium={artwork.medium} year={artwork.year} dimensions={artwork.dimensions} tag={artwork.tag} />
      <Description>{artwork.description}</Description>

      <Reflection title="Reflection">
        <p>
          Every spirit carries a light.
        </p>

        <p>
          Some flames illuminate the path ahead.
          Others simply remind us not to lose our way.
        </p>

        <p>
          Where the Flame Lives is a meditation on the quiet work of hope.
          It is the strength to protect what cannot be replaced, the tenderness
          to nurture what still burns, and the faith to believe that even the
          smallest light can endure the darkest night.
        </p>
      </Reflection>

      <NextRoom href="/exhibitions/moya/umthandazi" />
    </main>
  );
}
