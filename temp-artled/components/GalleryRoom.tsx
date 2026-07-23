"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GalleryRoomProps {
	children: ReactNode;
}

export default function GalleryRoom({
	children,
}: GalleryRoomProps) {
	return (
		<motion.section
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			viewport={{
				once: true,
				amount: 0.15,
			}}
			transition={{
				duration: 1.4,
			}}
			className="gallery-room"
		>
			{children}
		</motion.section>
	);
}

