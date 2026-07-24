import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <Navbar />

<section className="hero">
  <div className="hero-layout">

    <div className="hero-content">
        <p className="eyebrow">ART BY ZONOTHA ZWANE</p>

           <h1>
            ARTLED
            <br />
            WORKS
           </h1>

           <p className="tagline">
            Portraits that invite you
            <br />
            to look beyond the visible.
           </p>

           <Button href="/exhibitions">
             Enter Gallery <span>→</span>
           </Button>
          </div>

        <div className="hero-artwork">
         <Image
         src="/artworks/the-awakening.png"
         alt="The Awakening"
         fill
         priority
         className="hero-image"
        />
    </div>

  </div>
</section>
    </>
  );
}
