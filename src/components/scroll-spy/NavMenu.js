import {useEffect, useState} from "react";
import {ScrollSpy} from "./ScrollSpy";
import {useTranslation} from 'next-i18next/pages';
import Link from 'next/link'
import {useTheme} from "../../hooks/useTheme";

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
    const {target, boundingClientRect} = entry;
    const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
    if (!menuItem) return;
    if (boundingClientRect.y <= 0 && isInVewPort) {
        menuItem.classList.add("active");
    } else if (menuItem.classList.contains("active")) {
        menuItem.classList.remove("active");
    }
};

const SunIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"/>
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              d="M20.5 14.2A8.2 8.2 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2z"/>
    </svg>
);

const NavMenu = ({options, scrollNavbarLimit = 5}) => {

    const {t} = useTranslation('common');
    const {isDark, ready, toggleTheme} = useTheme();

    const [scrollLimit, setScrollLimit] = useState(false);
    const [isNavOpen, openNavigation] = useState(false);
    const [languageSubmenuOpen, setLanguageSubmenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = (event) => {
            setScrollLimit(event.target.documentElement.scrollTop >= scrollNavbarLimit);
            openNavigation(false);
        };
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollNavbarLimit]);

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
        window.location.hash = e.target.attributes['data-scrollspy-id'].value;

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
                                    {['ca', 'es', 'en'].map((locale) => {
                                        return (
                                            <li className="menu-item pointer" key={locale}>
                                                <Link href={`/${locale}`}>
                                                    {t(`NAVBAR.LANGUAGES.${locale.toUpperCase()}`)}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className="theme-toggle-item">
                                <button
                                    type="button"
                                    className="theme-toggle"
                                    onClick={toggleTheme}
                                    aria-label={isDark ? t('NAVBAR.THEME.LIGHT') : t('NAVBAR.THEME.DARK')}
                                    title={isDark ? t('NAVBAR.THEME.LIGHT') : t('NAVBAR.THEME.DARK')}
                                >
                                    <span className="menu-item-span">
                                        {ready ? (isDark ? <SunIcon/> : <MoonIcon/>) : <MoonIcon/>}
                                        <span className="theme-toggle-label">
                                            {isDark ? t('NAVBAR.THEME.LIGHT') : t('NAVBAR.THEME.DARK')}
                                        </span>
                                    </span>
                                </button>
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
        {options.length > 0 && <ScrollSpy handleScroll={onScrollUpdate}/>}
        <NavMenu options={options}/>
        {children}
    </>);
};
