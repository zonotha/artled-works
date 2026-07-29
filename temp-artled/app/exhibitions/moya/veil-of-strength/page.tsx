import Description from "@/components/Description";
import NextRoom from "@/components/NextRoom";
import { artworks } from "@/data/artworks";
import WallLabel from "@/components/WallLabel";
import ArtworkHero from "@/components/EntranceWall.tsx";
import Reflection from "@/components/Reflection";
export default function VeilOfStrength() {
    const artwork = artworks.veilOfStrength;
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
      orientation="landscape"
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

  Veil of Strength is the opening work of MOYA.
  It introduces the quiet tension between
  concealment and revelation, asking what is
  hidden, what is protected, and what chooses
  to be seen.

</Reflection>

      <NextRoom
        href="/exhibitions/moya/veil-of-strength-monochrome"
        background={artwork.backgrounds.nextRoom}
      />
    </main>
  );
}
