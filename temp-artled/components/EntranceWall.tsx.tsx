"use client";

import Image from "next/image";

interface EntranceWallProps {
  image: string;
  title: string;
  medium: string;
  year: string;
  orientation?: "portrait" | "landscape";
}

export default function EntranceWall({
  image,
  title,
  medium,
  year,
  orientation = "portrait",
}: EntranceWallProps) {
  return (
    <section
      style={{
        background: "#F8F5F2",
        padding: "120px 0 40px",
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