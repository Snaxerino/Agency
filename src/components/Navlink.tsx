import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    isHovered: boolean;
    setHovered: (hovering: boolean) => void;
};

export default function NavLink({ href, children, isHovered, setHovered }: NavLinkProps) {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link
            to={href}
            className={`w-min hover:text-neutral-950 text-label-lg md:text-label-sm active:text-neutral-950 transition-colors duration-500 active:duration-0 ${isActive ? "text-neutral-950" : isHovered ? "text-neutral-400" : "text-neutral-700"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {children}
        </Link>
    );
}
