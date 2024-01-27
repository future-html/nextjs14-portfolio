import React from "react";
import Image from "next/image";
import Photography from "./photography.png";
import Link from "next/link";
const ProjectCard = () => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative"
				style={{
					backgroundSize: "cover",
					background: `url(${"https://img.reintech.io/variants/s2odbtfbi1vnj0v0lpk08uk9n9fl/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b"})`,
				}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  hover:flex hover:bg-opacity-80 transition-all duration-500  ">
					<div className="flex justify-center items-center w-full h-full opacity-0 hover:opacity-95">
						<Link
							href={"#"}
							className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
							</svg>
						</Link>
						<Link
							href={"#"}
							className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="text-[#ADB7BE] hover:text-white group/link"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sit voluptatem, quibusdam
					accusantium dolores iste placeat architecto voluptate consequuntur facere quis explicabo neque itaque eum
					quas possimus incidunt? Non, natus!
				</h5>
				<p className="text-[#ADB7BE]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci laborum quia repudiandae totam,
					suscipit eligendi, odio, dolorem possimus dolores doloribus? Aliquid dolore tempora debitis aspernatur
					sequi cum necessitatibus ad?
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
