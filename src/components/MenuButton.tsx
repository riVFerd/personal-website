import {cn} from "@/lib/utils";

type MenuButtonProps = {
  className?: string,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}
const MenuButton = ({className, isOpen, setIsOpen}: MenuButtonProps) => {
  const commonClasses = "w-full h-0.5 my-1.5 rounded-lg transition-all duration-500 bg-white ";
  return (
    <button id="menu-btn" className={cn(
      'mr-2 relative transition-all duration-500',
      {'mt-4': isOpen},
      className
    )} onClick={() => setIsOpen(!isOpen)}>
      <div className={cn(commonClasses, {'-rotate-[46deg] translate-x-1': isOpen})}></div>
      <div className={cn(commonClasses, 'absolute right-0', isOpen ? 'w-1.5 h-1.5 ' : '')}></div>
      <p className={cn('mt-4 transition-all duration-500 text-white', {'text-transparent': isOpen})}>Menu</p>
    </button>
  )
}

export default MenuButton;