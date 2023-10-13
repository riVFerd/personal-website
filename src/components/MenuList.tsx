import Link from "next/link";

type MenuListProps = {
    isOpen: boolean;
}
const MenuList = ({isOpen}: MenuListProps) => {
    return (
        <nav>
            <ul className={"absolute top-14 right-0 bg-primary w-full h-screen flex flex-col items-center justify-center transition-all " + (isOpen ? 'opacity-100' : 'opacity-0')}>
                <li className="mb-4">
                    <Link href="#about" className="text-white font-bold text-xl">About</Link>
                </li>
                <li className="mb-4">
                    <Link href="#experience" className="text-white font-bold text-xl">Experience</Link>
                </li>
                <li className="mb-4">
                    <Link href="#education" className="text-white font-bold text-xl">Education</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuList;