import { Link } from "react-router-dom";
import work1 from "../assets/imgs/work1.jpg"

export default function Work() {
	return (
		<section className="flex flex-col lg:grid grid-cols-12 border-b border-neutral-200 relative">
			<div className="order-2 md:order-0 w-full col-span-8 bg-[#fafafa] md:p-24 lg:pb-0 lg:pr-0 lg:pl-12 lg:pt-12 h-96 lg:h-auto border-b border-neutral-200 lg:border-0 lg:min-h-[388px] overflow-hidden">
				{/* <div className="w-full h-full bg-white border-l border-t border-neutral-200 rounded-tl-4xl"></div> */}
				<img src={work1} className="lg:w-full lg:h-full rounded-none md:rounded-t-2xl lg:rounded-tr-none lg:rounded-tl-4xl object-contain lg:object-contain md:shadow-2xl"/>
			</div>
			<div className="flex flex-col col-span-4 lg:border-l border-b md:border-b-0 border-neutral-200">
				<div className="p-6 w-full md:pr-0 border-b border-neutral-200">
					<span className="text-caption-xs font-geist text-neutral-600">[2]</span>
					<p className="text-label-lg text-neutral-950">Our proudest work.</p>
				</div>
				<div className="p-6 flex md:flex-col justify-between grow">
					<ul className="space-y-4">
						<li>
							<Link to="#" className="text-neutral-500 hover:text-brand text-label-md duration-300 ease-in-out">Lotus</Link>
						</li>
						<li>
							<Link to="#" className="text-neutral-500 hover:text-brand text-label-md duration-300 ease-in-out">À Deriva (“Adrift”)</Link>
						</li>
						<li>
							<Link to="#" className="text-neutral-500 hover:text-brand text-label-md duration-300 ease-in-out">Mangiaro</Link>
						</li>
						<li>
							<Link to="#" className="text-neutral-500 hover:text-brand text-label-md duration-300 ease-in-out">Sea of Books</Link>
						</li>
					</ul>
					<Link to="/work" className="text-label-md text-neutral-500 hover:text-neutral-950 underline self-end underline-offset-4 md:self-start">See more</Link>
				</div>
			</div>
		</section>
	)
}