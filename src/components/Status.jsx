// eslint-disable-next-line react/prop-types
const Status = ({ children, id }) => {
    return (
        <span className={` ${id === "Alive" ? "bg-green-500/100" : id === "Dead" ? "bg-red-500" :id === "unknown" ? "bg-yellow-300":"bg-blue-700"} ml-2 text-black text-xs font-medium  px-2.5 py-0.5 rounded  `}>{children}</span>

    )
}

export default Status
