import React from "react";

const Step = () => {
	return (
		<div className="container px-8 py-16 mx-auto lg:px-8 lg:py-20">
			<div className="border-solid border-4 border-main-color rounded-min py-12 px-10">
				<div className="grid gap-8 row-gap-8 lg:grid-cols-3 lg:divide-x">
					<div className="sm:text-start">
						<span className="text-7xl font-bold text-main-color">01</span>
						<h6 className="font-semibold leading-5 lg:text-2xl py-1 lg:py-5">Весь материал разбит на небольшие
							уроки</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.
						</p>
					</div>
					<div className="sm:text-start lg:pl-10">
						<span className="text-7xl font-bold text-main-color">02</span>
						<h6 className="font-semibold leading-5 lg:text-2xl py-1 lg:py-5">Обучение
							через практику</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.
						</p>
					</div>
					<div className="sm:text-start lg:pl-10">
						<span className="text-7xl font-bold text-main-color">03</span>
						<h6 className="font-semibold leading-5 lg:text-2xl py-1 lg:py-5">Нет ограничений по времени</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Можно совмещать учёбу с работой
							и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step