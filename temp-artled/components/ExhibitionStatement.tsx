"use client";

import { motion } from "framer-motion";

interface ExhibitionStatementProps {
  title: string;
  subtitle: string;
  statement: string;
}

export default function ExhibitionStatement({
  title,
  subtitle,
  statement,
}: ExhibitionStatementProps) {
  return (
    <motion.section
      className="exhibition-statement"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="statement-label">
        Exhibition Statement
      </p>

      <h1 className="statement-title">
        {title}
      </h1>

      <h2
        className="statement-subtitle"
        style={{ whiteSpace: "pre-line" }}
      >
        {subtitle}
      </h2>

      <p className="statement-text">
        {statement}
      </p>
    </motion.section>
  );
}
