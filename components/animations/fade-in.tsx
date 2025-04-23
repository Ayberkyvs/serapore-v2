"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
	children: ReactNode;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	distance?: number;
	className?: string;
	amount?: number;
	as?: keyof React.JSX.IntrinsicElements;
}

const FadeIn: React.FC<FadeInProps> = ({
	children,
	delay = 0,
	duration = 0.6,
	direction = "up",
	distance = 30,
	className = "",
	amount = 0.3,
	as = "div",
}) => {
	const directions = {
		up: { x: 0, y: distance },
		down: { x: 0, y: -distance },
		left: { x: distance, y: 0 },
		right: { x: -distance, y: 0 },
		none: { x: 0, y: 0 },
	};

	// @ts-ignore
	const Comp = motion[as];

	return (
		<Comp
			initial={{ opacity: 0, ...directions[direction] }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration, delay, ease: "easeOut" }}
			viewport={{ once: true, amount }}
			className={className}
		>
			{children}
		</Comp>
	);
};

export default FadeIn;
