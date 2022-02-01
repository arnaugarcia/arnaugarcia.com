import '../styles/globals.scss'
import '../styles/et-line.css'
import Head from "next/head";
import Navbar from "../sections/navbar/navbar";
import Footer from "../layout/footer";

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
                <Footer/>
            </div>
        </>
    )
}

export default MyApp
