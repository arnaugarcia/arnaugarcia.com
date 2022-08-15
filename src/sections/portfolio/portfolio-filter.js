export default function PortfolioFilter({title, value, onFilter, current = false}) {
    return <li>
        <a onClick={() => onFilter(value)} className={`pointer ${current ? 'current' : ''}`}>{title}</a>
    </li>
}
