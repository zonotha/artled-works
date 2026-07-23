"use client";
import { motion } from "framer-motion";

interface WallLabelProps {
	title: string;
	medium: string;
	year: string;
	dimensions: string;
	tag: string;
}

export default function WallLabel({
	title,
	medium,
	year,
	dimensions,
	tag
}: WallLabelProps) 
{
	return (
		<motion.div
			className="wall-label"
			initial={{ opacity: 0, y: 30 }}
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
