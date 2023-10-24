'use client';

import {useState} from "react";
import MenuButton from "@/components/MenuButton";
import MenuList from "@/components/MenuList";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full fixed flex flex-col z-50">
                <div className="w-full h-16 bg-primary flex justify-between items-center px-4">
                    <Link href="/">
                        <Image src="/vf-logo.png" alt="rivferd logo" width="48" height="48"/>
                    </Link>
                    <MenuButton className="bg-white" isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <MenuList isOpen={isOpen}/>
            </header>
        </>
    )
}

export default Header;