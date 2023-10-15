type ChipsProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
}

const Chips = ({children, className, onClick}: ChipsProps) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full bg-white bg-opacity-10 w-fit hover:bg-opacity-30 ${className}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default Chips;