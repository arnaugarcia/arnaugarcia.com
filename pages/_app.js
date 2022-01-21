import '../styles/globals.scss'
import '../styles/et-line.css'
import Head from "next/head";
import Navbar from "../sections/navbar/navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Arnau García - Porfolio</title>
                <meta name="description"
                      content="Hola! Soy Arnau García, un programador con ganas de alcanzar nuevos retos y aportar nuevas cosas al mundo."/>
                <meta name="author" content="Arnau Garcia"/>
            </Head>
            <Navbar/>
            <div className={"wrapper"}>
                <Component {...pageProps} />
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <span className="copyright">© {new Date().getFullYear()} Arnau Garcia, All Rights Reserved.</span>
                            </div>
                            <div className="col-md-6">
                                <ul className="social-icons">
                                    <li>
                                        <a target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={['fab', 'github']}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default MyApp
