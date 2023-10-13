'use client';

import {useState} from "react";
import MenuButton from "@/components/MenuButton";
import Link from "next/link";
import MenuList from "@/components/MenuList";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full fixed flex flex-col">
                <div className="w-full h-16 bg-primary flex justify-between items-center px-4">
                    <h1 className="font-bold text-xl text-white">Virgy Ferdian</h1>
                    <MenuButton className="bg-white" isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <MenuList isOpen={isOpen}/>
            </header>
        </>
    )
}

export default Header;