import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall";
import Reflection from "@/components/Reflection";
import WallLabel from "@/components/WallLabel";
import NextRoom from "@/components/NextRoom";

export default function IndawoYomoya() {
  const artwork = artworks.indawoYomoya;

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
 
      <Description>
         {artwork.description}
       </Description>
       
       <Reflection
         title="Reflection"
       >
        <p>
          Every journey eventually returns
          to where it first began.
        </p>

        <p>
          Some beginnings announce themselves.
          Others wait patiently until we are ready
          to recognise them.
        </p>

        <p>
          Perhaps the place of spirit was never
          somewhere we had to find—
          only somewhere we had to remember.
        </p>
      </Reflection>

      <NextRoom
        href="/exhibitions"
        background={artwork.backgrounds.nextRoom}
        label="Return to Exhibitions"
      />
    </main>
  );
}
