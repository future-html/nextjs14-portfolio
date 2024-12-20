"use client";
import React, { useState, useTransition } from "react";
import IconImageComputer from "./iconpicture.png";
import Image from "next/image";
import motion from "framer-motion";
import TabButton from "./Tabbutton";
const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>Next.js</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Mechanical students</li>
				<li>Chulalongkorn University</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>AWS Cloud Practitioner</li>
				<li>Google Professional Cloud Developer</li>
			</ul>
		),
	},
];

const Aboutme = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};
	const result = TAB_DATA.find((t) => {
		return t.id === tab;
	});
	console.log(result);

	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={IconImageComputer}
					alt="computerImage"
					width={500}
					height={500}
					className="mx-auto"
				></Image>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About me</h2>
					<p className="text-base lg:text-lg">
						I am a full stack web developer with a passion for creating interactive and responsive web
						applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
						Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and
						skill set. I am a team player and I am excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className="mt-8">{result?.content}</div>
				</div>
			</div>
		</section>
	);
};

export default Aboutme;
