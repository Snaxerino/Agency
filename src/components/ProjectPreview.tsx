import { ReactNode } from "react"

type Props = {
	label: string,
	children?: ReactNode
}

export default function ProjectPreview({label, children}: Props) {
	return (
		<div className="gap-4 p-6 grid grid-cols-12">
			<div className="relative col-span-4 mt-6 h-100">
				<div className="sticky top-20 md:top-28">
					<span className="text-neutral-950 text-label-md">{label}</span>
				</div>
			</div>
			<div className="w-full h-96 col-span-8 bg-neutral-100 rounded-3xl">{children}</div>
		</div>
	)
}