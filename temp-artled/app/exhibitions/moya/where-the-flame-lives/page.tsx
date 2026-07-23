import Description from "@/components/Description";
import { artworks } from "@/data/artworks";
import ArtworkHero from "@/components/EntranceWall.tsx";
import MotionSection from "@/components/MotionSection";
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
              In cupped hands, a single flame burns.
              Not for the world, but from within.
            </p>
          </div>
        </section>
      </MotionSection>

      <Reflection title="Reflection">
        <p>
          Every spirit carries a light.
          
          Some burn brightly for the world to see.
          
          Others burn quietly, for the world to feel.
        
          Where the Flame Lives reminds us that hope is not always loud—it often survives because someone chose to shelter it.
        
        </p>
      </Reflection>

      <NextRoom href="/exhibitions/moya/umthandazi" />
    </main>
  );
}
