import Link from "next/link";
import {usePathname} from "next/navigation";

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
            <ul className={"absolute right-0 bg-primary w-full h-screen flex flex-col items-center justify-center transition-all duration-300 -z-50 " + (isOpen ? 'top-14' : '-top-[100vh]')}>
                <li className="mb-4" onClick={closeMenu}>
                    <Link href="/" className={`text-white text-xl ${pathName === '/' ? 'font-extrabold' : ''}`}>About</Link>
                </li>
                <li className="mb-4" onClick={closeMenu}>
                    <Link href="/project" className={`text-white text-xl ${pathName === '/project' ? 'font-extrabold' : ''}`}>Experience</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuList;