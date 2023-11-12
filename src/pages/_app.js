import '../styles/globals.scss'
import '../styles/et-line.css'
import Head from "next/head";
import Footer from "../layout/footer";
import { appWithTranslation, useTranslation } from "i18next-ssg";

const MyApp = ({Component, pageProps}) => {

    const {t} = useTranslation('common');

    return (
        <>
            <Head>
                <title>{t('APP.TITLE')}</title>
                <meta name="description"
                      content={t('APP.DESCRIPTION')}/>
                <meta name="author" content={t('APP.NAME')}/>
            </Head>
            <div className={"wrapper"}>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </>
    )
}

export default appWithTranslation(MyApp)
