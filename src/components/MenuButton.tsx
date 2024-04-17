type MenuButtonProps = {
    className?: string,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}
const MenuButton = ({className, isOpen, setIsOpen}: MenuButtonProps) => {
    return (
        <button id="menu-btn" className="mr-2" onClick={() => setIsOpen(!isOpen)}>
            <div className={"w-8 h-1 bg-black my-1.5 rounded-lg transition-all " + (isOpen ? 'rotate-45 translate-y-2.5 ' : 'w-8 ') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded-lg transition-all " + (isOpen ? 'opacity-0 ' : 'w-5 ') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded-lg transition-all " + (isOpen ? '-rotate-45 -translate-y-2.5 ' : 'w-7 ') + className}></div>
        </button>
    )
}

export default MenuButton;