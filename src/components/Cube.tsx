interface CubeProps {
	className?: string;
  }

export default function Cube({className}: CubeProps) {
	return (
		<div className={`hidden md:block size-[11px] bg-white border border-neutral-200 absolute ${className}`}>
		</div>
	)
}