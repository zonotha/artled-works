"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
}

export default function MotionSection({
  children,
}: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
