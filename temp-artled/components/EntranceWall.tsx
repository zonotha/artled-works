"use client";

import Image from "next/image";

interface EntranceWallProps {
  image: string;
  title: string;
  background: string;
  orientation?: "portrait" | "landscape";
  scale?: number;
}

export default function EntranceWall({
  image,
  title,
  background,
  orientation = "portrait",
  scale = 1,
}: EntranceWallProps) {
  return (
    <section
      style={{
        background,
        padding: "120px 0 120px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",

          width:
            orientation === "landscape"
              ? "min(95vw, 1200px)"
              : "min(90vw, 700px)",

          aspectRatio:
            orientation === "landscape"
              ? "16 / 9"
              : "3 / 4",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}