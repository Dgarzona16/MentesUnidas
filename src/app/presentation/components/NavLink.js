'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, children, className, onClick }) => {
    const pathname = usePathname()
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`${className} ${isActive ? 'text-accent-600 border-b-2 border-accent-600' : 'hover:text-primary-700'} transition-colors font-titulos`}
        >
            {children}
        </Link>
    )
}