import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function Umthandazi() {
  const artwork = artworks.umthandazi;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: artwork.backgrounds.hero,
      }}
    >
      
      <ArtworkHero
        image={artwork.image}
        title={artwork.title}
        background={artwork.backgrounds.hero}
      />
      
      <WallLabel
        title={artwork.title}
        medium={artwork.medium}
        year={artwork.year}
        dimensions={artwork.dimensions}
        tag={artwork.tag}
        background={artwork.backgrounds.label}
      />      

      <Description background={artwork.backgrounds.description}>
        {artwork.description}
      </Description>
      
      <Reflection
        title="Reflection"
        background={artwork.backgrounds.reflection}
      >
        <p>
          Some prayers are never spoken aloud.
        </p>

        <p>
          They are carried in the quiet devotion of those
          who came before us, woven into everyday acts of
          faith, love and sacrifice.
        </p>

        <p>
          Umthandazi honours the spiritual pillars of our
          lives—the mothers, grandmothers and elders whose
          prayers became an unseen inheritance, shaping us
          long before we understood the strength they were
          giving us.
        </p>
      </Reflection>

      <NextRoom
        href="/exhibitions/moya/indawo-yomoya"
        background={artwork.backgrounds.nextRoom}
      />
    </main>
  );
}
