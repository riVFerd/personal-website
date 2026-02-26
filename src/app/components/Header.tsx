'use client';

import {useState} from "react";
import MenuButton from "@/components/MenuButton";
import MenuList from "@/components/MenuList";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <>
            <header className="w-full fixed flex flex-col z-50">
                <div className="w-full h-16 bg-primary flex justify-between items-center px-4">
                    <Link href="/">
                        <Image src="/vf-logo.png" alt="rivferd logo" width="48" height="48"/>
                    </Link>
                    <MenuButton className="select-none lg:hidden pt-4" isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <nav className="hidden lg:block">
                        <ul className="flex flex-row gap-8 mx-8">
                            <li><Link href='/' className={`${pathName === '/' ? 'font-extrabold text-white' : 'text-gray-300'}`}>About</Link></li>
                            <li><Link href='/project' className={`${pathName === '/project' ? 'font-extrabold text-white' : 'text-gray-300'}`}>Projects</Link></li>
                        </ul>
                    </nav>
                </div>
                <MenuList isOpen={isOpen} setIsOpen={setIsOpen}/>
            </header>
        </>
    )
}

export default Header;