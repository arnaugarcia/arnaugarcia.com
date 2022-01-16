export default function PortfolioFilter({title, value, onFilter, active = false}) {
    return <li className={`${active ? 'active' : ''}`}>
        <a onClick={() => onFilter({value})} className={"pointer"}>{title}</a>
    </li>
}
