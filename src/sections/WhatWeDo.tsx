import ProjectType from "../components/ProjectType";

export default function WhatWeDo() {
	return (
		<section className="border-b border-neutral-200 relative flex flex-col md:grid md:grid-cols-12">
			<div className="col-span-4 flex flex-col justify-between md:border-r border-neutral-200 border-b md:border-b-0">
				<div className="space-y-1 p-6">
					<span className="text-caption-xs font-geist text-neutral-600">[3]</span>
					<p className="text-label-lg text-neutral-950">What we bring to the table.</p>
				</div>
				<p className="p-6 text-label-sm text-neutral-700 hidden md:block">Time and Business type may be different.</p>
			</div>
			<div className="col-span-8">
				<div className="border-b border-neutral-200">
					<h6 className="text-neutral-950 text-label-lg p-6 bg-neutral-50">We work with businesses models like</h6>
					<div className="grid grid-cols-2 grid-row-2 lg:flex lg:divide-x divide-neutral-200 border-t border-neutral-200">
						<div className="border-b border-r lg:border-b-0 border-neutral-200 w-full col-span-1 lg:w-full size-24 lg:min-w-32 lg:h-40 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">SAAS</span>
						</div>
						<div className="border-b border-neutral-200 lg:border-b-0 w-full row-span-1 lg:w-full size-24 lg:min-w-32 lg:h-40 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">Real Estate</span>
						</div>
						<div className="border-r border-neutral-200 w-full col-span-1 lg:w-full size-24 lg:min-w-32 lg:h-40 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">B2B</span>
						</div>
						<div className="w-full row-span-1 lg:w-full size-24 lg:min-w-32 lg:h-40 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">Ecommerce</span>
						</div>
					</div>
				</div>
				<ProjectType/>
				<p className="p-6 text-label-sm text-neutral-700 block md:hidden">Time and Business type may be different.</p>
			</div>
		</section>
	)
}