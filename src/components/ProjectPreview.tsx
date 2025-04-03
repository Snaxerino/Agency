import { ReactNode } from "react"

type Props = {
	label: string,
	children?: ReactNode
}

export default function ProjectPreview({label, children}: Props) {
	return (
		<div className="gap-4 pt-0 px-6 pb-6 md:pt-6 md:pb-4 md:px-6 grid md:grid-cols-12">
			<div className="relative col-span-4 mt-6 md:h-100">
				<div className="md:ticky top-20 md:top-28">
					<span className="text-neutral-950 text-label-md">{label}</span>
				</div>
			</div>
			<div className="w-full h-64 md:h-96 col-span-8 bg-neutral-100 rounded-xl md:rounded-3xl">{children}</div>
		</div>
	)
}