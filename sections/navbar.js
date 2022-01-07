export default function Navbar() {
    return (
        <header class="header header-center header-light">
            <div class="container-fluid">
                <div class="inner-header">
                    <a class="inner-brand">
                        <span class="navbar-brand">Arnau Garcia</span>
                    </a>
                </div>
                <div class="inner-navigation collapse">
                    <div class="inner-nav onepage-nav">
                        <ul>
                            <li>
                                <a>
                                    <span class="menu-item-span">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#profile">
                                    <span class="menu-item-span">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="menu-item-span">Porfolio</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="menu-item-span">Services</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="menu-item-span">Resume</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="menu-item-span">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="menu-item-span">Contact</span>
                                </a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#">
                                    <span class="menu-item-span">Languages</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-toggle">
                    <a data-toggle="collapse" data-target=".inner-navigation">
                        <span class="icon-bar"/>
                        <span class="icon-bar"/>
                        <span class="icon-bar"/>
                    </a>
                </div>
            </div>
        </header>
    )
}
