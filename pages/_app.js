import '../styles/globals.scss'
import '../styles/et-line.css'
import Head from "next/head";
import Navbar from "../sections/navbar/navbar";
import Footer from "../layout/footer";
import {useState} from "react";
import { appWithTranslation } from 'next-i18next';

const MyApp = ({Component, pageProps}) => {

    const [currentSection, setCurrentSection] = useState('home');

    pageProps.onSectionChanges = (section) => {
        setCurrentSection(section);
    };

    return (
        <>
            <Head>
                <title>Arnau García - Porfolio</title>
                <meta name="description"
                      content="Hola! Soy Arnau García, un programador con ganas de alcanzar nuevos retos y aportar nuevas cosas al mundo."/>
                <meta name="author" content="Arnau Garcia"/>
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=6Lcg7yoeAAAAACWp-OvBb2361m93f3fil53rzArx`}
                    async
                    defer
                />
            </Head>
            <Navbar currentSection={currentSection}/>
            <div className={"wrapper"}>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </>
    )
}

export default appWithTranslation(MyApp)
