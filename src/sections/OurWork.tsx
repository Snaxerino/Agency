import ProjectPreview from "../components/ProjectPreview"

export default function OurWork() {
  return (
    <section className="flex flex-col border-b border-neutral-200">
		<div className="p-6 space-y-1 w-full text-center border-b border-neutral-200 bg-neutral-50 md:bg-white">
			<span className="text-caption-xs font-geist text-neutral-600">[2]</span>
			<p className="text-label-lg text-neutral-950">Our proudest work.</p>
		</div>
		<div>
			<ProjectPreview label="Lotus" />
			<ProjectPreview label="À Deriva (“Adrift”)" />
			<div className="gap-4 pt-0 px-6 pb-6 md:pt-6 md:pb-4 md:px-6 grid md:grid-cols-12">
				<div className="relative col-span-4 mt-6 md:h-100">
					<span className="text-neutral-950 text-label-md">Mangiaro</span>
				</div>
				<div className="w-full h-64 md:h-96 col-span-8 bg-neutral-100 rounded-xl md:rounded-3xl"></div>
			</div>
		</div>
    </section>
  )
}

