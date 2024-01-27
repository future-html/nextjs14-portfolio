import React from "react";

const ProjectTag = ({
	category,
	isSelected,
	setTag,
}: {
	category: string;
	isSelected: boolean;
	setTag: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const addButtonStyle = isSelected
		? "text-white border-primary-500"
		: "text-[#ADB7BE] border-slate-600 hover:border-white";
	return (
		<button
			className={`${addButtonStyle} rounded-full border-2 px-6 py-3 text-sm md:text-lg cursor-pointer`}
			onClick={() => setTag(category)}
		>
			{category}
		</button>
	);
};

export default ProjectTag;
