"use client";

import { motion } from "framer-motion";

interface GalleryTransitionProps {
  message: string;
}

export default function GalleryTransition({
  message,
}: GalleryTransitionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1 }}
      className="gallery-transition"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {message}
      </motion.p>

      <motion.div
        className="transition-line"
        initial={{ width: 0 }}
        whileInView={{ width: "160px" }}
        transition={{
          delay: 0.8,
          duration: 1.4,
          ease: "easeOut",
        }}
      />
    </motion.section>
  );
}
