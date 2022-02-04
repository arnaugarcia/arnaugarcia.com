import '../styles/globals.scss'
import '../styles/et-line.css'
import Head from "next/head";
import Navbar from "../sections/navbar/navbar";
import Footer from "../layout/footer";
import {NextScript} from "next/document";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Arnau García - Porfolio</title>
                <meta name="description"
                      content="Hola! Soy Arnau García, un programador con ganas de alcanzar nuevos retos y aportar nuevas cosas al mundo."/>
                <meta name="author" content="Arnau Garcia"/>
                <NextScript
                    src={`https://www.google.com/recaptcha/api.js?render=6Lcg7yoeAAAAACWp-OvBb2361m93f3fil53rzArx`}
                    async
                    defer
                />
                <NextScript
                    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=&v=weekly`}
                    async
                />
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
