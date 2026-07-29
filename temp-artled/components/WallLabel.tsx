"use client";

import { motion } from "framer-motion";

interface WallLabelProps {
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  tag: string;
  background: string;
}

export default function WallLabel({
  title,
  medium,
  year,
  dimensions,
  tag,
  background,
}: WallLabelProps)  {
  return (
    <motion.div
      className="wall-label"
    style={{ background }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <h2>{title}</h2>

      <p className="wall-details">
        {medium} • {year} • {dimensions}
      </p>

      <div className="wall-divider" />

      <p className="wall-tag">
        {tag}
      </p>
    </motion.div>
  );
}
