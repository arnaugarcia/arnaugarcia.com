export default function PortfolioFilter({title, value, onSelectFilter, active = false}) {
    return <li className={`${active ? 'active' : ''}`}>
        <a onClick={() => onSelectFilter({value})} className={"pointer"}>{title}</a>
    </li>
}
