"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Profile from "../assets/Profile.png";
export default function Herosection() {
	return (
		<div className="block lg:flex">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="mb-5"
			>
				<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
						Hello, I&apos;m
					</span>

					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							"Future",
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							"Junior front-end developer",
							1000,
							"Mechanical engineering",
							1000,
							"Programming lovers",
							1000,
						]}
						wrapper="span"
						speed={50}
						style={{ fontSize: "0.5em", display: "block" }}
						repeat={Infinity}
					/>
				</h1>

				<br />
				<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quos totam, nam ea quaerat eius dolor
					vero voluptatum in nemo sapiente officiis veritatis, porro aspernatur quidem laboriosam eveniet, dolore
					ullam.
				</p>
				<div>
					<Link
						href="/contact"
						className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
					>
						Hire me
					</Link>
					<Link
						href="/"
						className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
					>
						<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
					</Link>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex justify-center items-center mt-5"
			>
				<Image
					src={Profile}
					alt="profile"
					width={600}
					height={600}
				/>
			</motion.div>
		</div>
	);
}
