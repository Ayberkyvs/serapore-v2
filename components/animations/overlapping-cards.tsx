"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OverlappingCards() {
	const [isHovered, setIsHovered] = useState(false);

	// İlk kart için varyantlar
	const firstCardVariants = {
		initial: {
			x: 0,
			y: 0,
			zIndex: 0,
			boxShadow:
				"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		},
		hover: {
			x: 80,
			y: -40,
			zIndex: 10,
			boxShadow:
				"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
		},
	};

	const secondCardVariants = {
		initial: {
			x: 80,
			y: -40,
			zIndex: 10,
			boxShadow:
				"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
		},
		hover: {
			x: 0,
			y: 0,
			zIndex: 0,
			boxShadow:
				"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		},
	};

	return (
		<div
			className="relative mx-auto my-20 size-[320px] xs:size-[450px]"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Alttaki kart */}
			<motion.div
				className="absolute w-[200px] h-[300px] xs:w-[300px] xs:h-[400px] bg-gray-200 rounded-lg overflow-hidden"
				variants={firstCardVariants}
				initial="initial"
				animate={isHovered ? "hover" : "initial"}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<img
					src="/media/gallery/IMG_7596.webp"
					alt="Birinci kart"
					className="w-full h-full object-cover"
				/>
			</motion.div>

			{/* Üstteki kart (sağ çapraz) */}
			<motion.div
				className="absolute w-[200px] h-[300px] xs:w-[300px] xs:h-[400px] bg-white rounded-lg overflow-hidden"
				variants={secondCardVariants}
				initial="initial"
				animate={isHovered ? "hover" : "initial"}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<img
					src="/media/gallery/IMG_7595.webp"
					alt="İkinci kart"
					className="w-full h-full object-cover"
				/>
			</motion.div>
		</div>
	);
}
