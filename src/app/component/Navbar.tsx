"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { stagger, animate } from "framer-motion";

const Navbar = ({
	setOpenDropdown,
	setWidth,
	navLinkObject,
}: {
	setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
	setWidth: React.Dispatch<React.SetStateAction<number>>;
	navLinkObject: { path: string; linkname: string }[];
}) => {
	return (
		<div>
			<div className={"navbar flex justify-between"}>
				<div className="mx-5 my-3">
					<h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
						Creative
					</h1>
				</div>
				<div className="hidden lg:block my-3">
					{navLinkObject.map((eachLink, idx) => {
						return (
							<Link
								key={idx}
								href={eachLink.path}
								className="px-5 text-[16px]"
							>
								{eachLink.linkname}
							</Link>
						);
					})}
				</div>

				<button
					id="dropdownDefaultButton"
					data-dropdown-toggle="dropdown"
					type="button"
					className="lg:hidden mx-6"
					aria-hidden="true"
					data-dropdown-trigger="click"
					onClick={() => {
						setOpenDropdown((prev) => !prev);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				</button>
				{/* Dropdown for small screens */}
			</div>
		</div>
	);
};

export default Navbar;
