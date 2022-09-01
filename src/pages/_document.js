import {Head, Html, Main, NextScript} from 'next/document'

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Document() {

    return (
        <Html>
            <script
                src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
                async
                defer
            />
            <link rel={'canonical'} href={'https://arnaugarcia.com'}/>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
