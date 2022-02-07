import {useEffect, useState} from "react";
import MenuItem from "./menu-item";
import {useTranslation} from "next-i18next";

export default function Navbar({currentSection, scrollNavbarLimit = 5}) {

    const {t, i18n} = useTranslation('common');

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
                            <MenuItem title={t('NAVBAR.HOME')} anchor={'home'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.PROFILE')} anchor={'profile'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.PORTFOLIO')} anchor={'portfolio'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.SERVICES')} anchor={'services'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.RESUME')} anchor={'resume'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.PROJECTS')} anchor={'projects'} currentSection={currentSection}/>
                            <MenuItem title={t('NAVBAR.CONTACT')} anchor={'contact'} currentSection={currentSection}/>
                            <li className={`menu-item-has-children${languageSubmenuOpen ? ' sub-menu-open' : ''}`}
                                onMouseOver={() => setLanguageSubmenuOpen(true)}
                                onMouseLeave={() => setLanguageSubmenuOpen(false)}>
                                <a className={"pointer"}>
                                    <span className="menu-item-span">{t('NAVBAR.LANGUAGES.TITLE')}</span>
                                </a>
                                <ul className="sub-menu">
                                    {['ca', 'es', 'en'].map((language, index) => {
                                        return (
                                            <li className="menu-item pointer" key={index}>
                                                <a onClick={() => i18n.changeLanguage(language)}>{t(`NAVBAR.LANGUAGES.${language.toUpperCase()}`)}</a>
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
    )
}
