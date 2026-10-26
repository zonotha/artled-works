"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

type Orientation = "landscape" | "portrait";

type MoyaWork = {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  tag: string;
  description: string;
  image: string;
  orientation: Orientation;
  reflection: string[];
};

const works: MoyaWork[] = [
  artworks.veilOfStrength,
  artworks.veilOfStrengthMonochrome,
  artworks.thulaMoya,
  artworks.whereTheFlameLives,
  artworks.umthandazi,
  artworks.indawoYomoya,
];

function WallLabel({ work }: { work: MoyaWork }) {
  return (
    <div className="moya-wall-label">
      <p className="moya-work-label">MOYA</p>

      <h2>{work.title}</h2>

      <div className="moya-meta">
        <span>{work.year}</span>
        <span>{work.medium}</span>
        <span>{work.dimensions}</span>
      </div>

      <p className="moya-tag">{work.tag}</p>
    </div>
  );
}

function Description({ work }: { work: MoyaWork }) {
  return (
    <div className="moya-description">
      <p className="moya-section-label">DESCRIPTION</p>
      <p>{work.description}</p>
    </div>
  );
}

function Reflection({ work }: { work: MoyaWork }) {
  return (
    <div className="moya-reflection">
      <p className="moya-section-label">REFLECTION</p>

      <div>
        {work.reflection.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function LandscapePanel({ work }: { work: MoyaWork }) {
  return (
    <section className="moya-panel moya-landscape-panel">
      <div className="moya-landscape-art">
        <div className="moya-image-wrap">
          <Image
            src={work.image}
            alt={work.title}
            fill
            priority
            sizes="75vw"
            className="moya-image"
          />
        </div>
      </div>

      <div className="moya-landscape-info">
        <WallLabel work={work} />

        <div className="moya-landscape-copy">
          <Description work={work} />
          <Reflection work={work} />
        </div>
      </div>
    </section>
  );
}

function PortraitPanel({ work }: { work: MoyaWork }) {
  return (
    <section className="moya-panel moya-portrait-panel">
      <div className="moya-portrait-main">
        <div className="moya-portrait-art">
          <div className="moya-image-wrap">
            <Image
              src={work.image}
              alt={work.title}
              fill
              priority
              sizes="50vw"
              className="moya-image"
            />
          </div>
        </div>

        <WallLabel work={work} />
      </div>

      <div className="moya-portrait-copy">
        <Description work={work} />
        <Reflection work={work} />
      </div>
    </section>
  );
}

export default function Moya() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();

        scrollElement.scrollLeft += event.deltaY;
      }
    };

    scrollElement.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      scrollElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className="moya-page">
      <header className="moya-header">
        <Link href="/" className="moya-brand">
          ARTLED WORKS
        </Link>
      </header>

      <div className="moya-scroll" ref={scrollRef}>
        <div className="moya-track">
          <section className="moya-panel moya-opening">
            <div className="moya-opening-inner">
              <p className="moya-eyebrow">EXHIBITION I</p>

              <h1>MOYA</h1>

              <p className="moya-opening-title">
                A conversation with spirit.
              </p>

              <div className="moya-opening-rule" />

              <p className="moya-opening-text">
                MOYA explores the spaces where identity, memory, heritage
                and spirit meet. Through portraiture, stillness and symbols,
                the works ask us to look inward—to recognise what has shaped
                us, what protects us, and what continues to live within.
              </p>

              <p className="moya-opening-instruction">
                Scroll horizontally to enter the exhibition.
              </p>
            </div>
          </section>

          {works.map((work) =>
            work.orientation === "landscape" ? (
              <LandscapePanel key={work.title} work={work} />
            ) : (
              <PortraitPanel key={work.title} work={work} />
            ),
          )}

          <section className="moya-panel moya-closing">
            <div className="moya-closing-inner">
              <p className="moya-eyebrow">MOYA</p>

              <h2>
                The conversation
                <br />
                continues.
              </h2>

              <div className="moya-opening-rule" />

              <p>
                Spirit does not always speak loudly.
                Sometimes it waits in stillness, memory,
                ritual and the quiet things we carry.
              </p>

              <Link href="/exhibitions" className="moya-return">
                Back to Exhibitions <span>→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <footer className="moya-footer">
        <Link href="/">ARTLED WORKS</Link>
      </footer>
    </main>
  );
}