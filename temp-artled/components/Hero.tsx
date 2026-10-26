import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
