import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedArtwork from "@/components/FeaturedArtwork";
import CurrentExhibition from "@/components/CurrentExhibition";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArtwork />
      <CurrentExhibition />
    </>
  );
}
