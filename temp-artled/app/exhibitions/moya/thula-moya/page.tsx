import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function ThulaMoya() {
  const artwork = artworks.thulaMoya;

  return (
    <main>
      <ArtworkHero image={artwork.image} title={artwork.title} medium={artwork.medium} year={artwork.year} />
      <WallLabel title={artwork.title} medium={artwork.medium} year={artwork.year} dimensions={artwork.dimensions} tag={artwork.tag} />
      <Description>{artwork.description}</Description>

      <Reflection title="Reflection">
        <p>
          Eyes closed, spirit open.
        </p>

        <p>
          In stillness we often mistake silence for emptiness,
          yet it is within quietness that spirit speaks most
          clearly.

          Thula Moya invites us to rest—not in resignation,
          but in peace. It honours the strength found in
          remaining rooted in who we are, where heritage,
          memory and spirit breathe together.
        </p>
      </Reflection>

      <NextRoom href="/exhibitions/moya/where-the-flame-lives" />
    </main>
  );
}
