import {useEffect, useState} from "react";
import MenuItem from "./menu-item";

export default function Navbar({currentSection, scrollNavbarLimit = 5}) {

    const [scrollLimit, setScrollLimit] = useState(false);
    const [isNavOpen, openNavigation] = useState(false);

    function onScroll(event) {
        setScrollLimit(event.target.documentElement.scrollTop >= scrollNavbarLimit);
        openNavigation(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    })

    const toggleNavigation = () => {
        openNavigation(!isNavOpen);
    }

    const onLogoClick = (event) => {
        event.preventDefault();
        document.getElementById('home').scrollIntoView({behavior: "smooth"});
    }

    return (
        <header className={`header header-center header-light ${scrollLimit ? 'header-small header-shadow' : ''}`}>
            <div className="container-fluid">
                <div className="inner-header">
                    <a className="inner-brand pointer" onClick={onLogoClick}>
                        <span className={`navbar-brand ${scrollLimit ? 'brand-dark' : ''}`}>Arnau Garcia</span>
                    </a>
                </div>
                <div className={`inner-navigation collapse ${isNavOpen ? 'show' : ''}`}>
                    <div className="inner-nav onepage-nav">
                        <ul>
                            <MenuItem title={'Home'} anchor={'home'} currentSection={currentSection}/>
                            <MenuItem title={'Profile'} anchor={'profile'} currentSection={currentSection}/>
                            <MenuItem title={'Portfolio'} anchor={'portfolio'} currentSection={currentSection}/>
                            <MenuItem title={'Services'} anchor={'services'} currentSection={currentSection}/>
                            <MenuItem title={'Resume'} anchor={'resume'} currentSection={currentSection}/>
                            <MenuItem title={'Projects'} anchor={'projects'} currentSection={currentSection}/>
                            <MenuItem title={'Contact'} anchor={'contact'} currentSection={currentSection}/>
                            <li className="menu-item-has-children">
                                <a href="#">
                                    <span className="menu-item-span">Languages</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-toggle">
                    <a onClick={toggleNavigation}>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </a>
                </div>
            </div>
        </header>
    )
}
