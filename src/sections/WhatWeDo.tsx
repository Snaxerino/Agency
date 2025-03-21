export default function WhatWeDo() {
	return (
		<section className="border-b border-neutral-200 relative grid grid-cols-12">
			<div className="col-span-4 flex flex-col justify-between border-r border-neutral-200">
				<div className="space-y-1 p-6">
					<span className="text-caption-xs font-geist text-neutral-600">[3]</span>
					<p className="text-label-lg text-neutral-950">What we bring to the table.</p>
				</div>
				<p className="p-6 text-label-xs text-neutral-950">Time and Business type may be different.</p>
			</div>
			<div className="col-span-8">
				<div className="border-b border-neutral-200">
					<h6 className="text-neutral-950 text-label-lg p-6">We work with businesses models like</h6>
					<div className="flex divide-x divide-neutral-200 border-t border-neutral-200">
						<div className="w-full h-40 px-6 py-3 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">SAAS</span>
						</div>
						<div className="w-full h-40 px-6 py-3 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">Real Estate</span>
						</div>
						<div className="w-full h-40 px-6 py-3 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">B2B</span>
						</div>
						<div className="w-full h-40 px-6 py-3 flex items-center justify-center">
							<span className="text-label-lg text-neutral-950">Ecommerce</span>
						</div>
					</div>
				</div>
				<div>
					<h6 className="text-neutral-950 text-label-lg p-6 items-center flex gap-1">How much time do we need <span className="text-label-sm text-neutral-600">[ Minimum ]</span></h6>
					<div className="flex divide-x divide-neutral-200 border-t border-neutral-200">
						<div className="w-full h-40 flex flex-col items-center justify-center">
							<p className="text-label-lg text-neutral-950">MVPS</p>
							<span className="text-label-md text-neutral-500">6 weeks</span>
						</div>
						<div className="w-full h-40 flex flex-col items-center justify-center">
							<p className="text-label-lg text-neutral-950">Marketing Pages</p>
							<span className="text-label-md text-neutral-500">5 weeks</span>
						</div>
						<div className="w-full h-40 flex flex-col items-center justify-center">
							<p className="text-label-lg text-neutral-950">Web Aplication</p>
							<span className="text-label-md text-neutral-500">5 weeks</span>
						</div>
						<div className="w-full h-40 flex flex-col items-center justify-center">
							<p className="text-label-lg text-neutral-950">0 → 1</p>
							<span className="text-label-md text-neutral-500">90 days</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}