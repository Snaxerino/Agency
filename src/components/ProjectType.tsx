import { Link } from "react-router-dom"

export default function ProjectType() {
	return (
		<div>
			<h6 className="text-neutral-950 text-label-lg p-6 items-center flex gap-1 bg-neutral-50">How much time do we need <span className="text-label-sm text-neutral-600">[ Minimum ]</span></h6>
			<button className="border-t border-neutral-200 group/overlay relative z-10 cursor-pointer ease-in-out duration-300 
			w-full focus-visible:outline-none grid grid-cols-2 grid-row-2 lg:flex divide-neutral-200 border-b md:border-b-0">
				<div className="w-full size-24 lg:h-40 flex flex-col items-center justify-center border-r border-neutral-200 border-b lg:border-b-0">
					<p className="text-label-lg text-neutral-950">MVPS</p>
					<span className="text-label-md text-neutral-500">6 weeks</span>
				</div>
				<div className="w-full size-24 lg:h-40 flex flex-col items-center justify-center lg:border-r border-neutral-200 border-b lg:border-b-0">
					<p className="text-label-lg text-neutral-950">Marketing Pages</p>
					<span className="text-label-md text-neutral-500">5 weeks</span>
				</div>
				<div className="w-full size-24 lg:h-40 flex flex-col items-center justify-center border-r border-neutral-200">
					<p className="text-label-lg text-neutral-950">Web Aplication</p>
					<span className="text-label-md text-neutral-500">5 weeks</span>
				</div>
				<div className="w-full size-24 lg:h-40 flex flex-col items-center justify-center">
					<p className="text-label-lg text-neutral-950">0 → 1</p>
					<span className="text-label-md text-neutral-500">90 days</span>
				</div>
				<div className="group-hover/overlay:grid group/button group-focus-visible/overlay:grid w-[calc(100%-2px)] h-full absolute place-content-center z-30 top-0 left-0 bg-white/17 overflow-hidden hidden backdrop-blur-sm">
					<Link to="#" className="group-focus/button:flex flex gap-2.5 select-none text-center px-3.5 py-1.5 overflow-hidden bg-neutral-950 rounded-[10px] label-md text-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950" target="_blank">Book a Call</Link>
				</div>
			</button>
		</div>
	)
 }