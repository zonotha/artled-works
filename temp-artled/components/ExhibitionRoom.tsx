"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ExhibitionRoomProps {
  children: ReactNode;
}

export default function ExhibitionRoom({ children }: ExhibitionRoomProps) {
  const [enteredRoom, setEnteredRoom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!enteredRoom && window.scrollY > 120) {
        setEnteredRoom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enteredRoom]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, delay: enteredRoom ? 0 : 0.2 }}
      className="gallery-room"
    >
      {children}
    </motion.section>
  );
}
