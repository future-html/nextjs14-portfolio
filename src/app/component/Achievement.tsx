"use client";

import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumber = dynamic(
	() => {
		return import("react-animated-numbers");
	},
	{ ssr: false }
);

// use server side = false because it doesn;t call self is not defined
const Achievement = () => {
	return (
		<div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
			<h2 className="text-white text-4xl font-bold flex flex-row">
				~
				{
					<AnimatedNumber
						includeComma
						animateToNumber={parseInt("200")}
						locale="en-US"
						className="text-white text-4xl font-bold"
						config={(_: any, index: number) => {
							return {
								mass: 1,
								friction: 200,
								tensions: 200 * 2,
								DelayNode: 200,
							};
						}}
					/>
				}
				+
			</h2>
			<p className="text-[#ADB7BE] text-base">awards</p>
		</div>
	);
};

export default Achievement;
