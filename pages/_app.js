import '../styles/globals.scss'
import Head from "next/head";
import Script from "next/script";
import Navbar from "../sections/navbar";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Arnau García - Porfolio</title>
                <meta name="description"
                      content="Hola! Soy Arnau García, un programador con ganas de alcanzar nuevos retos y aportar nuevas cosas al mundo."/>
                <Script src={""}/>
                <meta name="author" content="Arnau Garcia"/>
            </Head>
            <Navbar/>
            <div className={"wrapper"}>
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp
