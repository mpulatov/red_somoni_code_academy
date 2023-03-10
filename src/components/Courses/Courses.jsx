import React from 'react';
import javascript from '../../assets/Ajavascript.png'
import golang from '../../assets/Agolang.png'
import kotlin from '../../assets/Akotlin.png'
import figma from '../../assets/figma.png'
import wifi from '../../assets/wifi.png'


function Courses() {
	let text = `< Наши курсы />`
	return (
		<div id="Курсы" className="w-full mx-auto bg-main-bg">
			<div className="container py-14 px-8">
				<h2 className="lg:text-5xl md:text:4xl sm:text-3xl text-3xl text-white text-center lg:text-start font-bold">
					{text}
				</h2>
				<div className="grid gap-8 mb-8 lg:grid-cols-3 md:grid-cols-2 lg:py-5 py-7 sm:py-10 lg:py-20">
					<div
						className="px-10 py-10 bg-white text-start border-solid border-2 border-main-color rounded-min">
						<img src={javascript} alt="javascript" className="pb-10 w-max lg:w-fit w-[35%]"/>
						<p
							className="inline-block max-w-xs mx-auto lg:text-2xl text-xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Frontend разработка
							уровень 1
						</p>
						<p className="mx-auto text-lg lg:text-xl text-text-color pt-2 lg:pt-5 pb-3 lg:pb-7">
							3 - месяца
						</p>
						<p className="text-xl lg:text-2xl text-main-color">300 сомони / месяц</p>
					</div>
					
					
					<div
						className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min">
						<img src={golang} alt="javascript" className="pb-10 w-max lg:w-fit w-[35%]"/>
						<p
							className="inline-block max-w-xs mx-auto text-2xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Backend разработка
							уровень 1
						</p>
						<p className="mx-auto text-xl text-text-color pt-5 pb-7">
							6 - месяца
						</p>
						<p className="text-2xl text-main-color">500 сомони / месяц</p>
					</div>
					
					
					<div
						className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min">
						<img src={kotlin} alt="javascript" className="pb-10 w-max lg:w-fit w-[35%]"/>
						<p
							className="inline-block max-w-xs mx-auto text-2xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Android разработка
							уровень 1
						</p>
						<p className="mx-auto text-xl text-text-color pt-5 pb-7">
							7 - месяца
						</p>
						<p className="text-2xl text-main-color">450 сомони / месяц</p>
					</div>
					
					<div
						className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min">
						<img src={figma} alt="javascript" className="pb-10 w-max lg:w-fit w-[35%]"/>
						<p
							className="inline-block max-w-xs mx-auto text-2xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							UX/UI Design
							уровень 1
						</p>
						<p className="mx-auto text-xl text-text-color pt-5 pb-7">
							3 - месяца
						</p>
						<p className="text-2xl text-main-color">450 сомони / месяц</p>
					</div>
					
					<div
						className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min">
						<img src={wifi} width={128} height={128} alt="javascript" className="pb-10"/>
						<p
							className="inline-block max-w-xs mx-auto text-2xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Компьютерные
							сети
						</p>
						<p className="mx-auto text-xl text-text-color pt-5 pb-7">
							3 - месяца
						</p>
						<p className="text-2xl text-main-color">450 сомони / месяц</p>
					</div>
				
				</div>
			</div>
		
		</div>
	);
}

export default Courses;