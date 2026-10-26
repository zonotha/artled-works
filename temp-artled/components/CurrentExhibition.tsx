"use client";

import { useRef, useState } from "react";
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
  href: "/exhibitions/moya",
  className: "landscape",
},

  {
  title: "Veil of Strength",
  subtitle: "Monochrome",
  image: "/artworks/moya/veil-of-strength-monochrome.png",
  href: "/exhibitions/moya",
  className: "landscape",
},

  {
    title: "Thula Moya",
    image: "/artworks/moya/thula-moya.png",
    href: "/exhibitions/moya",
  },
  {
    title: "Where the Flame Lives",
    image: "/artworks/moya/where-the-flame-lives.png",
    href: "/exhibitions/moya",
  },
  {
    title: "Umthandazi",
    image: "/artworks/moya/umthandazi.png",
    href: "/exhibitions/moya",
  },
  {
    title: "Indawo YoMoya",
    image: "/artworks/moya/indawo-yomoya.png",
    href: "/exhibitions/moya",
  },
];

export default function CurrentExhibition() {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!ribbonRef.current) return;

    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = ribbonRef.current.scrollLeft;

    ribbonRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !ribbonRef.current) return;

    const distance = event.clientX - dragStartX.current;

    ribbonRef.current.scrollLeft = scrollStart.current - distance;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

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

        <div className="moya-ribbon-wrapper">
          <button
            type="button"
            className="moya-arrow moya-arrow-left"
            onClick={() => {
              ribbonRef.current?.scrollBy({
                left: -380,
                behavior: "smooth",
              });
            }}
            aria-label="Previous MOYA artwork"
          >
            ←
          </button>

          <div
            ref={ribbonRef}
            className="moya-ribbon"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {works.map((work) => (
              <Link
                key={work.image}
                href={work.href}
                className="moya-piece"
              >
                <div className={`moya-piece-image ${work.className ?? ""}`}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="320px"
                    className="moya-image"
                  />
                </div>

                <div className="moya-piece-title">
                  <span>{work.title}</span>
                  {work.subtitle && <small>{work.subtitle}</small>}
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="moya-arrow moya-arrow-right"
            onClick={() => {
              ribbonRef.current?.scrollBy({
                left: 380,
                behavior: "smooth",
              });
            }}
            aria-label="Next MOYA artwork"
          >
            →
          </button>
        </div>

        <div className="moya-gallery-cta">
          <p className="moya-gallery-cta-subtitle">
            discover the wider collection
          </p>

          <Button href="/exhibitions">
            Enter Gallery <span>→</span>
          </Button>
        </div>

      </Container>
    </section>
  );
}