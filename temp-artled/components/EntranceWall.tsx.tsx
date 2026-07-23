"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface EntranceWallProps {
  image: string;
  title: string;
  medium: string;
  year: string;
}

export default function EntranceWall({
  image,
  title,
  medium,
  year,
}: EntranceWallProps) {

  const [enteredRoom, setEnteredRoom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!enteredRoom && window.scrollY > 120) {
        setEnteredRoom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enteredRoom]);

  return (
    <section className="artwork-hero">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="artwork-image"
      />

      <div className="artwork-overlay">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            enteredRoom
              ? {
                  opacity: 0,
                  y: 35,
                }
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.9,
            delay: enteredRoom ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="hero-text"
        >
          <h1 className="hero-title">
            {title}
          </h1>

          <p className="hero-details">
            {medium} · {year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}