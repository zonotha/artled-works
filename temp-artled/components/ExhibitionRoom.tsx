"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ExhibitionRoomProps {
  children: ReactNode;
}

export default function ExhibitionRoom({
  children,
}: ExhibitionRoomProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="gallery-room"
    >
      {children}
    </motion.section>
  );
}