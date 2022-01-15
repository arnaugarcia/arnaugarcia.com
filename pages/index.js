import Header from "../sections/header";
import Profile from "../sections/profile/profile";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
    library.add(fab);

    return (
        <div id={"main"}>
            <section className={"module-header full-height parallax bg-dark bg-dark-30 header-light"} id="home">
                <Header/>
            </section>
            <section className="module" id="profile">
                <Profile/>
            </section>
        </div>
    )
}
