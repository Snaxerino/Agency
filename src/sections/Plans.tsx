import Check from "../components/Check";

export default function Plans() {
  return (
	<section className="border-b border-neutral-200">
		<div className="p-6 w-full md:pr-0 border-b border-neutral-200 text-center">
			<span className="text-caption-xs font-geist text-neutral-600">[2]</span>
			<p className="text-label-lg text-neutral-950">Our proudest work.</p>
		</div>
		<div className="flex flex-col md:flex-row">
			<div className="w-full border-b md:border-b-0 md:border-r border-neutral-200 p-6 flex flex-col gap-4">
				<div>
					<h6 className="text-label-lg text-neutral-950">Retainers</h6>
					<p className="text-neutral-500 text-label-md">Project price starting at 750€/month.</p>
				</div>
				<ul className="flex flex-col gap-3">
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> No surprises, just predictable costs.</li>
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Constant maintenance, support and optimisation.</li>
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Possibility to pause for up to 30 days.</li>
				</ul>
			</div>
			<div className="w-full p-6 flex flex-col gap-4">
				<div>
					<h6 className="text-label-lg text-neutral-950">One time project</h6>
					<p className="text-neutral-500 text-label-md">Project price starting at 899€.</p>
				</div>
				<ul className="flex flex-col gap-3">
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Dedicated team, design and development.</li>
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Milestone based delivery.</li>
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Updates every 2 days.</li>
					<li className="text-neutral-950 flex gap-2 text-label-md"><Check /> Custom pricing based on your needs.</li>
				</ul>
			</div>
		</div>
		</section>
	)
}