import {useEffect, useState} from "react";

export default function MenuItem({title, anchor, currentSection}) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(anchor === currentSection);
    }, [currentSection])

    function onItemClick(event) {
        event.preventDefault();
        document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
    }

    return (<li>
        <a href={`#${anchor}`} className={active ? 'active' : ''} onClick={onItemClick}>
            <span className="menu-item-span">{title}</span>
        </a>
    </li>)
}
