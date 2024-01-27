"use client";

import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { useInView, motion } from "framer-motion";
const Project = () => {
	const [tag, setTag] = useState<string>("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const listCategory = ["All", "Website", "Mobile Application"];

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Project</h2>

			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				{listCategory.map((eachTag, idx) => {
					return (
						<ProjectTag
							key={idx}
							category={eachTag}
							isSelected={tag === eachTag}
							setTag={setTag}
						/>
					);
				})}
			</div>

			<ul
				ref={ref}
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
			>
				<motion.li
					variants={{
						initial: { y: 50, opacity: 0 },
						animate: { y: 0, opacity: 1 },
					}}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.3, delay: 0.4 }}
				>
					<ProjectCard />
				</motion.li>
				<motion.li
					variants={{
						initial: { y: 50, opacity: 0 },
						animate: { y: 0, opacity: 1 },
					}}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.3, delay: 2 * 0.4 }}
				>
					<ProjectCard />
				</motion.li>
				<motion.li
					variants={{
						initial: { y: 50, opacity: 0 },
						animate: { y: 0, opacity: 1 },
					}}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.3, delay: 3 * 0.4 }}
				>
					<ProjectCard />
				</motion.li>
				<motion.li
					variants={{
						initial: { y: 50, opacity: 0 },
						animate: { y: 0, opacity: 1 },
					}}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					transition={{ duration: 0.3, delay: 4 * 0.4 }}
				>
					<ProjectCard />
				</motion.li>
			</ul>
		</section>
	);
};

export default Project;

// if click --> tag change
