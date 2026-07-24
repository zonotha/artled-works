import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const works: {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  className?: string;
}[] = [
  {
  title: "Veil of Strength",
  image: "/artworks/moya/veil-of-strength-digital.png",
  href: "/exhibitions/moya/veil-of-strength",
  className: "landscape",
},

  {
  title: "Veil of Strength",
  subtitle: "Monochrome",
  image: "/artworks/moya/veil-of-strength-monochrome.png",
  href: "/exhibitions/moya/veil-of-strength-monochrome",
  className: "landscape",
},

  {
    title: "Thula Moya",
    image: "/artworks/moya/thula-moya.png",
    href: "/exhibitions/moya/thula-moya",
  },
  {
    title: "Where the Flame Lives",
    image: "/artworks/moya/where-the-flame-lives.png",
    href: "/exhibitions/moya/where-the-flame-lives",
  },
  {
    title: "Umthandazi",
    image: "/artworks/moya/umthandazi.png",
    href: "/exhibitions/moya/umthandazi",
  },
  {
    title: "Indawo YoMoya",
    image: "/artworks/moya/indawo-yomoya.png",
    href: "/exhibitions/moya/indawo-yomoya",
  },
];

export default function CurrentExhibition() {
  return (
    <section className="current-exhibition">
      <Container>

        <p className="current-label">
          CURRENT EXHIBITION
        </p>

        <h2 className="current-title">
          MOYA
        </h2>

        <p className="current-intro">
          A meditation on spirit,
          <br />
          memory and becoming.
        </p>

        <div className="moya-ribbon">

          {works.map((work) => (
            <Link
              key={work.href}
              href={work.href}
              className="moya-piece"
            >

              <div className={`moya-piece-image ${work.className ?? ""}`}>

                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="moya-image"
                />

              </div>

              <div className="moya-piece-title">

                <span>{work.title}</span>

                {work.subtitle && (
                  <small>{work.subtitle}</small>
                )}

              </div>

            </Link>
          ))}

        </div>

        <Button href="/exhibitions/moya">
          View Collection <span className="hero-arrow">→</span>
        </Button>

      </Container>
    </section>
  );
}