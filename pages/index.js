import Header from "../sections/header";
import Profile from "../sections/profile";

export default function Home() {
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
