import {useEffect, useState} from "react";
import {ScrollSpy} from "./ScrollSpy";
import {useTranslation} from "next-i18next";
import Link from 'next/link'

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
    const {target, boundingClientRect} = entry;
    const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
    if (boundingClientRect.y <= 0 && isInVewPort) {
        menuItem.classList.add("active");
    } else {
        if (menuItem.classList.contains("active")) {
            menuItem.classList.remove("active");
        }
    }
};

const NavMenu = ({options, scrollNavbarLimit = 5}) => {

    const {t} = useTranslation('common');

    const [scrollLimit, setScrollLimit] = useState(false);
    const [isNavOpen, openNavigation] = useState(false);
    const [languageSubmenuOpen, setLanguageSubmenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    })

    const onScroll = (event) => {
        setScrollLimit(event.target.documentElement.scrollTop >= scrollNavbarLimit);
        openNavigation(false);
    }

    const toggleNavigation = () => {
        openNavigation(!isNavOpen);
    }

    const onLogoClick = (event) => {
        event.preventDefault();
        document.getElementById('home').scrollIntoView({behavior: "smooth"});
    }

    const onClick = (e) => {
        e.preventDefault();
        // Set the hash
        window.location.hash = e.target.hash;

        const targetSection = document.querySelector(`${e.target.hash}`);
        if (targetSection) {
            window.scrollTo(0, targetSection.offsetTop + 1);
        } else {
            if (e.target.parentNode.hash) {
                const offset = document.querySelector(`${e.target.parentNode.hash}`).offsetTop;
                window.scrollTo(0, offset + 1);
            }
        }
    };

    return (
        <header className={`header header-center header-light ${scrollLimit ? 'header-small header-shadow' : ''}`}>
            <div className="container-fluid">
                <div className="inner-header">
                    <a className="inner-brand pointer" onClick={onLogoClick}>
                        <span className={`navbar-brand ${scrollLimit ? 'brand-dark' : ''}`}>{t('APP.NAME')}</span>
                    </a>
                </div>
                <div className={`inner-navigation collapse ${isNavOpen ? 'show' : ''}`}>
                    <div className="inner-nav onepage-nav">
                        <ul>
                            {options.map((option) => (
                                <li key={option.hash}>
                                    <a href={`#${option.hash}`} onClick={onClick} data-scrollspy-id={option.hash}>
                                        <span className="menu-item-span"
                                              onClick={onClick}
                                              data-scrollspy-id={option.hash}>{option.title}</span>
                                    </a>
                                </li>
                            ))}
                            <li className={`menu-item-has-children${languageSubmenuOpen ? ' sub-menu-open' : ''}`}
                                onMouseOver={() => setLanguageSubmenuOpen(true)}
                                onMouseLeave={() => setLanguageSubmenuOpen(false)}>
                                <a className={"pointer"}>
                                    <span className="menu-item-span">{t('NAVBAR.LANGUAGES.TITLE')}</span>
                                </a>
                                <ul className="sub-menu">
                                    {['ca', 'es', 'en'].map((locale, index) => {
                                        return (
                                            <li className="menu-item pointer" key={index}>
                                                <Link href={'/'} locale={locale}>
                                                    {t(`NAVBAR.LANGUAGES.${locale.toUpperCase()}`)}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
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
    );
};

export const WithNavMenu = ({children, selector}) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const navMenuSections = document.querySelectorAll(selector);

        const optionsFromSections = Array.from(navMenuSections)
            .filter((section) => section.id)
            .filter((section) => section.hasAttribute('data-scrollspy'))
            .map((section) => buildMenuItemFrom(section));

        setOptions(optionsFromSections);

        function buildMenuItemFrom(section) {
            return {
                hash: section.id,
                title: section.dataset.navTitle
            };
        }
    }, [selector]);

    return (<>
        <ScrollSpy handleScroll={onScrollUpdate}/>
        <NavMenu options={options}/>
        {children}
    </>);
};
