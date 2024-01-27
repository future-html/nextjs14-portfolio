"use client";

import Link from "next/link";

import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import Aboutme from "./component/About/Aboutme";
import Project from "./component/Project/Project";
import { useState, useEffect } from "react";
import Achievement from "./component/Achievement";

export default function Home() {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [width, setWidth] = useState<number>(window.innerWidth);
	const navLinkObject = [
		{ path: "/", linkname: "HomePage" },
		{ path: "/portfolio", linkname: "Portfolio" },
		{ path: "/services", linkname: "Services" },
		{ path: "/testimonials", linkname: "Testimonials" },
		{ path: "/contact", linkname: "Contact" },
		{ path: "/get-in-touch", linkname: "Get in touch" },
		{ path: "/about", linkname: "About" },
	];
	console.log(openDropdown);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function AllPage() {
		return (
			<div>
				<Navbar
					setOpenDropdown={setOpenDropdown}
					setWidth={setWidth}
					navLinkObject={navLinkObject}
				/>
				<div className="px-10 py-10">
					<Herosection />
					<Achievement />
					<Aboutme />
					<Project />
				</div>
			</div>
		);
	}

	// use

	return (
		<div className="">
			{width < 1024 ? !openDropdown && AllPage() : AllPage()}

			{width < 1024 && openDropdown && (
				<div className={`w-full sm:px-3 px-5 py-10 bg-opacity-0`}>
					<div className="flex justify-end">
						<button
							className="sticky top-0"
							onClick={() => setOpenDropdown(false)}
						>
							Close
						</button>
					</div>
					<div className="">
						{navLinkObject.map((eachLink, idx) => {
							return (
								<Link
									key={idx}
									href={eachLink.path}
									className=" px-5 text-xl w-full flex justify-center items-center py-5"
								>
									{eachLink.linkname}
								</Link>
							);
						})}
					</div>

					{/* Set w-full to make the width of each link full */}
				</div>
			)}
		</div>
	);
}
