import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

type MenuListProps = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}
const MenuList = ({isOpen, setIsOpen}: MenuListProps) => {
    const pathName = usePathname();
    const closeMenu = function () {
      setTimeout(() => setIsOpen(!isOpen), 300);
    };

    return (
        <nav>
            <ul className={cn("absolute right-0 bg-primary w-full h-screen flex flex-col items-center justify-center transition-all duration-500 -z-50 ", (isOpen ? 'right-0' : '-right-[100vw]'))}>
                <li className="mb-4" onClick={closeMenu}>
                    <Link href="/" className={`text-white text-xl ${pathName === '/' ? 'font-extrabold' : ''}`}>About</Link>
                </li>
                <li className="mb-4" onClick={closeMenu}>
                    <Link href="/project" className={`text-white text-xl ${pathName === '/project' ? 'font-extrabold' : ''}`}>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuList;