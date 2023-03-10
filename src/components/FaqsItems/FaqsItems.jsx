import React, {useState} from "react";

const Item = ({title, children}) => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<div className="border-b-2 border-solid hover:border-main-color">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full lg:py-10 pb-4 px-5 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="lg:text-2xl text-lg text-start">{title}</p>
				<svg
					viewBox="0 0 24 24"
					className={`w-3 text-gray-600 transform transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
				>
					<polyline
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeMiterlimit="10"
						points="2,7 12,17 22,7"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			{isOpen && (
				<div className="p-4 pt-0">
					<p className="text-gray-700">{children}</p>
				</div>
			)}
		</div>
	);
};
const FaqsItems = () => {
	let text = `< Вакансии />`
	return (
		<div id="Вакансии" className="container w-full mx-auto lg:py-36 py-10 px-8">
			<h2
				className="lg:text-5xl md:text:4xl sm:text-3xl text-3xl lg:pb-16 pb-8 text-text-color text-center lg:text-start font-bold">
				{text}
			</h2>
			<div className="space-y-4">
				<Item title="Преподаватель по фронтенд разработке">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</Item>
				<Item title="Преподаватель Go ">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</Item>
				<Item title="Преподаватель Kotlin">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</Item>
				<Item title="Преподаватель JS">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</Item>
			</div>
		</div>
	);
};

export default FaqsItems