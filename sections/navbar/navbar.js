import {useEffect, useState} from "react";

export default function Navbar({scrollNavbarLimit = 5}) {

    const [scrollLimit, setScrollLimit] = useState(false);

    function onScroll(event) {
        setScrollLimit(event.target.documentElement.scrollTop >= scrollNavbarLimit);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    })

    return (
        <header className={`header header-center header-light ${scrollLimit ? 'header-small header-shadow' : ''}`}>
            <div className="container-fluid">
                <div className="inner-header">
                    <a className="inner-brand">
                        <span className={`navbar-brand ${scrollLimit ? 'brand-dark' : ''}`}>Arnau Garcia</span>
                    </a>
                </div>
                <div className="inner-navigation collapse">
                    <div className="inner-nav onepage-nav">
                        <ul>
                            <li>
                                <a href="#home">
                                    <span className="menu-item-span">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#profile">
                                    <span className="menu-item-span">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio">
                                    <span className="menu-item-span">Porfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <span className="menu-item-span">Services</span>
                                </a>
                            </li>
                            <li href="#resume">
                                <a>
                                    <span className="menu-item-span">Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span className="menu-item-span">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span className="menu-item-span">Contact</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">
                                    <span className="menu-item-span">Languages</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-toggle">
                    <a data-toggle="collapse" data-target=".inner-navigation">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </a>
                </div>
            </div>
        </header>
    )
}
